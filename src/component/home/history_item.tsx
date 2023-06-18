import { ExternalLinkIcon } from "../common/icons/external_link_icon";

export function HistoryItem({
	period,
	title,
	position,
	tags,
	children,
}: {
	period?: string;
	title: string;
	position: string;
	tags: string[];
	children: React.ReactNode;
}) {
	return (
		<div className="py-4 px-6 rounded-box transition-all">
			<div className="text-sm font-semibold uppercase tracking-wide text-base-content/70">
				{period}
			</div>
			<h3 className="text-xl font-semibold mt-2">{title}</h3>
			<p className="font-medium text-base-content/70 text-primary mt-1">
				{position}
			</p>
			<div className="mt-2 text-base-content/80">{children}</div>
			<ul className="mt-5 flex flex-wrap gap-[0.5rem] px-1">
				{tags.map((tag) => (
					<li
						key={tag}
						className="text-semibold badge-outline badge text-primary/60 text-xs"
					>
						{tag}
					</li>
				))}
			</ul>
		</div>
	);
}
