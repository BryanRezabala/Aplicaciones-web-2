interface EventoDeportivo {
    id: number;
    codigo: string;
    etiqueta: string;
    adversarios: string;
    deporteClasificacion: string;
    precioEconomico: number;
    fechaUltimoTorneo: Date;
    empresa: string;
  }
  
  export default EventoDeportivo;
  