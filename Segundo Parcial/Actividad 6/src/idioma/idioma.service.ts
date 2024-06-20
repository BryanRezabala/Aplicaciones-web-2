import { Injectable } from '@nestjs/common';
import { CreateIdiomaDto } from './dto/create-idioma.dto';
import { UpdateIdiomaDto } from './dto/update-idioma.dto';
import { Repository } from 'typeorm';
import { Idioma } from './entities/idioma.entity';
import { InjectRepository } from '@nestjs/typeorm';

@Injectable()
export class IdiomaService {
  constructor(
    @InjectRepository(Idioma)
    private readonly idiomaRepository: Repository<Idioma>
  ) {}

  async create(createIdiomaDto: CreateIdiomaDto) {
    const idioma = this.idiomaRepository.create(createIdiomaDto);
    return this.idiomaRepository.save(idioma);
  }

  async findAll() {
    return this.idiomaRepository.find();
  }

  async findOne(id: number) {
    return this.idiomaRepository.findOneBy({ id });
  }

  async update(id: number, updateIdiomaDto: UpdateIdiomaDto) {
    const updated = await this.idiomaRepository.update(id, updateIdiomaDto);
    return updated.affected > 0 ? this.idiomaRepository.findOneBy({ id }) : null;
  }

  async remove(id: number) {
    const idioma = await this.findOne(id);
    idioma.estado = 'Desactivo';
    return this.idiomaRepository.save(idioma);
  }
}
