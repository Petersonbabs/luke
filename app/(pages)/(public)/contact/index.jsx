import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Mail, MapPin, Phone } from "lucide-react";


const ContactPageIndex = () => {
  return (
    <div className="pt-[70px] container">
      <h1 className="lbd-h1 text-center">Contact Us</h1>
      <Card className="p-4">
        <form className="grid gap-4 sm:gap-6">
          <div className="grid sm:grid-cols-2 gap-4">
            <div className="grid gap-1">
              <label htmlFor="firstName">First Name</label>
              <input type="text" id="firstName" className="w-full border p-2" />
            </div>
            <div className="grid gap-1">
              <label htmlFor="lastName">Last Name</label>
              <input type="text" id="lastName" className="w-full border p-2" />
            </div>
          </div>

          <div className="grid sm:grid-cols-2 gap-4">
            <div className="grid gap-1">
              <label htmlFor="phoneNumber">Phone Number</label>
              <input
                type="number"
                id="phoneNumber"
                className="w-full border p-2"
              />
            </div>
            <div className="grid gap-1">
              <label htmlFor="email">Email</label>
              <input type="email" id="email" className="w-full border p-2" />
            </div>
          </div>

          <div className="grid gap-1">
            <label htmlFor="message">Message/Inquiry</label>
            <textarea
              name="message"
              id="message"
              className="border w-full"
              cols="30"
              rows="10"
            ></textarea>
          </div>

          <Button className="btn black-btn">Submit</Button>
        </form>
      </Card>

      <section className="mt-8 grid gap-4 sm:grid-cols-3">
        <div className="flex gap-4 items-center">
          <Mail />
          <span>Luxebydnbl@gmail.com</span>
        </div>
        <div className="flex gap-4 items-center">
          <Phone />
          <span>+2349139135953</span>
        </div>
        <div className="flex gap-4 items-center">
          <MapPin />
          <span>4, Layosipe Street, Itamerin,Ago-iwoye, Ogun State.</span>
        </div>
      </section>
    </div>
  );
};

export default ContactPageIndex;
