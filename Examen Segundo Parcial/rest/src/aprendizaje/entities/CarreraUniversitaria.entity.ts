import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity({ name: 'carrera_universitaria' })
export class CarreraUniversitarias {

    @PrimaryGeneratedColumn()
    id: number;

    @Column({ unique: true })
    codigo: string;

    @Column()
    nombre: string;

    @Column()
    tituloOtorgado: string;

    @Column()
    modalidad: string;

    @Column()
    numeroSemestres: number;

    @Column({ type: 'date' })
    fechaUltimaCohorte: Date;

    @Column()
    empresa: string;

    @Column()
    estado: string;
}
