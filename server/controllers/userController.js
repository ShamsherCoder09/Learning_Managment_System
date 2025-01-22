import { userModel } from "../models/userModel.js";
import bcrypt from 'bcryptjs'
import { generateToken } from "../utils/generateToken.js";
// register
export const register = async(req,res)=>{
    try {
        const {name, email, password} = req.body;
        if(!name || !email || !password){
            return res.status(400).json({
                success:false,
                message:"All fields are required"
            });
        }
        const user = await userModel.findOne({email});
        if(user){
            return res.status(400).json({
                success:false,
                message:"user already is login this email"
            });
        }
        const hashPassword = await bcrypt.hash(password, 10);
        const userData = await userModel.create({
            name,
            email,
            password:hashPassword
        })
        res.status(200).json({
            success:true,
            message:"User register successfully",
            data:userData
        })
    } catch (error) {
        console.log(" error ", error);
        res.status(500).json({
            success:false,
            message:"error while  user register "
        })
    }
}

// login 
export const login = async(req,res)=>{
    try {
        const {email , password} = req.body;
        if(!password || !email){
            return res.status(400).json({
                success:false,
                message:"all fields are required"
            });
        }
        const user = await userModel.findOne({email});
        if(!user){
            return res.status(400).json({
                success:true,
                message:"user not register with this email"
            });
        }
        const isPasswordMatch = await bcrypt.compare(password, user.password);
        if(!isPasswordMatch){
            return res.status(400).json({
                success:false,
                message:"password and email is invalid"
            });
        }

        generateToken(res, user, `welcome back ${user.name}`);

    } catch (error) {
        console.log("login error" ,error);
        res.status(500).json({
            success:false,
            message:"user logged in failed",
        })
    }
}

