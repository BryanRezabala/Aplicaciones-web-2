import { Injectable } from '@nestjs/common';
import { CreateInstructorInput } from './dto/create-instructor.input';
import { UpdateInstructorInput } from './dto/update-instructor.input';
import { Instructor } from './entities/instructor.entity';
import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';

@Injectable()
export class InstructorService {
  constructor(
    @InjectRepository(Instructor)
    private readonly instructorRepository: Repository<Instructor>
  ) {}
  
  async create(createInstructorInput: CreateInstructorInput): Promise<Instructor> {
    const created = this.instructorRepository.create(createInstructorInput);
    return await this.instructorRepository.save(created);
  }

  async findAll(estado: string): Promise<Instructor[]> {
    if (estado === 'Activo' || estado === 'Desactivo') {
      return this.instructorRepository.find({ where: { estado } });
    }
    return await this.instructorRepository.find();
  }

  async findOne(id: number): Promise<Instructor> {
    return await this.instructorRepository.findOne({ where: { id } });
  }

  async update(id: number, updateInstructorInput: UpdateInstructorInput): Promise<Instructor> {
    const updated = await this.instructorRepository.preload(updateInstructorInput);
    if (!updated) throw new Error(`Instructor with id: ${id} not found`);
    return await this.instructorRepository.save(updated);
  }

  async remove(id: number) {
    const instructor = await this.findOne(id);
    instructor.estado = 'Desactivo';
    return this.instructorRepository.save(instructor);
  }
}
