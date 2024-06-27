import { ObjectType, Field, Int, ID } from '@nestjs/graphql';
import { Idioma } from 'src/idioma/entities/idioma.entity';
import { Instructor } from 'src/instructor/entities/instructor.entity';
import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from 'typeorm';

@ObjectType()
@Entity({ name: 'aprendizajes' })
export class Aprendizaje {
  @PrimaryGeneratedColumn()
  @Field(() => ID)
  id: number;

  @ManyToOne(() => Idioma, (idioma) => idioma.aprendizajes, { eager: true })
  @Field(() => Idioma)
  idioma: Idioma;

  @ManyToOne(() => Instructor, (instructor) => instructor.aprendizajes, { eager: true })
  @Field(() => Instructor)
  instructor: Instructor;

  @Column()
  @Field(() => String)
  fecha: string;

  @Column()
  @Field(() => String)
  hora: string;

  @Column()
  @Field(() => Int)
  numero_horas: number;

  @Column()
  @Field(() => String)
  nivel: string;

  @Column({ default: 'Activo' })
  @Field(() => String)
  estado: string;
}
