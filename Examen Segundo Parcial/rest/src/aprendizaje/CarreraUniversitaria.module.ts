import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { CarreraUniversitariaService } from './CarreraUniversitaria.service';
import { CarreraUniversitariaController } from './CarreraUniversitaria.controller';
import { CarreraUniversitarias } from './entities/CarreraUniversitaria.entity';

@Module({
  controllers: [CarreraUniversitariaController],
  providers: [CarreraUniversitariaService],
  imports: [TypeOrmModule.forFeature([CarreraUniversitarias])],
  exports: [TypeOrmModule],
})
export class CarreraUniversitariaModule {}
