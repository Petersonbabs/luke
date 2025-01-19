"use client"
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import Signup from "@/public/illustrations/signup.png";
import Image from "next/image";
import Link from "next/link";
import { Eye, Loader2 } from "lucide-react";
import useAuth, { useSignUpForm } from "../hook/useAuth";
import "../style/auth.css"



export function SignupForm({ className, ...props }) {
  const {signup, togglePassword, showPassword, loadingAuth} = useAuth()
  const {register, handleSubmit, errors} = useSignUpForm()

  return (
    <div className={cn("flex flex-col gap-6 font-syne", className)} {...props}>
      <Card className="overflow-hidden">
        <CardContent className="grid p-0 md:grid-cols-2">
          <div className="relative hidden bg-muted md:block">
            <Image
              src={Signup}
              alt="Image"
              className="absolute inset-0 h-full w-full object-cover dark:brightness-[0.2] dark:grayscale"
            />
          </div>
          <form onSubmit={handleSubmit(signup)} className="p-6 md:p-8">
            <CardTitle className="text-3xl">Create an Account</CardTitle>
            <div className="text-sm flex gap-3 flex-wrap mb-6">
              <span>Already have an account?</span>
              <div className="w-[1px] bg-[#666]"></div>
              <Link href="/login" className="underline">Login</Link>
            </div>

            <div className="flex flex-col gap-6">
              <div className="flex flex-col sm:flex-row gap-4">
                <div>
                  <Input
                    {...register("firstName")}
                    type="text"
                    placeholder="First Name"
                  />
                  {errors.firstName && (
                    <p className="text-red-500 text-sm">
                      {errors.firstName.message}
                    </p>
                  )}
                </div>
                <div>
                  <Input
                    {...register("lastName")}
                    type="text"
                    placeholder="Last Name"
                  />
                  {errors.lastName && (
                    <p className="text-red-500 text-sm">
                      {errors.lastName.message}
                    </p>
                  )}
                </div>
              </div>

              <div className="grid gap-2">
                <Input
                  {...register("email")}
                  type="email"
                  placeholder="Email Address"
                />
                {errors.email && (
                  <p className="text-red-500 text-sm">{errors.email.message}</p>
                )}
              </div>
              <div>

              <div className="flex items-center border px-2 password">
                <Input
                  {...register("password")}
                  placeholder="Enter Your Password"
                  className="border-none focus-visible:ring-0"
                  type={showPassword}
                  />
                <Eye onClick={togglePassword} className="cursor-pointer"/>
                </div>
                {errors.password && (
                  <p className="text-red-500 text-sm">
                    {errors.password.message}
                  </p>
                )}
              </div>
              <Button type="submit" className="btn black-btn flex justify-center" disabled={loadingAuth}>
                {
                  loadingAuth ?
                  <Loader2 className="animate-spin m-auto"/> :
                  <span>Signup</span>
                }
              </Button>
            </div>
          </form>
        </CardContent>
      </Card>
    </div>
  );
}
