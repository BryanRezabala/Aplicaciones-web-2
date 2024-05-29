import { PrismaClient } from "@prisma/client";
const secuenciaClient = new PrismaClient().secuencia;


export const getAllcurso = async (req, res) => {
  try {
    const allsecuencia = await secuenciaClient.findMany({
      include: {
        secuencias: true,
      },
    });

    res.status(200).json({ data: allsecuencia });
  } catch (e) {
    console.log(e);
  }
};


export const getIdsecuenciaById = async (req, res) => {
  try {
    const secuenciasId = req.params.id;
    const secuencia = await secuenciasIdClient.findUnique({
      where: {
        id: secuenciasId,
        nombre: secuenciasId,
        secuencia: secuenciasId
      },
      include: {
        secuenciasId: true,
      },
    });

    res.status(200).json({ data: curso });
  } catch (e) {
    console.log(e);
  }
};


export const createcurso = async (req, res) => {
  try {
    const cursoData = req.body;
    const curso = await cursoClient.create({
      data: cursoData,
    });

    res.status(201).json({ data: curso });
  } catch (e) {
    console.log(e);
  }
};


export const updatecurso = async (req, res) => {
  try {
    const cursoId = req.params.id;
    const cursoData = req.body;

    const curso = await cursoClient.update({
      where: {
        id: cursoId,
      },
      data: cursoData,
    });

    res.status(200).json({ data: curso });
  } catch (e) {
    console.log(e);
  }
};


export const deletecurso = async (req, res) => {
  try {
    const cursoId = req.params.id;
    const curso = await cursoClient.delete({
      where: {
        id: cursoId,
      },
    });

    res.status(200).json({ data: {} });
  } catch (e) {
    console.log(e);
  }
};