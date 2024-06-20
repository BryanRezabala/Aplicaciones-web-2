import { Entity, Column, PrimaryGeneratedColumn, ManyToOne } from 'typeorm';
import { Idioma } from 'src/idioma/entities/idioma.entity';
import { Instructor } from 'src/instructor/entities/instructor.entity';

@Entity({name: 'aprendizaje'})
export class Aprendizaje {

    @PrimaryGeneratedColumn('uuid')
    @Column({ primary: true, unique: true })
    id: string;

    @Column('integer')
    idIdioma: number;

    @Column('integer')
    idInstructor: number;

    @Column('text')
    fecha: string;

    @Column('text')
    hora: string;

    @Column('integer')
    numeroDeHorasDelCurso: number;

    @Column('text')
    nivel: string;

    @ManyToOne(
        () => Idioma,
        ( idioma ) => idioma.aprendizajes,
        { eager: true }
    )
    idioma?: Idioma;

    @ManyToOne(
        () => Instructor,
        ( instructor ) => instructor.aprendizajes,
        { eager: true }
    )
    instructor?: Instructor;
    
    @Column('text', { default: 'Activo' })
    estado: string;
}
