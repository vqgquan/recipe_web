import express from "express";

import { changeRecipie, createRecipie, deleteRecipie, getAllRecipie, getOneRecipie} from "../controllers/recipie.controller.js";

const router = express.Router()


router.get("/", getAllRecipie)

router.get("/:id", getOneRecipie)

router.post("/", createRecipie)

router.put("/:id", changeRecipie)

router.delete("/:id", deleteRecipie)

export default router;