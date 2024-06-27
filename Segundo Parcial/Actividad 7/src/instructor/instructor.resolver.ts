import { Resolver, Query, Mutation, Args } from '@nestjs/graphql';
import { InstructorService } from './instructor.service';
import { CreateInstructorInput } from './dto/create-instructor.input';
import { UpdateInstructorInput } from './dto/update-instructor.input';
import { Instructor } from './entities/instructor.entity';

@Resolver(() => Instructor)
export class InstructorResolver {
  constructor(private readonly instructoresService: InstructorService) {}

  @Mutation(() => Instructor)
  createInstructor(@Args('createInstructorInput') createInstructorInput: CreateInstructorInput): Promise<Instructor> {
    return this.instructoresService.create(createInstructorInput);
  }

  @Query(() => [Instructor], { name: 'instructores' })
  findAll(
    @Args('estado', { type: () => String,  nullable: true }) estado: string
  ) {
    return this.instructoresService.findAll(estado);
  }

  @Query(() => Instructor, { name: 'instructor' })
  findOne(@Args('id') id: number): Promise<Instructor>  {
    return this.instructoresService.findOne(id);
  }

  @Mutation(() => Instructor)
  updateInstructor(@Args('updateInstructorInput') updateInstructorInput: UpdateInstructorInput): Promise<Instructor> {
    return this.instructoresService.update(updateInstructorInput.id, updateInstructorInput);
  }

  @Mutation(() => Instructor)
  removeInstructor(@Args('id') id: number): Promise<Instructor> {
    return this.instructoresService.remove(id);
  }
}
