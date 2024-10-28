import express from "express";
import { LoginOtpResend, loginUser, LoginVerify, registerUser, resendOtp, verifyUser } from "../controllers/userController.js";

const userRouter=express.Router();

userRouter.post("/register",registerUser)
userRouter.post("/verify/:id",verifyUser)
userRouter.get("/resend/:id",resendOtp)
userRouter.post("/login",loginUser)
userRouter.post("/loginVerify/:id",LoginVerify)
userRouter.get("/loginResend",LoginOtpResend)
export default userRouter; 