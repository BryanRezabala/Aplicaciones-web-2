import { Field, ID, InputType } from '@nestjs/graphql';
import { CreateInstructorInput } from './create-instructor.input';
import { PartialType } from '@nestjs/mapped-types';
import { IsInt } from 'class-validator';

@InputType()
export class UpdateInstructorInput extends PartialType(CreateInstructorInput) {
  @Field(() => ID)
  @IsInt()
  id: number;
}
