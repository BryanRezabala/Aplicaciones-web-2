import { Module } from '@nestjs/common';
import { AprendizajeService } from './aprendizaje.service';
import { AprendizajeController } from './aprendizaje.controller';

@Module({
  controllers: [AprendizajeController],
  providers: [AprendizajeService],
})
export class AprendizajeModule {}
