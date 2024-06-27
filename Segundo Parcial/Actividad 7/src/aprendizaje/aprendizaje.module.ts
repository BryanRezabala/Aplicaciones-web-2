import { Module } from '@nestjs/common';
import { AprendizajeService } from './aprendizaje.service';
import { AprendizajeResolver } from './aprendizaje.resolver';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Aprendizaje } from './entities/aprendizaje.entity';

@Module({
  providers: [AprendizajeResolver, AprendizajeService],
  imports: [ TypeOrmModule.forFeature([Aprendizaje]) ],
  exports: [ TypeOrmModule ]
})
export class AprendizajeModule {}
