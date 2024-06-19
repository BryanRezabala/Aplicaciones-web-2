export class Aprendizaje {}

import { Entity, PrimaryGeneratedColumn, Column, ManyToOne } from 'typeorm';
import { Idioma } from './idioma.entity';
import { Instructor } from './instructor.entity';

@Entity()
export class aprendizaje {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    nombre: string;

    @ManyToOne(() => Idioma, idioma => idioma.aprendizajes)
    idioma: Idioma;

    @ManyToOne(() => Instructor, instructor => instructor.aprendizajes)
    instructor: Instructor;

    // Puedes agregar más propiedades y relaciones según sea necesario
}
