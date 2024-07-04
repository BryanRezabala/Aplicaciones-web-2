
import { OnGatewayConnection, OnGatewayDisconnect, SubscribeMessage, WebSocketGateway, WebSocketServer } from '@nestjs/websockets';
import { AprendizajeService } from './Aprendizaje.service';
import { Server, Socket } from 'socket.io';
import { CreateAprendizajeInput } from './dto/Aprendizaje.dto.';

@WebSocketGateway({ cors: true })
export class AprendizajeGateway implements OnGatewayConnection, OnGatewayDisconnect {

  @WebSocketServer()
  wss: Server;

  constructor(private readonly AprendizajeService: AprendizajeService) {}

  async handleConnection(client: Socket, ...args: any[]) {
    const token = client.handshake.headers.authentication as string;
    try {
      await this.AprendizajeService.registerClient(client, token);
    } catch (error) {
      client.disconnect();
      return;
    }
    this.wss.emit('clients-updated', this.AprendizajeService.getConnectedClients());
  }

  handleDisconnect(client: Socket) {
    this.AprendizajeService.removeClient(client.id);
    this.wss.emit('clients-updated', this.AprendizajeService.getConnectedClients());
  }

  @SubscribeMessage('message-from-client')
  async onMessageFromClient(client: Socket, payload: CreateAprendizajeInput): Promise<void> {
    const registro = await this.AprendizajeService.create(payload);
    this.wss.emit('message-from-server', {
      fullName: this.AprendizajeService.getUserfullName(client.id),
      message: registro,
    });
  }
}
