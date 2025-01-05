"use client"
import { useAuthContext } from "@/context/AuthContext"
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useState } from "react";

const SignupSchema = z.object({
    firstName: z.string().min(1, "First name is required"),
    lastName: z.string().min(1, "Last name is required"),
    email: z.string().email("Invalid email address"),
    password: z.string().min(6, "Password must be at least 6 characters long"),
});

const loginSchema = z.object({
    email: z.string().email("Invalid email address"),
    password: z.string().min(6, "Password must be at least 6 characters long"),
  });

//   sign up form hook
export const useSignUpForm = () => {
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm({
        resolver: zodResolver(SignupSchema),
    });

    return { register, handleSubmit, errors }
}
// login form hook
export const useLoginForm = () => {
    const {
        register,
        handleSubmit,
        formState: { errors },
      } = useForm({
        resolver: zodResolver(loginSchema),
      });

    return { register, handleSubmit, errors }
}


const useAuth = () => {
    const { login, signup, user, loadingAuth } = useAuthContext()
    const [showPassword, setShowPassword] = useState('password')
    const togglePassword = () => {
        showPassword == 'password' ? setShowPassword('text') : setShowPassword('password')
    }


    return {
        login,
        signup,
        user,
        showPassword,
        loadingAuth,
        togglePassword
    }
}

export default useAuth
