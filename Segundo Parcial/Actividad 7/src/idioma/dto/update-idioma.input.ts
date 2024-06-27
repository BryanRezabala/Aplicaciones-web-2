import { Field, ID, InputType } from '@nestjs/graphql';
import { CreateIdiomaInput } from './create-idioma.input';
import { PartialType } from '@nestjs/mapped-types';
import { IsInt } from 'class-validator';

@InputType()
export class UpdateIdiomaInput extends PartialType(CreateIdiomaInput) {
  @Field(() => ID)
  @IsInt()
  id: number;
}
