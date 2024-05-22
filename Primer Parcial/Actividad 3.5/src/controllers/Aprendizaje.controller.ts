import { PrismaClient } from "@prisma/client";

const aprendizajeClient = new PrismaClient().aprendizaje;


export const getAllaprendizaje = async (req, res) => {
  try {
    const allaprendizaje = await aprendizajeClient.findMany({
      include: {
        curso: true,
      },
    });

    res.status(200).json({ data: allaprendizaje });
  } catch (e) {
    console.log(e);
  }
};


export const getIdaprendizajeById = async (req, res) => {
  try {
    const aprendizajeId = req.params.id;
    const aprendizaje = await aprendizajeClient.findUnique({
      where: {
        id: aprendizajeId,
      },
      include: {
        curso: true,
      },
    });

    res.status(200).json({ data: aprendizaje });
  } catch (e) {
    console.log(e);
  }
};


export const createaprendizaje = async (req, res) => {
  try {
    const aprendizajeData = req.body;
    const aprendizaje = await aprendizajeClient.create({
      data: aprendizajeData,
    });

    res.status(201).json({ data: aprendizaje });
  } catch (e) {
    console.log(e);
  }
};


export const updateaprendizaje = async (req, res) => {
  try {
    const aprendizajeId = req.params.id;
    const aprendizajeData = req.body;

    const aprendizaje = await aprendizajeClient.update({
      where: {
        id: aprendizajeId,
      },
      data: aprendizajeData,
    });

    res.status(200).json({ data: aprendizaje });
  } catch (e) {
    console.log(e);
  }
};


export const deleteaprendizaje = async (req, res) => {
  try {
    const aprendizajeId = req.params.id;
    const aprendizaje = await aprendizajeClient.delete({
      where: {
        id: aprendizajeId,
      },
    });

    res.status(200).json({ data: {} });
  } catch (e) {
    console.log(e);
  }
};