import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { InstructorService } from './instructor.service';
import { InstructorController } from './instructor.controller';
import { Instructor } from './entities/instructor.entity';

@Module({
  controllers: [InstructorController],
  providers: [InstructorService],
  imports: [TypeOrmModule.forFeature([Instructor])],
  exports: [TypeOrmModule],
})
export class InstructorModule {}
