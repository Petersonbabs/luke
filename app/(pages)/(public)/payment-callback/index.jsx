import { Loader2 } from "lucide-react";
import { useOrderContext } from "@/context/OrderContext";
import { useEffect } from "react";
import { useRouter } from "next/navigation";
import { toast } from "sonner";

const PaymentCallbackIdex = () => {
  const navigate = useRouter();
  const { verifyPayment,  paymentVerified } =
    useOrderContext();

  useEffect(() => {
    if (typeof window !== "undefined") {
      const url = new URL(window.location.href);
      const params = new URLSearchParams(url.search);
      const trxref = params.get("reference");

      if (trxref) {
        verifyPayment(trxref);
      }
    }
  }, []);
  useEffect(() => {
    if (paymentVerified) {
      navigate.push("/profile");
      toast.success("Payment Verified!");
    }
  }, [paymentVerified]);
  return (
    <div className="pt-[70px] h-[300px] flex justify-center items-center flex-col gap-8">
      {}
      <Loader2 className="animate-spin w-40 size-32" />
      <h3>Verifying payment...</h3>
    </div>
  );
};

export default PaymentCallbackIdex;
