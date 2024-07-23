import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { CarreraUniversitariaService } from './CarreraUniversitaria.service';
import { CarreraUniversitaria } from './dto/create-CarreraUniversitaria.dto';
import { UpdateDto } from './dto/update-CarreraUniversitaria.dto';

@Controller('carreras')
export class CarreraUniversitariaController {
  constructor(private readonly carreraUniversitariaService: CarreraUniversitariaService) {}

  @Post()
  create(@Body() createCarreraUniversitariaDto: CarreraUniversitaria) {
    return this.carreraUniversitariaService.create(createCarreraUniversitariaDto);
  }

  @Get()
  findAll() {
    return this.carreraUniversitariaService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: number) {
    return this.carreraUniversitariaService.findOne(id);
  }

  @Patch(':id')
  update(@Param('id') id: number, @Body() updateCarreraUniversitariaDto: UpdateDto) {
    return this.carreraUniversitariaService.update(id, updateCarreraUniversitariaDto);
  }

  @Delete(':id')
  remove(@Param('id') id: number) {
    return this.carreraUniversitariaService.remove(id);
  }

  @Delete('physical/:id')
  removePhysically(@Param('id') id: number) {
    return this.carreraUniversitariaService.removePhysically(id);
  }
}
