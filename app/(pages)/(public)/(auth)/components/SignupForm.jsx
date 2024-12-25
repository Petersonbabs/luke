import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import Signup from "@/public/illustrations/signup.png";
import Image from "next/image";
import Link from "next/link";
import { Eye } from "lucide-react";

export function SignupForm({ className, ...props }) {
  return (
    <div className={cn("flex flex-col gap-6", className)} {...props}>
      <Card className="overflow-hidden">
        <CardContent className="grid p-0 md:grid-cols-2">
          <div className="relative hidden bg-muted md:block">
            <Image
              src={Signup}
              alt="Image"
              className="absolute inset-0 h-full w-full object-cover dark:brightness-[0.2] dark:grayscale"
            />
          </div>
          <form className="p-6 md:p-8">
            <CardTitle className="text-3xl">Create an Account</CardTitle>
            <div className="text-sm flex gap-3 mb-6 ">
              <span>Don&apos;t have an account? </span>
              <div className="w-[2px] bg-[#666] "></div>
              <Link href="/login">Login</Link>
            </div>

            


            <div className="flex flex-col gap-6">

            <div className="grid grid-cols-2 gap-4">
            <div className="grid gap-2">
                <Input
                  name="firstName"
                  type="text"
                  placeholder="First Name"
                  required
                />
              </div>
              <div className="grid gap-2">
                <Input
                  name="lastName"
                  type="text"
                  placeholder="Last Name"
                  required
                />
              </div>
            </div>

              <div className="grid gap-2">
                <Input
                  name="email"
                  type="email"
                  placeholder="Email Address"
                  required
                />
              </div>
              <div className="flex items-center border px-2">
                <Input name="password" placeholder="Enter Your Password" className="border-none outline-none focus:border-none focus:outline-none   " type="password" required />
                <Eye />
              </div>
              <Button type="submit" className="w-full btn black-btn">
                Create Account
              </Button>
            </div>
          </form>
        </CardContent>
      </Card>
    </div>
  );
}
