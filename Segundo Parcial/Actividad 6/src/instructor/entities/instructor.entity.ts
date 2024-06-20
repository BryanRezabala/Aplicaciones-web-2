import { Entity, Column, PrimaryGeneratedColumn, OneToMany } from 'typeorm';
import { Aprendizaje } from 'src/aprendizaje/entities/aprendizaje.entity';

@Entity({name: 'instructor'})
export class Instructor {

    @PrimaryGeneratedColumn()
    id: number;

    @Column('text')
    nombre: string;

    @Column('text')
    Nacimiento: string;

    @Column('text')
    experiencia: string;

    @OneToMany(
        () => Aprendizaje,
        ( aprendizaje ) => aprendizaje.instructor,
        { cascade: true }
    )
    aprendizajes?: Aprendizaje[]

    @Column('text', { default: 'Activo' })
    estado: string;
}
