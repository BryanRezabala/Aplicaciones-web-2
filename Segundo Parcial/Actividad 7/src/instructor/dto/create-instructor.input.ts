import { InputType, Field, Int } from '@nestjs/graphql';
import { IsString, IsInt } from 'class-validator';

@InputType()
export class CreateInstructorInput {
  @Field(() => String)
  @IsString()
  nombre: string;

  @Field(() => String)
  @IsString()
  fecha_de_nacimiento: string;

  @Field(() => Int)
  @IsInt()
  experiencia: number;

  @Field(() => String)
  @IsString()
  estado: string = "Activo";
}
