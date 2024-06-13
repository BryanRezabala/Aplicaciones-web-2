import * as idiomaService from '../services/idiomaService';

export const getIdiomas = async () => {
  return await idiomaService.getIdiomas();
};

export const getIdiomaById = async (id: number) => {
  return await idiomaService.getIdiomaById(id);
};

export const createIdioma = async (descripcion: string) => {
  return await idiomaService.createIdioma(descripcion);
};

export const updateIdioma = async (id: number, nuevaDescripcion: string) => {
  return await idiomaService.updateIdioma(id, nuevaDescripcion);
};

export const deleteIdioma = async (id: number) => {
  return await idiomaService.deleteIdioma(id);
};
