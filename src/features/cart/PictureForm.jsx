import React, { useRef, useState } from "react";
import FormButton from "./FormButton";

export default function PictureForm({ onSave, title, initialSrc, children }) {
	const [file, setFile] = useState(null);
	if (file) console.log(URL.createObjectURL(file));

	const inputEl = useRef(null);
	return (
		<div className="flex flex-col items-center gap-4 ">
			<h5 className="text-xl font-bold">{title}</h5>
			<div>
				{children(file ? URL.createObjectURL(file) : initialSrc, () =>
					inputEl.current.click()
				)}
			</div>

			<input
				type="file"
				className=""
				ref={inputEl}
				onChange={(e) => {
					if (e.target.files[0]) {
						setFile(e.target.files[0]);
					}
				}}
			/>

			<div>
				<div className="flex gap-2">
					{/* <button>Save</button>
					<button>Cancel</button> */}
					{file && (
						<>
							<FormButton onClick={() => onSave(file)}>
								save
							</FormButton>
							<FormButton
								onClick={() => {
									inputEl.current.value = "";
									setFile(null);
								}}
							>
								cancel
							</FormButton>
						</>
					)}
				</div>
			</div>
		</div>
	);
}
