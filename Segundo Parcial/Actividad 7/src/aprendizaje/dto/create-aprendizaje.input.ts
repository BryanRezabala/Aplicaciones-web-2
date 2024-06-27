import { InputType, Field, Int } from '@nestjs/graphql';
import { IsString, IsInt } from 'class-validator';

@InputType()
export class CreateAprendizajeInput {
  @Field(() => Int)
  @IsInt()
  idiomaid: number;

  @Field(() => Int)
  @IsInt()
  instructorid: number;

  @Field(() => String)
  @IsString()
  fecha: string;

  @Field(() => String)
  @IsString()
  hora: string;

  @Field(() => Int)
  @IsInt()
  numero_horas: number;

  @Field(() => String)
  @IsString()
  nivel: string;
  
  @Field(() => String)
  @IsString()
  estado: string = "Activo";
}
