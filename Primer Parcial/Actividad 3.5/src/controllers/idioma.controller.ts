import { PrismaClient } from "@prisma/client";

const idiomaClient = new PrismaClient().idioma;

// getAllAuthors
export const getAllIdioma = async (req, res) => {
  try {
    const allIdioma = await idiomaClient.findMany({
      include: {
        cursos: true,
      },
    });

    res.status(200).json({ data: allIdioma });
  } catch (e) {
    console.log(e);
  }
};

// getAuthorById
export const getIdiomaById = async (req, res) => {
  try {
    const idiomaId = req.params.id;
    const idioma = await idiomaClient.findUnique({
      where: {
        id: idiomaId,
      },
      include: {
        cursos: true,
      },
    });

    res.status(200).json({ data: idioma });
  } catch (e) {
    console.log(e);
  }
};

// createAuthor
export const createIdioma = async (req, res) => {
  try {
    const idiomaData = req.body;
    const idioma = await idiomaClient.create({
      data: {
        descripcion: idiomaData.descripcion},
    });

    res.status(201).json({ data: idioma });
  } catch (e) {
    console.log(e);
  }
};

// updateAuthor
export const updateIdioma = async (req, res) => {
  try {
    const idiomaId = req.params.id;
    const idiomaData = req.body;

    const idioma = await idiomaClient.update({
      where: {
        id: idiomaId,
      },
      data: idiomaData,
    });

    res.status(200).json({ data: idioma });
  } catch (e) {
    console.log(e);
  }
};

// deleteAuthor
export const deleteIdioma = async (req, res) => {
  try {
    const idiomaId = req.params.id;
    const idioma = await idiomaClient.delete({
      where: {
        id: idiomaId,
      },
    });

    res.status(200).json({ data: {} });
  } catch (e) {
    console.log(e);
  }
};