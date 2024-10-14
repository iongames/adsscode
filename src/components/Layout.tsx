import { useRef } from "react";
import { Button } from "./ui/button";
import Footer from "./Footer";
import { Burger } from "./Burger";
import About from "./About";
import Service from "./Service";
import Portfolio from "./Portfolio";
import Сontacts from "./Сontacts";
import { OrderDialog } from "./OrderDialog";

export interface BurgerProps {
  aboutRef: React.MutableRefObject<HTMLDivElement | null>;
  serviceRef: React.MutableRefObject<HTMLDivElement | null>;
  portfolioRef: React.MutableRefObject<HTMLDivElement | null>;
  contactsRef: React.MutableRefObject<HTMLDivElement | null>;
}

export default function Layout() {
  const aboutRef = useRef<HTMLDivElement | null>(null);
  const serviceRef = useRef<HTMLDivElement | null>(null);
  const portfolioRef = useRef<HTMLDivElement | null>(null);
  const contactsRef = useRef<HTMLDivElement | null>(null);

  const props: BurgerProps = {
    aboutRef,
    serviceRef,
    portfolioRef,
    contactsRef,
  };

  return (
    <div className="flex flex-col min-h-screen bg-[#36353A] overflow-x-hidden">
      <header className="z-30 sticky top-0 bg-[#65646A] p-2  text-white @container">
        <div className="items-center @[800px]:ml-[100px] @[800px]:mr-[100px] @[800px]:mt-0 z-20 ">
          <div className="h-full float-start flex justify-start items-center">
            <div className="flex justify-center items-center @[1200px]:hidden  font-bold mr-5">
              <div className="">
                <Burger links={props} />
              </div>
            </div>
            <a
              href="/"
              className="hidden @[950px]:inline-flex text-[38px] ml-1 font-extrabold mr-3"
            >
              ADSSCODE
            </a>
            <div className=" mr-auto  hidden @[1200px]:inline-flex">
              <Button
                className="text-[17px] mr-4 bg-transparent  hidden @[1200px]:inline-flex hover:bg-gray-400"
                onClick={() => {
                  aboutRef.current?.scrollIntoView({
                    behavior: "smooth",
                  });
                }}
              >
                О нас
              </Button>
              <Button
                className="text-[17px] mr-4 bg-transparent hover:bg-gray-400"
                onClick={() => {
                  serviceRef.current?.scrollIntoView({
                    behavior: "smooth",
                  });
                }}
              >
                Наши услуги
              </Button>
              <Button
                className="text-[17px] mr-4 bg-transparent hover:bg-gray-400"
                onClick={() => {
                  portfolioRef.current?.scrollIntoView({
                    behavior: "smooth",
                  });
                }}
              >
                Портфолио
              </Button>
              <Button
                className="text-[17px] bg-transparent hover:bg-gray-400"
                onClick={() => {
                  contactsRef.current?.scrollIntoView({
                    behavior: "smooth",
                  });
                }}
              >
                Контакты
              </Button>
            </div>
          </div>
          <div className="flex items-center float-right ">
            <p className="mr-5 ">
              Связаться с нами
              <br />
              <a href="tel:+7(901)350-77-86">+7(901)350-77-86</a>
            </p>
            <OrderDialog />
          </div>
        </div>
      </header>
      <main
        className="min-w-full flex-grow gap-4 mb-6"
        onClick={(event: React.SyntheticEvent) => {
          event.preventDefault();
          const target = event.target as HTMLAnchorElement;
          const id = target.getAttribute("href")?.replace("#", "");
          const element = document.getElementById(String(id));
          element?.scrollIntoView({
            behavior: "instant",
          });
        }}
      >
        <div id="about" ref={aboutRef}>
          <About contactsRef={contactsRef} />
        </div>

        <div ref={serviceRef} id="service" className="scroll-mt-[70px]">
          <Service contactsRef={contactsRef} />
        </div>
        <div ref={portfolioRef} id="portfolio" className="scroll-mt-[70px] ">
          <Portfolio />
        </div>

        <div ref={contactsRef} id="contacts" className="scroll-mt-[70px] ">
          <Сontacts />
        </div>
      </main>
      <footer className="w-full row-auto">
        <Footer />
      </footer>
    </div>
  );
}
