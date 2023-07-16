import express, { Router } from "express";
import Hotel from "../models/Hotel.js";
import { createError } from "../utils/error.js";
import {
  createHotelController,
  deleteHotelController,
  getHotelController,
  getallHotelController,
  updateHotelController,
} from "../controller/hotelController.js";
import { verifyAdmin } from "../utils/verifyToken.js";

const router = express.Router();

//CREATE
router.post("/",verifyAdmin, createHotelController);

//UPDATE
router.put("/:id",verifyAdmin, updateHotelController);

//DELETE
router.delete("/:id",verifyAdmin, deleteHotelController);
//GET
router.get("/:id", getHotelController);
//GET ALL
router.get("/", getallHotelController);

export default router;
