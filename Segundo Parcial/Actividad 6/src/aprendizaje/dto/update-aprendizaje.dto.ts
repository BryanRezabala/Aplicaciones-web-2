import { PartialType } from '@nestjs/mapped-types';
import { CreateAprendizajeDto } from './create-aprendizaje.dto';

export class UpdateAprendizajeDto extends PartialType(CreateAprendizajeDto) {}
