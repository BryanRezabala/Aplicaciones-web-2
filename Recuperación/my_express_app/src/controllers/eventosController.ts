import { Request, Response } from 'express';
import EventoDeportivo from '../models/EventoDeportivo';

// Simula una base de datos en memoria
let eventos: EventoDeportivo[] = [];
let currentId = 1;

// Función para crear eventos de prueba
const crearEventosPrueba = (): EventoDeportivo[] => {
  const eventosPrueba = [
    {
      id: currentId++,
      codigo: 'F-001',
      etiqueta: 'Final copa manta 2024',
      adversarios: 'Manta FC',
      deporteClasificacion: 'Futbol',
      precioEconomico: 1000,
      fechaUltimoTorneo: new Date('2020-01-01'),
      empresa: 'Manta Mall S.A'
    },
    {
      id: currentId++,
      codigo: 'B-002',
      etiqueta: 'Encuentro Basquet benefico IS',
      adversarios: 'Lakers de chone',
      deporteClasificacion: 'Basquet',
      precioEconomico: 300,
      fechaUltimoTorneo: new Date('2021-05-15'),
      empresa: 'Chone LTDA'
    }
  ];

  const eventosGenerados: EventoDeportivo[] = [];

  for (let i = 0; i < 50; i++) {
    const evento = { ...eventosPrueba[i % 2], id: currentId++ };
    eventosGenerados.push(evento);
  }

  return eventosGenerados;
};

export const agregar100Eventos = (req: Request, res: Response): void => {
  eventos = crearEventosPrueba();
  res.status(201).json({ message: '100 eventos de prueba agregados con éxito' });
};

export const crearEvento = (req: Request, res: Response): void => {
  const nuevoEvento: EventoDeportivo = {
    id: currentId++,
    ...req.body,
    fechaUltimoTorneo: new Date(req.body.fechaUltimoTorneo)
  };
  eventos.push(nuevoEvento);
  res.status(201).json({ message: 'Evento creado con éxito' });
};

export const obtenerEventos = (req: Request, res: Response): void => {
  res.status(200).json(eventos);
};

export const obtenerEvento = (req: Request, res: Response): void => {
  const evento = eventos.find(e => e.id === parseInt(req.params.id));
  if (evento) {
    res.status(200).json(evento);
  } else {
    res.status(404).json({ message: 'Evento no encontrado' });
  }
};

export const actualizarEvento = (req: Request, res: Response): void => {
  const eventoIndex = eventos.findIndex(e => e.id === parseInt(req.params.id));
  if (eventoIndex !== -1) {
    eventos[eventoIndex] = {
      ...eventos[eventoIndex],
      ...req.body,
      fechaUltimoTorneo: new Date(req.body.fechaUltimoTorneo)
    };
    res.status(200).json({ message: 'Evento actualizado con éxito' });
  } else {
    res.status(404).json({ message: 'Evento no encontrado' });
  }
};

export const eliminarEvento = (req: Request, res: Response): void => {
  const eventoIndex = eventos.findIndex(e => e.id === parseInt(req.params.id));
  if (eventoIndex !== -1) {
    eventos.splice(eventoIndex, 1);
    res.status(200).json({ message: 'Evento eliminado con éxito' });
  } else {
    res.status(404).json({ message: 'Evento no encontrado' });
  }
};
