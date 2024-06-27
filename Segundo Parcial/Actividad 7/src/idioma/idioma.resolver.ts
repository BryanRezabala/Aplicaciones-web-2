import { Resolver, Query, Mutation, Args } from '@nestjs/graphql';
import { IdiomaService } from './idioma.service';
import { CreateIdiomaInput } from './dto/create-idioma.input';
import { UpdateIdiomaInput } from './dto/update-idioma.input';
import { Idioma } from './entities/idioma.entity';

@Resolver(() => Idioma)
export class IdiomaResolver {
  constructor(private readonly idiomasService: IdiomaService) {}

  @Mutation(() => Idioma)
  createIdioma(@Args('createIdiomaInput') createIdiomaInput: CreateIdiomaInput): Promise<Idioma> {
    return this.idiomasService.create(createIdiomaInput);
  }

  @Query(() => [Idioma], { name: 'idiomas' })
  findAll(
    @Args('estado', { type: () => String,  nullable: true }) estado: string
  ) {
    return this.idiomasService.findAll(estado);
  }

  @Query(() => Idioma, { name: 'idioma' })
  findOne(@Args('id') id: number): Promise<Idioma>  {
    return this.idiomasService.findOne(id);
  }

  @Mutation(() => Idioma)
  updateIdioma(@Args('updateIdiomaInput') updateIdiomaInput: UpdateIdiomaInput): Promise<Idioma> {
    return this.idiomasService.update(updateIdiomaInput.id, updateIdiomaInput);
  }

  @Mutation(() => Idioma)
  removeIdioma(@Args('id') id: number): Promise<Idioma> {
    return this.idiomasService.remove(id);
  }
}
