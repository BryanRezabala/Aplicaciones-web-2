import { Injectable } from '@nestjs/common';
import { CarreraUniversitaria } from './dto/create-CarreraUniversitaria.dto';
import { UpdateDto } from './dto/update-CarreraUniversitaria.dto';
import { Repository } from 'typeorm';
import { CarreraUniversitarias } from './entities/CarreraUniversitaria.entity';
import { InjectRepository } from '@nestjs/typeorm';

@Injectable()
export class CarreraUniversitariaService {
  constructor(
    @InjectRepository(CarreraUniversitarias)
    private readonly carreraUniversitariaRepository: Repository<CarreraUniversitarias>
  ) {}

  async create(createCarreraUniversitariaDto: CarreraUniversitaria) {
    const carrera = this.carreraUniversitariaRepository.create(createCarreraUniversitariaDto);
    await this.carreraUniversitariaRepository.save(carrera);
    return carrera;
  }

  async findAll() {
    return this.carreraUniversitariaRepository.find();
  }

  async findOne(id: number) {
    return this.carreraUniversitariaRepository.findOneBy({ id });
  }

  async update(id: number, updateCarreraUniversitariaDto: UpdateDto) {
    const updated = await this.carreraUniversitariaRepository.update(id, updateCarreraUniversitariaDto);
    return updated.affected > 0 ? this.carreraUniversitariaRepository.findOneBy({ id }) : null;
  }

  async remove(id: number) {
    const carrera = await this.findOne(id);
    if (carrera) {
      // Eliminación lógica
      carrera.estado = 'Desactivado'; // Asegúrate de tener un campo 'estado' en tu entidad
      await this.carreraUniversitariaRepository.save(carrera);
    }
    return carrera;
  }

  async removePhysically(id: number) {
    const carrera = await this.findOne(id);
    if (carrera) {
      await this.carreraUniversitariaRepository.remove(carrera);
    }
    return carrera;
  }
}
