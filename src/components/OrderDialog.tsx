import { Button } from "@/components/ui/button";
import {
	Dialog,
	DialogContent,
	DialogDescription,
	DialogHeader,
	DialogTitle,
	DialogTrigger,
} from "@/components/ui/dialog";
import { Phone } from "lucide-react";
import { OrderForm } from "./OrderForm";

export function OrderDialog() {
	return (
		<Dialog>
			<DialogTrigger asChild>
				<Button className="h-14  rounded-full @[1250px]:rounded-md @[1250px]:h-10    bg-white text-black @[1250px]:outline @[1250px]:outline-2 @[1250px]:outline-lime-600 hover:bg-neutral-300 ">
					<span className="hidden @[1250px]:inline-flex">Заказать звонок</span>
					<Phone
						color="black"
						fill="black"
						strokeWidth={0.1}
						className="inline-flex @[1250px]:hidden"
					/>
				</Button>
			</DialogTrigger>
			<DialogContent className="sm:max-w-[425px] sm:rounded-md border-transparent outline-none text-white bg-[#36353A]">
				<DialogHeader>
					<DialogTitle>Заказать звонок</DialogTitle>
					<DialogDescription className="text-white text-wrap">
						Укажите ваш номер телефона и мы нам позвоним.
					</DialogDescription>
				</DialogHeader>
				<div className="flex items-center">
					<OrderForm />
				</div>
			</DialogContent>
		</Dialog>
	);
}
