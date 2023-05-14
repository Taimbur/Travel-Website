import express from "express";
import {
  allUser,
  createUser,
  deletUser,
  singalUser,
  updatUser,
} from "../controllers/userController.js";
 import { verifyUser } from "../utils/verify_token.js";
 

const router = express.Router();

router.post("/", verifyUser, createUser);
router.put("/:id", verifyUser, updatUser);
router.delete("/:id", verifyUser, deletUser);
router.get("/:id", verifyUser, singalUser);
router.get("/", verifyUser, allUser);

export default router;
