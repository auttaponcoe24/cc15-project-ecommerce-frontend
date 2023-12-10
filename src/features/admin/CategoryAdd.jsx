import React, { useState } from "react";
import {
	Button,
	Dialog,
	Card,
	CardHeader,
	CardBody,
	CardFooter,
	Typography,
	Input,
	Checkbox,
} from "@material-tailwind/react";
import { useProduct } from "../../hooks/use-product";

export function CategoryAdd() {
	const { createCategory } = useProduct();
	const [open, setOpen] = React.useState(false);
	const [input, setInput] = useState({
		name: "",
	});
	const handleOpen = () => {
		setOpen((cur) => !cur);
	};

	const handleAdd = async () => {
		try {
			if (input.name.length > 0) {
				await createCategory(input);
			} else {
				setOpen(false);
			}
		} catch (err) {
			console.log(err);
		} finally {
			setOpen(false);
		}
	};

	return (
		<>
			<button
				onClick={handleOpen}
				className="rounded-md text-white py-2 px-2 t bg-purple-500"
			>
				Add New Category
			</button>
			<Dialog
				size="xs"
				open={open}
				handler={handleOpen}
				className="bg-transparent shadow-none "
			>
				<Card className="mx-auto w-full max-w-[24rem]">
					<CardBody className="flex flex-col gap-4">
						<Typography variant="h4" color="blue-gray">
							Add Category
						</Typography>

						<Typography className="-mb-2" variant="h6">
							Name Category
						</Typography>
						<Input
							label="Category"
							size="lg"
							onChange={(e) => setInput({ ...input, name: e.target.value })}
							value={input.name.trim()}
						/>
					</CardBody>
					<CardFooter className="pt-0">
						<Button variant="gradient" onClick={handleAdd} fullWidth>
							Add
						</Button>
					</CardFooter>
				</Card>
			</Dialog>
		</>
	);
}
