import { Injectable } from '@nestjs/common';
import { CreateIdiomaInput } from './dto/create-idioma.input';
import { UpdateIdiomaInput } from './dto/update-idioma.input';
import { Idioma } from './entities/idioma.entity';
import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';

@Injectable()
export class IdiomaService {
  constructor(
    @InjectRepository(Idioma)
    private readonly idiomaRepository: Repository<Idioma>
  ) {}
  
  async create(createIdiomaInput: CreateIdiomaInput): Promise<Idioma> {
    const created = this.idiomaRepository.create(createIdiomaInput);
    return await this.idiomaRepository.save(created);
  }

  async findAll(estado: string): Promise<Idioma[]> {
    if (estado === 'Activo' || estado === 'Desactivo') {
      return this.idiomaRepository.find({ where: { estado } });
    }
    return await this.idiomaRepository.find();
  }

  async findOne(id: number): Promise<Idioma> {
    return await this.idiomaRepository.findOne({ where: { id } });
  }

  async update(id: number, updateIdiomaInput: UpdateIdiomaInput): Promise<Idioma> {
    const updated = await this.idiomaRepository.preload(updateIdiomaInput);
    if (!updated) throw new Error(`Idioma with id: ${id} not found`);
    return await this.idiomaRepository.save(updated);
  }

  async remove(id: number) {
    const idioma = await this.findOne(id);
    idioma.estado = 'Desactivo';
    return this.idiomaRepository.save(idioma);
  }
}
