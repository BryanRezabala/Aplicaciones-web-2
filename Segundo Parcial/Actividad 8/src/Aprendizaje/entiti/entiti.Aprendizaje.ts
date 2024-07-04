import { Column, Entity, PrimaryColumn, } from 'typeorm';

@Entity({ name: 'Aprendizaje' })
export class AprendizajeEntiti {




      @PrimaryColumn()
      id: number

      @Column()
      idiomaid: number;


      @Column()
      instructorid: number;


      @Column()
      fecha: string;

      @Column()
      hora: string;

      @Column()
      numero_horas: number;

      @Column()
      nivel: string;




}