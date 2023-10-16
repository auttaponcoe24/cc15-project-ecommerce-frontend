export default function Footer() {
	return (
		<div className="flex flex-col bg-red-500">
			<ul className="flex justify-evenly mb-2">
				<li>Logo</li>
				<li>ABOUT US</li>
				<li>CONTACT US</li>
				<li>SOCIAL</li>
			</ul>
			<hr className="border-white my-2 mx-4" />
			<div className="flex justify-center items-center">
				<p className="text-white">
					Logo &copy;
					<small className="uppercase">
						2023 | best solution (thailand)
					</small>
				</p>
			</div>
		</div>
	);
}
