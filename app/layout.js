import { Manjari, Syne } from "next/font/google";
import "./globals.css";
import "./styles/variables.css"
import AuthProvider from "@/context/AuthContext";
import ProductsProvider from "@/context/ProductContext";
import { Toaster } from "sonner";
import CartProvider from "@/context/CartContext";
import OrderProvider from "@/context/OrderContext";
import ReviewProvider from "@/context/ReviewContext";
import WishListProvider from "@/context/WishListContext";

// Configure Google font
const manjari = Manjari({
  weight: ["100", "400", "700"],
  subsets: ["latin"]
});



export const metadata = {
  title: "Luxe by DNBL",
  description: "Bringing the Nigerian Diaspora Together with Style and Pride",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`antialiased ${manjari.className}`}>
        <AuthProvider>
          <ProductsProvider>
            <WishListProvider>
              <CartProvider>
                <OrderProvider>
                  <ReviewProvider>
                    <Toaster position="bottom-right" richColors closeButton />
                    <section >{children}</section>
                  </ReviewProvider>
                </OrderProvider>
              </CartProvider>
            </WishListProvider>
          </ProductsProvider>
        </AuthProvider>
      </body>
    </html>
  );
}
