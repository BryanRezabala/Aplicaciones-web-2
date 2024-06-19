export class Idioma {}

import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

@Entity()
export class Idioma {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    nombre: string;

    @Column()
    estado: string; 
}
