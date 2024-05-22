import { Router } from "express";

import {
    getAllinstructor,
    getIdinstructorById,
    createinstructor,
    updateinstructor,
    deleteinstructor,
} from "../controllers/Instructor.controller";

const instructorRouter = Router();

instructorRouter.get("/", getAllinstructor);
instructorRouter.get("/:id", getIdinstructorById);
instructorRouter.post("/", createinstructor);
instructorRouter.put("/:id", updateinstructor);
instructorRouter.delete("/:id", deleteinstructor);

export default instructorRouter;