// src/services/aprendizajeService.ts
import AprendizajeRepository from '../repositories/AprendizajeRepository';

export const getAprendizajes = async () => {
  return await AprendizajeRepository.getAll();
};

export const getAprendizajeById = async (id: number) => {
  return await AprendizajeRepository.getById(id);
};

export const createAprendizaje = async (
  idioma_id: number,
  instructor_id: number,
  fecha: string,
  hora: string,
  numero_horas: number,
  nivel: string
) => {
  return await AprendizajeRepository.create(
    idioma_id,
    instructor_id,
    fecha,
    hora,
    numero_horas,
    nivel
  );
};

export const updateAprendizaje = async (
  id: number,
  idioma_id: number,
  instructor_id: number,
  fecha: string,
  hora: string,
  numero_horas: number,
  nivel: string
) => {
  return await AprendizajeRepository.update(
    id,
    idioma_id,
    instructor_id,
    fecha,
    hora,
    numero_horas,
    nivel
  );
};

export const deleteAprendizaje = async (id: number) => {
  return await AprendizajeRepository.delete(id);
};
