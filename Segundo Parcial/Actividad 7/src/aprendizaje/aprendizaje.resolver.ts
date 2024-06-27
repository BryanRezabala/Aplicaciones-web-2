import { Resolver, Query, Mutation, Args } from '@nestjs/graphql';
import { AprendizajeService } from './aprendizaje.service';
import { CreateAprendizajeInput } from './dto/create-aprendizaje.input';
import { UpdateAprendizajeInput } from './dto/update-aprendizaje.input';
import { Aprendizaje } from './entities/aprendizaje.entity';

@Resolver(() => Aprendizaje)
export class AprendizajeResolver {
  constructor(private readonly aprendizajeService: AprendizajeService) {}

  @Mutation(() => Aprendizaje)
  createAprendizaje(@Args('createAprendizajeInput') createAprendizajeInput: CreateAprendizajeInput): Promise<Aprendizaje> {
    return this.aprendizajeService.create(createAprendizajeInput);
  }

  @Query(() => [Aprendizaje], { name: 'aprendizajes' })
  findAll(
    @Args('estado', { type: () => String,  nullable: true }) estado: string
  ) {
    return this.aprendizajeService.findAll(estado);
  }

  @Query(() => Aprendizaje, { name: 'aprendizaje' })
  findOne(@Args('id') id: number): Promise<Aprendizaje>  {
    return this.aprendizajeService.findOne(id);
  }

  @Mutation(() => Aprendizaje)
  updateAprendizaje(@Args('updateAprendizajeInput') updateAprendizajeInput: UpdateAprendizajeInput): Promise<Aprendizaje> {
    return this.aprendizajeService.update(updateAprendizajeInput.id, updateAprendizajeInput);
  }

  @Mutation(() => Aprendizaje)
  removeAprendizaje(@Args('id') id: number): Promise<Aprendizaje> {
    return this.aprendizajeService.remove(id);
  }
}
