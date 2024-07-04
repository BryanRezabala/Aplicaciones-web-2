import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Socket } from 'socket.io';
import { Repository } from 'typeorm';
import { CreateAprendizajeInput } from './dto/Aprendizaje.dto.';
import { AprendizajeEntiti } from './entiti/entiti.Aprendizaje';

interface User {
    id: string;
    name: string;
    isActive: boolean    
}

interface ConnectedClients {
    [id: string]: {
        socket: Socket;
        user: User;
    }
}

const users: User[] = [
    {id: '1', name: 'Juan', isActive: true},
    {id: '2', name: 'Pedro', isActive: true},
    {id: '3', name: 'Lucas', isActive: true},
    {id: '4', name: 'Andres', isActive: true}
]

@Injectable()
export class AprendizajeService {
  constructor(
    @InjectRepository(AprendizajeEntiti)
    private readonly aprendizajeRepository: Repository<AprendizajeEntiti>
  ) {}

  private connectedClients: ConnectedClients = {};

  async create(data: CreateAprendizajeInput): Promise<AprendizajeEntiti> {
    const newRegistro = this.aprendizajeRepository.create(data);
    return this.aprendizajeRepository.save(newRegistro);
  }

  registerClient(socket: Socket, userId: string) {
    const user = users.find(user => user.id === userId);
    if (!user) {
      throw new Error('User not found');
    }
    if (!user.isActive) {
      throw new Error('User is not active');
    }

    this.checkUserConnection(user);

    this.connectedClients[socket.id] = {
      socket: socket,
      user: user
    }
  }

  removeClient(clientId: string) {
    delete this.connectedClients[clientId];
  }

  getConnectedClients(): string[] {
    return Object.keys(this.connectedClients);
  }

  getUserfullName(socketId: string): string {
    return this.connectedClients[socketId].user.name;
  }

  updateUserStatus(user: User) {
    const client = this.connectedClients[user.id];
    if (client) {
      client.user = user;
    }
  }

  checkUserConnection(user: User) {
    let connectionCount = 0;

    for (const clientId of Object.keys(this.connectedClients)) {
      const connectedClient = this.connectedClients[clientId];
      if (connectedClient.user.id === user.id) {
        connectionCount++;
        if (connectionCount >= 3) {
          throw new Error('Supera el limite de conecion');
        }
      }
    }
  }
}
