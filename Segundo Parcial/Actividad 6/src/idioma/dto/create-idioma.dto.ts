/* eslint-disable prettier/prettier */
import { IsOptional, IsString, MinLength, IsNotEmpty } from "class-validator";

export class CreateIdiomaDto {
    @IsOptional()
    id: number;

    @IsString()
    @MinLength(3)
    @IsOptional()
    descripcionDelIdioma: string;
    
    
    @IsString()
    @IsNotEmpty()
    estado: string = "Activo";
}
