import { ContactsForm } from "./ContactsForm";

export default function Сontacts() {
	return (
		<div className="@container">
			<div className="w-full flex justify-center items-center text-white ml-[50px] mr-[50px] mt-[40px] @[800px]:ml-[100px] @[800px]:mr-[100px] @[800px]:mt-0 ">
				<div className="@[1200px]:flex w-full @[1200px]:justify-center @[1200px]:items-center">
					<div className="grid @[1200px]:grid-cols-2 @[1200px]:gap-10">
						<div className="w-full">
							<p className="font-bold text-nowrap text-[30px] @[1200px]:text-[60px]">
								Оставьте заявку!
							</p>
							<p className=" text-wrap text-[20px] @[1200px]:text-[20px] w-10/12 @[1200px]:w-full">
								Заполните форму, расскажите о вашей компании и проекте, и мы с вами
								свяжемся.
							</p>
							<div className="hidden @[1200px]:inline-block ">
								<div className="flex items-start justify-start gap-3">
									<p>Email: </p>
									<p>adsscode@yandex.ru</p>
								</div>
								<div className="flex items-start justify-start gap-3">
									<p>Телефон: </p>
									<a href="tel:+7(901)350-77-86">+7(901)350-77-86</a>
								</div>
								<div className="flex items-start justify-start gap-3">
									<p>Telegram: </p>
									<a
										href="https://t.me/AdSSCode"
										className="underline underline-offset-1"
									>
										@AdSSCode
									</a>
								</div>
							</div>
						</div>
						<div className="">
							<ContactsForm />
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}
