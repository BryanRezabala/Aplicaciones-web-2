import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AprendizajeService } from './aprendizaje.service';
import { AprendizajeController } from './aprendizaje.controller';
import { Aprendizaje } from './entities/aprendizaje.entity';

@Module({
  controllers: [AprendizajeController],
  providers: [AprendizajeService],
  imports: [TypeOrmModule.forFeature([Aprendizaje])],
  exports: [TypeOrmModule],
})
export class AprendizajeModule {}
