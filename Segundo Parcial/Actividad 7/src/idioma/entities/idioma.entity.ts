import { ObjectType, Field, ID } from '@nestjs/graphql';
import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from 'typeorm';
import { Aprendizaje } from 'src/aprendizaje/entities/aprendizaje.entity';

@ObjectType()
@Entity({ name: 'idiomas' })
export class Idioma {
  @PrimaryGeneratedColumn()
  @Field(() => ID)
  id: number;

  @Column()
  @Field(() => String)
  descripcion: string;

  @OneToMany(() => Aprendizaje, (aprendizaje) => aprendizaje.idioma)
  @Field(() => [Aprendizaje], { nullable: true })
  aprendizajes?: Aprendizaje[];

  @Column({ default: 'Activo' })
  @Field(() => String)
  estado: string;
}
