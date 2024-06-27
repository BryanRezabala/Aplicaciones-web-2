import { ObjectType, Field, ID, Int } from '@nestjs/graphql';
import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from 'typeorm';
import { Aprendizaje } from 'src/aprendizaje/entities/aprendizaje.entity';

@ObjectType()
@Entity({ name: 'instructores' })
export class Instructor {
  @PrimaryGeneratedColumn()
  @Field(() => ID)
  id: number;

  @Column()
  @Field(() => String)
  nombre: string;

  @Column()
  @Field(() => String)
  fecha_de_nacimiento: string;

  @Column()
  @Field(() => Int)
  experiencia: number;

  @OneToMany(() => Aprendizaje, (aprendizaje) => aprendizaje.instructor)
  @Field(() => [Aprendizaje], { nullable: true })
  aprendizajes?: Aprendizaje[];
  
  @Column({ default: 'Activo' })
  @Field(() => String)
  estado: string;
}
