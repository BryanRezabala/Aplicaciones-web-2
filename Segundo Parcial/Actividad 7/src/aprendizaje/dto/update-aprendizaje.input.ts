import { Field, ID, InputType } from '@nestjs/graphql';
import { CreateAprendizajeInput } from './create-aprendizaje.input';
import { PartialType } from '@nestjs/mapped-types';
import { IsInt } from 'class-validator';

@InputType()
export class UpdateAprendizajeInput extends PartialType(CreateAprendizajeInput) {
  @Field(() => ID)
  @IsInt()
  id: number;
}
