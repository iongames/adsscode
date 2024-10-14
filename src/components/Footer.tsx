import Telegram from "@/assets/icons/telegram.svg?react";
import { Button } from "./ui/button";

export default function Footer() {
	return (
		<div className="flex justify-center bg-[#36353A] items-center text-white h-[120px] border-t-[2px] border-[#626167]">
			<div className="text-center">
				<Button
					size="icon"
					className="h-[47px] w-[47px] hover:bg-white  bg-white rounded-full "
				>
					<a href="https://t.me/AdSSCode" target="_blank">
						<Telegram height={37} />
					</a>
				</Button>

				<p className="mt-3 text-[14px]">© ADSSCODE 2024</p>
			</div>
		</div>
	);
}
