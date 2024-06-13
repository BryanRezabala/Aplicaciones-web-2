// src/services/instructorService.ts
import InstructorRepository from '../repositories/InstructorRepository';

export const getInstructores = async () => {
  return await InstructorRepository.getAll();
};

export const getInstructorById = async (id: number) => {
  return await InstructorRepository.getById(id);
};

export const createInstructor = async (
  nombre: string,
  fecha_de_nacimiento: string,
  experiencia: number
) => {
  return await InstructorRepository.create(nombre, fecha_de_nacimiento, experiencia);
};

export const updateInstructor = async (
  id: number,
  nombre: string,
  fecha_de_nacimiento: string,
  experiencia: number
) => {
  return await InstructorRepository.update(id, nombre, fecha_de_nacimiento, experiencia);
};

export const deleteInstructor = async (id: number) => {
  return await InstructorRepository.delete(id);
};
