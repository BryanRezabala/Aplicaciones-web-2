import { Injectable } from '@nestjs/common';
import { CreateInstructorDto } from './dto/create-instructor.dto';
import { UpdateInstructorDto } from './dto/update-instructor.dto';
import { Repository } from 'typeorm';
import { Instructor } from './entities/instructor.entity';
import { InjectRepository } from '@nestjs/typeorm';

@Injectable()
export class InstructorService {
  constructor(
    @InjectRepository(Instructor)
    private readonly instructorRepository: Repository<Instructor>
  ) {}

  async create(createInstructorDto: CreateInstructorDto) {
    const instructor = this.instructorRepository.create(createInstructorDto);
    return this.instructorRepository.save(instructor);
  }

  async findAll() {
    return this.instructorRepository.find();
  }

  async findOne(id: number) {
    return this.instructorRepository.findOneBy({ id });
  }

  async update(id: number, updateInstructorDto: UpdateInstructorDto) {
    const updated = await this.instructorRepository.update(id, updateInstructorDto);
    return updated.affected > 0 ? this.instructorRepository.findOneBy({ id }) : null;
  }

  async remove(id: number) {
    const instructor = await this.findOne(id);
    instructor.estado = 'Desactivo';
    return this.instructorRepository.save(instructor);
  }
}
