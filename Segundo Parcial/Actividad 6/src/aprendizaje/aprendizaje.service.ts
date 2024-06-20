import { Injectable } from '@nestjs/common';
import { CreateAprendizajeDto } from './dto/create-aprendizaje.dto';
import { UpdateAprendizajeDto } from './dto/update-aprendizaje.dto';
import { Repository } from 'typeorm';
import { Aprendizaje } from './entities/aprendizaje.entity';
import { InjectRepository } from '@nestjs/typeorm';

@Injectable()
export class AprendizajeService {
  constructor(
    @InjectRepository(Aprendizaje)
    private readonly aprendizajeRepository: Repository<Aprendizaje>
  ) {}

  async create(createAprendizajeDto: CreateAprendizajeDto) {
    console.log({
      ...createAprendizajeDto,
      idioma: { id: createAprendizajeDto.idIdioma },
      instructor: { id: createAprendizajeDto.idInstructor }
    })
    const aprendizaje = this.aprendizajeRepository.create({
      ...createAprendizajeDto,
      idioma: { id: createAprendizajeDto.idIdioma },
      instructor: { id: createAprendizajeDto.idInstructor }
    });
    await this.aprendizajeRepository.save(aprendizaje);
    return aprendizaje;
  }

  async findAll() {
    return this.aprendizajeRepository.find();
  }

  async findOne(id: string) {
    return this.aprendizajeRepository.findOneBy({ id });
  }

  async update(id: string, updateAprendizajeDto: UpdateAprendizajeDto) {
    const updated = await this.aprendizajeRepository.update(id, updateAprendizajeDto);
    return updated.affected > 0 ? this.aprendizajeRepository.findOneBy({ id }) : null;
  }

  async remove(id: string) {
    const aprendizaje = await this.findOne(id);
    aprendizaje.estado = 'Desactivo';
    return this.aprendizajeRepository.save(aprendizaje);
  }
}
