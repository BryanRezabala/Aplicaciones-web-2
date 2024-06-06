import { Request, Response } from 'express';
import { PrismaClient } from '@prisma/client';
import { getDobToAge } from 'dob-to-age';

const prisma = new PrismaClient();

const createAprendizajeInstance = (
  idioma_id: number,
  instructor_id: number,
  fecha: string,
  hora: string,
  numero_horas: number,
  nivel: string
) => {
  const id = Math.floor(Math.random() * 1000); // Generar un ID numérico aleatorio
  return {
    id,
    idioma_id,
    instructor_id,
    fecha,
    hora,
    numero_horas,
    nivel,
  };
};

export const getIdiomas = async (req: Request, res: Response) => {
  try {
    const idiomas = await prisma.idioma.findMany();
    res.json(idiomas);
  } catch (error) {
    res.status(500).json({ error: 'Error al obtener los idiomas' });
  }
};

export const getIdiomaById = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;
    const idioma = await prisma.idioma.findUnique({ where: { id: Number(id) } });
    if (idioma) {
      res.json(idioma);
    } else {
      res.status(404).json({ error: 'Idioma no encontrado' });
    }
  } catch (error) {
    res.status(500).json({ error: 'Error al obtener el idioma' });
  }
};

export const getInstructores = async (req: Request, res: Response) => {
  try {
    const instructores = await prisma.instructor.findMany();
    res.json(instructores);
  } catch (error) {
    res.status(500).json({ error: 'Error al obtener los instructores' });
  }
};

export const getInstructorById = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;
    const instructor = await prisma.instructor.findUnique({ where: { id: Number(id) } });
    if (instructor) {
      res.json(instructor);
    } else {
      res.status(404).json({ error: 'Instructor no encontrado' });
    }
  } catch (error) {
    res.status(500).json({ error: 'Error al obtener el instructor' });
  }
};

export const getAprendizajes = async (req: Request, res: Response) => {
  try {
    const aprendizajes = await prisma.aprendizaje.findMany();
    res.json(aprendizajes);
  } catch (error) {
    res.status(500).json({ error: 'Error al obtener los aprendizajes' });
  }
};

export const getAprendizajeById = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;
    const aprendizaje = await prisma.aprendizaje.findUnique({ where: { id: Number(id) } });
    if (aprendizaje) {
      res.json(aprendizaje);
    } else {
      res.status(404).json({ error: 'Aprendizaje no encontrado' });
    }
  } catch (error) {
    res.status(500).json({ error: 'Error al obtener el aprendizaje' });
  }
};

export const createAprendizaje = async (req: Request, res: Response) => {
  try {
    const { idioma_id, instructor_id, fecha, hora, numero_horas, nivel } = req.body;
    const aprendizaje = createAprendizajeInstance(
      idioma_id,
      instructor_id,
      fecha,
      hora,
      numero_horas,
      nivel
    );

    // Aquí puedes usar la función getDobToAge para calcular la edad del instructor
    const instructor = await prisma.instructor.findUnique({ where: { id: instructor_id } });
    if (instructor) {
      const age = getDobToAge(instructor.fecha_de_nacimiento);
      console.log(`Edad del instructor: ${age} años`);
    }

    // Ahora puedes guardar el aprendizaje en la base de datos utilizando Prisma
    const newAprendizaje = await prisma.aprendizaje.create({ data: aprendizaje });
    res.status(200).json(newAprendizaje);
  } catch (error) {
    res.status(500).json({ error: 'Error al crear el aprendizaje' });
  }
};

export const getGimnasioData = async (req: Request, res: Response) => {
  try {
    const gimnasioData = ["dato1", "dato2", "dato3"]; // Aquí puedes inventar los datos que deseas devolver para "gimnasio"
    res.json({ data: gimnasioData });
  } catch (error) {
    res.status(500).json({ error: 'Error al obtener la data "Gimnasio"' });
  }
};
