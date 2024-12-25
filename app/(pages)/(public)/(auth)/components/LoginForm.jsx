import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import Link from "next/link"

export function LoginForm({
  className,
  ...props}) {
  return (
    <div className={cn("flex flex-col gap-6 mt-16", className)} {...props}>
      <Card>
        <CardHeader className="text-center">
          <CardTitle className="text-xl">Signin</CardTitle>
          <CardDescription>
            👋 Welcome back, please enter your details.
          </CardDescription>
        </CardHeader>
        <CardContent>
          <form>
            <div className="grid gap-6">
              
              <div className="grid gap-6">
                <div className="grid gap-2">
                  <Input
                    id="email"
                    type="email"
                    placeholder="Email Address"
                    required
                    className=" placeholder:text-center"
                  />
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
                  <Input id="password" type="password" required placeholder="Password" className=" placeholder:text-center"/>
                </div>
                <Button type="submit" className="btn black-btn" variant="">
                  Login
                </Button>
                
              </div>
              <div className="text-center text-sm">
                Don&apos;t have an account?{" "}
                <Link href="/signup" className="underline underline-offset-4">
                  Sign up for free
                </Link>
              </div>
            </div>
          </form>
        </CardContent>
      </Card>
    </div>
  )
}
