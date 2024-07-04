import { Module } from '@nestjs/common';
import { AprendizajeService } from './Aprendizaje.service';
import { AprendizajeGateway } from './Aprendizaje.gateway';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AprendizajeEntiti } from './entiti/entiti.Aprendizaje';

@Module({
  providers: [AprendizajeGateway, AprendizajeService],
  imports: [TypeOrmModule.forFeature([AprendizajeEntiti])],
  exports: [TypeOrmModule]
})
export class AprendizajeModule {}
