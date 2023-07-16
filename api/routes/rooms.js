import express, { Router } from "express";
import { verifyAdmin } from "../utils/verifyToken.js";
import {
  createRoomController,
  updateRoomController,
  deleteRoomController,
  getRoomController,
  getallRoomController,
} from "../controller/roomController.js";

const router = express.Router();

//CREATE
router.post("/:hotelid", verifyAdmin, createRoomController);

//UPDATE
router.put("/:id", verifyAdmin, updateRoomController);

//DELETE
router.delete("/:id/:hotelid", verifyAdmin, deleteRoomController);
//GET
router.get("/:id", getRoomController);
//GET ALL
router.get("/", getallRoomController);

export default router;
