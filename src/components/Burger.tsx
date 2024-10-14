import { Button } from "@/components/ui/button";

import { Sheet, SheetContent, SheetHeader, SheetTitle, SheetTrigger } from "@/components/ui/sheet";
import { BurgerProps } from "./Layout";
import { useState } from "react";
import BurgerIcon from "@/assets/images/burger.svg?react";

export function Burger({
	links: { aboutRef, contactsRef, portfolioRef, serviceRef },
}: {
	links: BurgerProps;
}) {
	const [open, setOpen] = useState(false);
	return (
		<Sheet onOpenChange={setOpen} open={open}>
			<SheetTrigger asChild>
				<div className="p-2">
					<BurgerIcon height={40} />
				</div>
			</SheetTrigger>
			<SheetContent side="left" className="bg-[#36353A] border-r-transparent">
				<SheetHeader>
					<div>
						<SheetTitle className="flex w-full">
							<a className="text-white text-3xl font-bold">ADSSCODE</a>
						</SheetTitle>
						<div className="bg-[#3E3E40] text-transparent h-[1px] select-none mt-1 mb-1 ">
							1
						</div>
					</div>
				</SheetHeader>
				<div className="grid grid-rows-4 gap-2 mt-3">
					<Button
						className="bg-[#3E3E40] active:bg-[#A8ABAF] text-white border-transparent "
						variant="outline"
						onClick={() => {
							aboutRef.current?.scrollIntoView({
								behavior: "smooth",
							});
							setOpen(false);
						}}
					>
						<span className="flex w-full">О нас</span>
					</Button>
					<Button
						className="bg-[#3E3E40] active:bg-[#A8ABAF] text-white border-transparent"
						variant="outline"
						onClick={() => {
							serviceRef.current?.scrollIntoView({
								behavior: "smooth",
							});
							setOpen(false);
						}}
					>
						<span className="flex w-full">Наши услуги</span>
					</Button>
					<Button
						className="bg-[#3E3E40] active:bg-[#A8ABAF] text-white border-transparent"
						variant="outline"
						onClick={() => {
							portfolioRef.current?.scrollIntoView({
								behavior: "smooth",
							});
							setOpen(false);
						}}
					>
						<span className="flex w-full">Портфолио</span>
					</Button>
					<Button
						className="bg-[#3E3E40] active:bg-[#A8ABAF] text-white border-transparent "
						variant="outline"
						onClick={() => {
							contactsRef.current?.scrollIntoView({
								behavior: "smooth",
							});
							setOpen(false);
						}}
					>
						<span className="flex w-full">Контакты</span>
					</Button>
				</div>
			</SheetContent>
		</Sheet>
	);
}
