import { Module } from '@nestjs/common';
import { InstructorService } from './instructor.service';
import { InstructorResolver } from './instructor.resolver';
import { Instructor } from './entities/instructor.entity';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  providers: [InstructorResolver, InstructorService],
  imports: [ TypeOrmModule.forFeature([Instructor]) ],
  exports: [ TypeOrmModule ]
})
export class InstructorModule {}
