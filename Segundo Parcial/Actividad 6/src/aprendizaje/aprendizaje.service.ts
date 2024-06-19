import { Injectable } from '@nestjs/common';
import { CreateAprendizajeDto } from './dto/create-aprendizaje.dto';
import { UpdateAprendizajeDto } from './dto/update-aprendizaje.dto';

@Injectable()
export class AprendizajeService {
  create(createAprendizajeDto: CreateAprendizajeDto) {
    return 'This action adds a new aprendizaje';
  }

  findAll() {
    return `This action returns all aprendizaje`;
  }

  findOne(id: number) {
    return `This action returns a #${id} aprendizaje`;
  }

  update(id: number, updateAprendizajeDto: UpdateAprendizajeDto) {
    return `This action updates a #${id} aprendizaje`;
  }

  remove(id: number) {
    return `This action removes a #${id} aprendizaje`;
  }
}
