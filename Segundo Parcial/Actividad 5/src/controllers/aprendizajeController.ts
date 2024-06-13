import * as aprendizajeService from '../services/aprendizajeService';

export const getAprendizajes = async () => {
  return await aprendizajeService.getAprendizajes();
};

export const getAprendizajeById = async (id: number) => {
  return await aprendizajeService.getAprendizajeById(id);
};

export const createAprendizaje = async (
  idioma_id: number,
  instructor_id: number,
  fecha: string,
  hora: string,
  numero_horas: number,
  nivel: string
) => {
  return await aprendizajeService.createAprendizaje(
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
  return await aprendizajeService.updateAprendizaje(
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
  return await aprendizajeService.deleteAprendizaje(id);
};
