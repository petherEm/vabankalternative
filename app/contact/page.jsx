import { MailIcon, PhoneCall, HomeIcon } from "lucide-react";
import Social from "@/components/Social";
import Form from "@/components/Form";

const Contact = () => {
  return (
    <section>
      <div className="container mx-auto">
        <div className="grid xl:grid-cols-2 pt-12 xl:h-[480px] mb-6 xl:mb-24">
          <div className="flex flex-col justify-center">
            <div className="flex justify-between items-center gap-x-4 text-primary text-lg mb-4">
              <h1 className="text-6xl xl:text-8xl font-bold  mb-8">
                Let's improve the world together.
              </h1>
            </div>
          </div>
        </div>

        {/* infotext and form */}
        <div className="grid xl:grid-cols-2 mb-24 xl:mb-32">
          <div className="flex flex-col gap-y-4 xl:gap-y-14 mb-12 xl:mb-24 text-base xl:text-lg">
            <div className="flex items-center gap-x-8">
              <MailIcon size={18} className="text-primary" />
              <div>hello@vabank.dev</div>
            </div>
            <div className="flex items-center gap-x-8">
              <HomeIcon size={18} className="text-primary" />
              <div>Warsaw, Poland</div>
            </div>
            <div className="flex items-center gap-x-8">
              <Social
                containerStyles="flex gap-x-6 justify-center lg:justify-start lg:mx-0 xl:mx-0"
                iconsStyles="text-foreground text-[32px] hover:text-primary/80 transition-all"
              />
            </div>
          </div>
          <Form />
        </div>
      </div>
    </section>
  );
};

export default Contact;
