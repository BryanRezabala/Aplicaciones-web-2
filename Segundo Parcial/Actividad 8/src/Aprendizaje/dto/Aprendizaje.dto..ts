
import { IsString, IsInt } from 'class-validator';

export class CreateAprendizajeInput {
  @IsInt()
  id: number


  @IsInt()
  idiomaid: number;

  
  @IsInt()
  instructorid: number;

  
  @IsString()
  fecha: string;

  
  @IsString()
  hora: string;

  
  @IsInt()
  numero_horas: number;

  
  @IsString()
  nivel: string;
  
}