import { IsOptional, IsString, IsDate, IsNotEmpty } from "class-validator";

export class CreateInstructorDto {
    @IsString()
    @IsOptional()
    id: number;

    @IsString()
    @IsNotEmpty()
    nombre: string;

    @IsString()
    @IsNotEmpty()
    Nacimiento: string;

    @IsString()
    @IsNotEmpty()
    experiencia: string;
    
    @IsString()
    @IsNotEmpty()
    estado: string = "Activo";
}
