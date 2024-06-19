export class Instructor {}
import { Entity, PrimaryGeneratedColumn, Column, OneToMany } from 'typeorm';
import { Aprendizaje } from './aprendizaje.entity';

@Entity()
export class Instructor {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    nombre: string;

    @OneToMany(() => Aprendizaje, aprendizaje => aprendizaje.instructor)
    aprendizajes: Aprendizaje[];

    // Otras propiedades y relaciones
}
