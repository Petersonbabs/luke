import { Loader2 } from "lucide-react";

const Loader = () => {
  return (
    <div className="bg-gray-50 h-48 flex items-center justify-center">
      <Loader2 className="animate-spin m-auto " />
    </div>
  );
};
export default Loader;

export const AnimatedLoader = ()=>{
    return <Loader2 className="animate-spin m-auto " />
}

