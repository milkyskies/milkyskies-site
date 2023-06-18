export function Section({
	children,
	title,
}: {
	children: React.ReactNode | string;
	title: string;
}) {
	return (
		<div>
			<h2 className="font-bold uppercase tracking-widest text-xl sticky top-0 px-6 pt-10 bg-base-100 z-20 pb-2">
				{title}
			</h2>
			<div className="mt-4">{children}</div>
		</div>
	);
}
