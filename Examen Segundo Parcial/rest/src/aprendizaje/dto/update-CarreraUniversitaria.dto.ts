import { PartialType } from '@nestjs/mapped-types';
import { CarreraUniversitaria } from './create-CarreraUniversitaria.dto';

export class UpdateDto extends PartialType(CarreraUniversitaria) {}
