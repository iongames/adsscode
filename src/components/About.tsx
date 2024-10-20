import { FC } from "react";
import { Button } from "./ui/button";
import { motion } from "framer-motion";
import MosaicIcon from "@/assets/icons/auto_awesome_mosaic.svg?react";
import DesktopIcon from "@/assets/icons/desktop_mac.svg?react";
import SmartphoneIcon from "@/assets/icons/smartphone.svg?react";
import SettingsIcon from "@/assets/icons/settings.svg?react";

const serviceList = [
  {
    icon: <SmartphoneIcon />,
    title: "Разработка мобильного приложения",
    description:
      "Разработка нативного мобильного приложения под iOS/Android или кроссплатформенного приложения.",
  },
  {
    icon: <DesktopIcon />,
    title: "Разработка настольного приложения",
    description:
      "Разработка настольного приложения под Windows, Linux и MacOS на Flutter.",
  },
  {
    icon: <MosaicIcon />,
    title: "Разработка кроссплатформменого приложения",
    description: "Разработка кроссплатформменого приложения на Flutter.",
  },
  {
    icon: <SettingsIcon />,
    title: "Разработка чат-бота",
    description: "Разработка чат-бота для соц.сетей.",
  },
];

export const ServiceComponent: FC<{
  icon: JSX.Element;
  title: string;
  description: string;
}> = ({ icon, title, description }) => (
  <div className="flex flex-col items-center gap-2 text-xs @[900px]:text-base">
    {icon}
    <h3 className="text-[1.125em] leading-[1.4em] font-bold">{title}</h3>
    <p className="opacity-50">{description}</p>
  </div>
);

export default function About({
  contactsRef,
}: {
  contactsRef: React.MutableRefObject<HTMLDivElement | null>;
}) {
  return (
    <div className="@container">
      <div className="flex justify-center items-start @[650px]:items-center h-screen scroll-mt-[70px] mt-[30px] @[650px]:mt-0 text-white">
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
        <div className="flex flex-col items-center gap-10 mx-10 @[900px]:flex-row z-20">
          <div className="flex flex-col gap-10">
            <p className="text-[65px] text-center @[650px]:text-start font-extrabold ">
              ADSSCODE
            </p>
            <p className="text-wrap text-[20px]">
              Увеличиваем долю рынка, улучшаем сервис, повышаем лояльность и
              продажи, снижаем расходы за счет автоматизации бизнес-процессов с
              помощью мобильных приложений и веб-сервисов
            </p>
            <Button
              className="bg-[#A8ABAF] hover:bg-[#BCBCBC] text-[23px] h-[60px]"
              onClick={() => {
                contactsRef.current?.scrollIntoView({
                  behavior: "smooth",
                });
              }}
            >
              Оставить заявку
            </Button>
          </div>
          <div className="relative z-20 @[800px]:inline-flex">
            <img
              src="/disabled_phone.png"
              width={300}
              className="max-h-[480px] @[900px]:max-h-[700px] min-w-[400px] object-contain select-none"
            />
            <div className="w-full max-w-[223px] @[900px]:max-w-[325px] h-full max-h-[470px] @[900px]:max-h-[685px] rounded-[36px] @[900px]:rounded-[52px] absolute flex flex-col overflow-hidden pr-[2px] items-center text-center leading-[1.2rem] m-auto left-0 right-0 top-[1px] bottom-0 bg-[#65646A]">
              <div className="flex flex-col gap-6 scrollbar overflow-y-scroll px-4 py-10">
                {serviceList.map((value) => (
                  <ServiceComponent {...value} />
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
