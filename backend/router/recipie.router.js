import express from "express";

import { changeRecipie, createRecipie, deleteRecipie, getRecipie } from "../controllers/recipie.controller.js";

const router = express.Router()


router.get("/", getRecipie)

router.post("/", createRecipie)

router.put("/:id", changeRecipie)

router.delete("/:id", deleteRecipie)

export default router;