import { IsOptional, IsString, IsDate, IsInt, Min, Max, IsNotEmpty } from "class-validator";

export class CreateAprendizajeDto {
    @IsString()
    @IsOptional()
    id: string;


    @IsNotEmpty()
    idIdioma: number;

  
    @IsNotEmpty()
    idInstructor: number;

    @IsString()
    fecha: string;

    @IsString()

    hora: string;

    @IsInt()
    @Min(1)
    @IsNotEmpty()
    numeroDeHorasDelCurso: number;

    @IsString()
    @IsNotEmpty()
    nivel: string;

    
    @IsString()
    @IsNotEmpty()
    estado: string = "Activo";
}
