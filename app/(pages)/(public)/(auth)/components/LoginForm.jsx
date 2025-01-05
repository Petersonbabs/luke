"use client"
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import Link from "next/link";
import useAuth, { useLoginForm } from "../hook/useAuth";
import { Loader2 } from "lucide-react";

export function LoginForm({ className, ...props }) {
  
  const {showPassword, login, loadingAuth} = useAuth()
  const {handleSubmit, register, errors} = useLoginForm()


  return (
    <div className={cn("flex flex-col gap-6 mt-16 font-syne", className)} {...props}>
      <Card>
        <CardHeader className="text-center">
          <CardTitle className="text-xl">Signin</CardTitle>
          <CardDescription>
            👋 Welcome back, please enter your details.
          </CardDescription>
        </CardHeader>
        <CardContent>
          <form onSubmit={handleSubmit(login)}>
            <div className="grid gap-6">
              <div className="grid gap-2">
                <Input
                  id="email"
                  type="email"
                  placeholder="Email Address"
                  className="placeholder:text-center"
                  {...register("email")}
                />
                {errors.email && (
                  <p className="text-red-500 text-sm">{errors.email.message}</p>
                )}
              </div>
              <div className="grid gap-2">
                <div className="flex items-center">
                  <a
                    href="#"
                    className="hidden ml-auto text-sm underline-offset-4 hover:underline"
                  >
                    Forgot your password?
                  </a>
                </div>
                <Input
                  id="password"
                  type={showPassword}
                  placeholder="Password"
                  className="placeholder:text-center"
                  {...register("password")}
                />
                {errors.password && (
                  <p className="text-red-500 text-sm">{errors.password.message}</p>
                )}
              </div>
              <Button type="submit" className="btn black-btn flex justify-center" disabled={loadingAuth}>
                {
                  loadingAuth ?
                  <Loader2 className="animate-spin m-auto"/> :
                  <span>Login</span>
                }
              </Button>
            </div>
            <div className="text-center text-sm mt-2">
              Don&apos;t have an account?{" "}
              <Link href="/signup" className="underline underline-offset-4">
                Sign up for free
              </Link>
            </div>
          </form>
        </CardContent>
      </Card>
    </div>
  );
}
