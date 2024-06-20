import { Entity, Column, PrimaryGeneratedColumn, OneToMany } from 'typeorm';
import { Aprendizaje } from 'src/aprendizaje/entities/aprendizaje.entity';

@Entity({name: 'idioma'})
export class Idioma {

    @PrimaryGeneratedColumn()
    id: number;

    @Column('text', { nullable: true })
    descripcionDelIdioma: string;

    @OneToMany(
        () => Aprendizaje,
        ( aprendizaje ) => aprendizaje.idioma,
        { cascade: true }
    )
    aprendizajes?: Aprendizaje[]
    
    @Column('text', { default: 'Activo' })
    estado: string;
}
