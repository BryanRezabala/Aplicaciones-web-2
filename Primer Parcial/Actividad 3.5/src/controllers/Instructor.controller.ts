import { PrismaClient } from "@prisma/client";

const instructorClient = new PrismaClient().instructor;

// getAllAuthors
export const getAllinstructor = async (req, res) => {
  try {
    const allinstructor = await instructorClient.findMany({
      include: {
        cursos: true,
      },
    });

    res.status(200).json({ data: allinstructor });
  } catch (e) {
    console.log(e);
  }
};

// getAuthorById
export const getIdinstructorById = async (req, res) => {
  try {
    const instructorId = req.params.id;
    const instructor = await instructorClient.findUnique({
      where: {
        id: instructorId,
      },
      include: {
        cursos: true,
      },
    });

    res.status(200).json({ data: instructor });
  } catch (e) {
    console.log(e);
  }
};

// createAuthor
export const createinstructor = async (req, res) => {
  try {
    const instructorData = req.body;
    const instructor = await instructorClient.create({
      data: instructorData,
    });

    res.status(201).json({ data: instructor });
  } catch (e) {
    console.log(e);
  }
};

// updateAuthor
export const updateinstructor = async (req, res) => {
  try {
    const instructorId = req.params.id;
    const instructorData = req.body;

    const instructor = await instructorClient.update({
      where: {
        id: instructorId,
      },
      data: instructorData,
    });

    res.status(200).json({ data: instructor });
  } catch (e) {
    console.log(e);
  }
};

// deleteAuthor
export const deleteinstructor = async (req, res) => {
  try {
    const instructorId = req.params.id;
    const instructor = await instructorClient.delete({
      where: {
        id: instructorId,
      },
    });

    res.status(200).json({ data: {} });
  } catch (e) {
    console.log(e);
  }
};