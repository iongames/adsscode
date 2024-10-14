import { Tabs, TabsList, TabsTrigger, TabsContent } from "@radix-ui/react-tabs";
import { Button } from "./ui/button";
import Dart from "@/assets/images/techs/dart.svg?react";
import Firebase from "@/assets/images/techs/firebase.svg?react";
import Swift from "@/assets/images/techs/swift.svg?react";
import Kotlin from "@/assets/images/techs/kotlin.svg?react";
import Flutter from "@/assets/images/techs/flutter.svg?react";
import Dorab from "@/assets/images/techs/dorab.svg?react";
import Work from "@/assets/images/techs/workplace.svg?react";
import Setting from "@/assets/images/techs/setting.svg?react";

export default function Service({
	contactsRef,
}: {
	contactsRef: React.MutableRefObject<HTMLDivElement | null>;
}) {
	const OnClick = () => {
		contactsRef.current?.scrollIntoView({
			behavior: "smooth",
		});
	};
	return (
		<div className="@container   ">
			<div className="bg-[#65646A] text-white  flex justify-center  h-full @[900px]:h-screen">
				<div className="flex justify-center items-start max-w-[1300px]">
					<Tabs
						defaultValue="service"
						className="@[900px]:w-[900px] @[1200px]:w-[2000px]"
					>
						<div className="mr-1 ml-1 mt-5">
							<TabsList className="grid w-full grid-cols-2  ">
								<TabsTrigger
									value="service"
									className="data-[state=active]:border-b-2 p-2 mr-2  border-[#A8ABAF]  uppercase"
								>
									<p className="uppercase text-[20px]">услуги</p>
								</TabsTrigger>
								<TabsTrigger
									value="technology"
									className="data-[state=active]:border-b-2 p-2 ml-2 border-[#A8ABAF] uppercase "
								>
									<p className="uppercase text-[20px]">технологии</p>
								</TabsTrigger>
							</TabsList>
						</div>

						<div className="h-full w-full ">
							<TabsContent value="service" className="w-full">
								<div className="flex justify-center items-center">
									<div className="grid @[900px]:grid-rows-1 grid-rows-3 @[900px]:grid-cols-3  ">
										<div className="text-center max-w-[500px] @[800px]:mr-10 @[900px]:mr-16 mt-3 @[900px]:mt-12">
											<p className="flex justify-center ">
												<Work className="h-[130px]" />
											</p>

											<p className="font-bold text-2xl mt-2 mb-2">
												Разработка с нуля под ключ
											</p>
											<p>
												Создадим с нуля по-настоящему результативное iOS /
												Android / Кросс-платформенное приложение,
												основываясь на смоем многолетнем опыте разработки
											</p>
											<Button
												className="text-[17px]  bg-transparent hover:bg-gray-400"
												onClick={OnClick}
											>
												Заказать
											</Button>
										</div>
										<div className="text-center max-w-[500px] @[800px]:mr-10 @[900px]:mr-16 mt-10 @[900px]:mt-12">
											<p className="flex justify-center">
												<Dorab className="h-[130px] " />
											</p>
											<p className="font-bold text-2xl mt-2 mb-2">
												Доработка продукта
											</p>
											<p>
												Проанализируем текущее состояние проекта, предложим
												пути решения и доработаем его до нужного результата
											</p>
											<Button
												className="text-[17px]  bg-transparent hover:bg-gray-400"
												onClick={OnClick}
											>
												Заказать
											</Button>
										</div>
										<div className="text-center max-w-[500px]  mt-1  @[900px]:mt-12">
											<p className="flex justify-center ">
												<Setting className="h-[130px]" />
											</p>
											<p className="font-bold text-2xl mt-2 mb-2">
												Перенос на кросс-платформу
											</p>
											<p>
												Перенесем ваше iOS / Android приложение на
												кросс-платформу и сократим стоимость разработки и
												поддержки на 40%
											</p>
											<Button
												className="text-[17px]  bg-transparent hover:bg-gray-400"
												onClick={OnClick}
											>
												Заказать
											</Button>
										</div>
									</div>
								</div>
							</TabsContent>
							<TabsContent className="w-full mb-3 @[900px]:mb-0" value="technology">
								<div className="p-4  gap-6 grid grid-rows-2 grid-cols-2 @[600px]:grid-cols-4 @[600px]:grid-rows-1 @[600px]:gap-10 @[900px]:grid-cols-5 @[900px]:grid-rows-1 @[900px]:gap-20">
									<div className="inline-block ">
										<div className="flex justify-center">
											<Kotlin height={130} />
										</div>

										<p className="text-center">Kotlin</p>
									</div>
									<div className="inline-block ">
										<div className="flex justify-center">
											<Flutter height={130} />
										</div>

										<p className="text-center">Flutter</p>
									</div>
									<div className="inline-block ">
										<div className="flex justify-center">
											<Dart height={130} />
										</div>

										<p className="text-center">Dart</p>
									</div>
									<div className="inline-block ">
										<div className="flex justify-center">
											<Swift height={130} />
										</div>

										<p className="text-center">Swift</p>
									</div>
									<div className="hidden @[900px]:inline-block  ">
										<div className="flex justify-center">
											<Firebase className="" height={130} />
										</div>

										<p className="text-center">Firebase</p>
									</div>
								</div>
								<div className="@[900px]:hidden w-full inline-block  ">
									<div className="flex justify-center items-center">
										<div>
											<Firebase className="" height={130} />
											<p className="text-center">Firebase</p>
										</div>
									</div>
								</div>
							</TabsContent>
						</div>
					</Tabs>
				</div>
			</div>
		</div>
	);
}
