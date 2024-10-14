import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";

import { Button } from "@/components/ui/button";
import { Form, FormControl, FormField, FormItem, FormMessage } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "./ui/textarea";

const FormSchema = z.object({
	name: z.string().min(1, {
		message: "Поле не может быть пустым.",
	}),
	phone: z
		.string()
		.min(1, {
			message: "Поле не может быть пустым.",
		})
		.min(10, {
			message: "Неверный формат номера!",
		})
		.max(13, {
			message: "Неверный формат номера!",
		}),
	message: z.string().min(1, {
		message: "Поле не может быть пустым.",
	}),
});

export function OrderForm() {
	const form = useForm<z.infer<typeof FormSchema>>({
		resolver: zodResolver(FormSchema),
		defaultValues: {
			name: "",
			phone: "",
			message: "",
		},
	});

	function onSubmit(data: z.infer<typeof FormSchema>) {
		return console.log(data);
	}

	return (
		<Form {...form}>
			<form onSubmit={form.handleSubmit(onSubmit)} className="w-full space-y-4">
				<FormField
					control={form.control}
					name="name"
					render={({ field }) => (
						<FormItem>
							<FormControl>
								<Input
									type="text"
									placeholder="Имя"
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
					name="phone"
					render={({ field }) => (
						<FormItem>
							<FormControl>
								<Input
									placeholder="+79991234567"
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
							<FormControl>
								<Textarea
									placeholder="Укажите ваши предпочтения (дата и время звонка и т.п)"
									className="bg-[#4B4B4B] text-white ring-red-400 border-transparent  resize-none"
									{...field}
								/>
							</FormControl>

							<FormMessage />
						</FormItem>
					)}
				/>
				<Button type="submit" className="w-full bg-white text-black  hover:bg-neutral-500">
					Заказать звонок
				</Button>
			</form>
		</Form>
	);
}
