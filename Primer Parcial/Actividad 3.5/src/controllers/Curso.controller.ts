import { PrismaClient } from "@prisma/client";

const cursoClient = new PrismaClient().curso;


export const getAllcurso = async (req, res) => {
  try {
    const allcurso = await cursoClient.findMany({
      include: {
        aprendizajes: true,
      },
    });

    res.status(200).json({ data: allcurso });
  } catch (e) {
    console.log(e);
  }
};


export const getIdcursoById = async (req, res) => {
  try {
    const cursoId = req.params.id;
    const curso = await cursoClient.findUnique({
      where: {
        id: cursoId,
      },
      include: {
        aprendizajes: true,
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