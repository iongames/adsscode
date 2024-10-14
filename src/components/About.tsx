import { Button } from "./ui/button";
import { motion } from "framer-motion";
export default function About({
  contactsRef,
}: {
  contactsRef: React.MutableRefObject<HTMLDivElement | null>;
}) {
  return (
    <div className="@container">
      <div className="flex justify-center items-start @[650px]:items-center  h-screen scroll-mt-[70px] mt-[30px] @[650px]:mt-0 text-white">
        <motion.div
          className="h-[1000px] w-[1000px] rounded-full bg-[#65646A] right-0"
          animate={{
            y: -500,
            x: 600,
            position: "absolute",
            scale: [0, 0, 1],
          }}
          transition={{ repeatType: "reverse" }}
        />
        <div className="ml-[50px] mr-[50px] mt-[40px] @[800px]:ml-[100px] @[800px]:mr-[100px] @[800px]:mt-0 z-20">
          <div className="grid @[900px]:grid-rows-3 z-20 gap-2 ">
            <p className="text-[65px] text-center @[650px]:text-start font-extrabold ">
              ADSSCODE
            </p>

            <p className="text-wrap  text-[20px] ">
              Увеличиваем долю рынка, улучшаем сервис, повышаем лояльность и
              продажи, снижаем расходы за счет автоматизации бизнес-процессов с
              помощью мобильных приложений и веб-сервисов
            </p>

            <Button
              className="bg-[#A8ABAF]  hover:bg-[#BCBCBC] text-[23px] h-[60px]"
              onClick={() => {
                contactsRef.current?.scrollIntoView({
                  behavior: "smooth",
                });
              }}
            >
              Оставить заявку
            </Button>
          </div>
        </div>
        <img
          src="/disabled_phone.png"
          height={300}
          width={300}
          className="z-20 mr-[100px] hidden @[800px]:inline-flex"
        />
      </div>
    </div>
  );
}
