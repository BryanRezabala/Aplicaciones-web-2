import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { AprendizajeService } from './aprendizaje.service';
import { CreateAprendizajeDto } from './dto/create-aprendizaje.dto';
import { UpdateAprendizajeDto } from './dto/update-aprendizaje.dto';

@Controller('aprendizaje')
export class AprendizajeController {
  constructor(private readonly aprendizajeService: AprendizajeService) {}

  @Post()
  create(@Body() createAprendizajeDto: CreateAprendizajeDto) {
    return this.aprendizajeService.create(createAprendizajeDto);
  }

  @Get()
  findAll() {
    return this.aprendizajeService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.aprendizajeService.findOne(id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateAprendizajeDto: UpdateAprendizajeDto) {
    return this.aprendizajeService.update(id, updateAprendizajeDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.aprendizajeService.remove(id);
  }
}
