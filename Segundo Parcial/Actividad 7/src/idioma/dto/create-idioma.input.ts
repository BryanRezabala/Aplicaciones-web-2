import { InputType, Field } from '@nestjs/graphql';
import { IsString } from 'class-validator';

@InputType()
export class CreateIdiomaInput {
  @Field(() => String)
  @IsString()
  descripcion: string;

  @Field(() => String)
  @IsString()
  estado: string = "Activo";
}
