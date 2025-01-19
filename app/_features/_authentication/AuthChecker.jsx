"use client";

import { useAuthContext } from "@/context/AuthContext";
import { toast } from "sonner";
import { useRouter } from "next/navigation";
import { useEffect } from "react";

export const withPermission = (action) => {
  const { token, user } = useAuthContext();
  const router = useRouter();
  // const { openModal, setPostAuthAction } = useUIContext();
  return (...args) => {
    if (!token || !user) {
      // If not authenticated, show login/signup modal
      toast.warning("You must be logged in.");
      router.push('/login')
      // setPostAuthAction(() => () => action(...args));
      // openModal("auth"); // Open the auth
      return
    } else {
      // If authenticated, perform the action
      action(...args);
    }
  };
};

const withAuthProtection = (WrappedComponent) => {
  const HOC = (props) => {
    const { token, user } = useAuthContext();
    const router = useRouter();

    useEffect(() => {
      if (!user || !token) {
        toast.warning("You must be logged in.");
        router.push("/login");
        return;
      }
    }, [user, token]);

    if (user && token) {
      return <WrappedComponent {...props} />;
    }

    return null;
  };

  return HOC;
};

export default withAuthProtection;
