import * as instructorService from '../services/instructorService';

export const getInstructores = async () => {
  return await instructorService.getInstructores();
};

export const getInstructorById = async (id: number) => {
  return await instructorService.getInstructorById(id);
};

export const createInstructor = async (
  nombre: string,
  fecha_de_nacimiento: string,
  experiencia: number
) => {
  return await instructorService.createInstructor(nombre, fecha_de_nacimiento, experiencia);
};

export const updateInstructor = async (
  id: number,
  nombre: string,
  fecha_de_nacimiento: string,
  experiencia: number
) => {
  return await instructorService.updateInstructor(id, nombre, fecha_de_nacimiento, experiencia);
};

export const deleteInstructor = async (id: number) => {
  return await instructorService.deleteInstructor(id);
};
