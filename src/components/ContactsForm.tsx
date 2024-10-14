import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";

import { Button } from "@/components/ui/button";
import {
	Form,
	FormControl,
	FormField,
	FormItem,
	FormLabel,
	FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "./ui/textarea";

const FormSchema = z.object({
	name: z.string().min(1, {
		message: "Username must be at least 2 characters.",
	}),
	email: z.string().min(1, {
		message: "Username must be at least 2 characters.",
	}),
	message: z.string().min(1, {
		message: "Username must be at least 2 characters.",
	}),
});

export function ContactsForm() {
	const form = useForm<z.infer<typeof FormSchema>>({
		resolver: zodResolver(FormSchema),
		defaultValues: {
			name: "",
			email: "",
			message: "",
		},
	});

	function onSubmit(data: z.infer<typeof FormSchema>) {
		return console.log(data);
	}

	return (
		<Form {...form}>
			<form
				onSubmit={form.handleSubmit(onSubmit)}
				className="w-3/4 @[900px]:w-5/6 @[1200px]:w-2/3 space-y-4"
			>
				<FormField
					control={form.control}
					name="name"
					render={({ field }) => (
						<FormItem>
							<FormLabel>Ваше Имя</FormLabel>
							<FormControl>
								<Input
									placeholder="Иван"
									className="bg-[#4B4B4B] text-white ring-red-400 border-transparent  "
									{...field}
								/>
							</FormControl>

							<FormMessage />
						</FormItem>
					)}
				/>
				<FormField
					control={form.control}
					name="email"
					render={({ field }) => (
						<FormItem>
							<FormLabel>Email</FormLabel>
							<FormControl>
								<Input
									placeholder="mail@mail.com"
									className="bg-[#4B4B4B] text-white ring-red-400 border-transparent  "
									{...field}
								/>
							</FormControl>

							<FormMessage />
						</FormItem>
					)}
				/>
				<FormField
					control={form.control}
					name="message"
					render={({ field }) => (
						<FormItem>
							<FormLabel>Сообщение</FormLabel>
							<FormControl>
								<Textarea
									placeholder="Напишите, о чем хотите узнать"
									className="bg-[#4B4B4B] text-white ring-red-400 border-transparent  resize-none"
									{...field}
								/>
							</FormControl>

							<FormMessage />
						</FormItem>
					)}
				/>
				<Button type="submit" className="w-full bg-white text-black hover:bg-neutral-500">
					Отправить сообщение
				</Button>
			</form>
		</Form>
	);
}
