import express, { Router } from "express";
import {updateUserController, deleteUserController, getUserController, getallUserController} from "../controller/userController.js"
import { verifyToken, verifyUser, verifyAdmin} from "../utils/verifyToken.js";

const router = express.Router();

  // router.get("/checkauthentication",verifyToken,(req,res,next)=>{
  //   res.send("OK....!  You are authenticated")
  // })

  // router.get("/checkuser/:id",verifyUser,(req,res,next)=>{
  //   res.send("OK user... You are loggedin and you can delete this account")
  // })

  // router.get("/checkadmin/:id",verifyAdmin,(req,res,next)=>{
  //   res.send("OK. Admin... You are loggedin and you can delete all accounts")
  // })

//UPDATE
router.put("/:id",verifyUser, updateUserController);

//DELETE
router.delete("/:id",verifyUser, deleteUserController);
//GET
router.get("/:id",verifyUser, getUserController);
//GET ALL
router.get("/", verifyAdmin, getallUserController);
 

export default router;
