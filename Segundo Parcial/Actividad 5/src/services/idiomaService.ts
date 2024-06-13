// src/services/idiomaService.ts
import IdiomaRepository from '../repositories/idiomaRepository';

export const getIdiomas = async () => {
  return await IdiomaRepository.getAll();
};

export const getIdiomaById = async (id: number) => {
  return await IdiomaRepository.getById(id);
};

export const createIdioma = async (descripcion: string) => {
  return await IdiomaRepository.create(descripcion);
};

export const updateIdioma = async (id: number, nuevaDescripcion: string) => {
  return await IdiomaRepository.update(id, nuevaDescripcion);
};

export const deleteIdioma = async (id: number) => {
  return await IdiomaRepository.delete(id);
};
