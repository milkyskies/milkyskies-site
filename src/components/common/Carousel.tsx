import Image, { StaticImageData } from "next/image";
import { ExternalLinkIcon } from "./icon/external_link_icon";

export enum Mockup {
	MAC = "MAC",
	IPHONE = "IPHONE",
}

export type CarouselItem = {
	image: StaticImageData;
	label: string;
	link: string;
	mockup?: Mockup;
};

export function Carousel({ items }: { items: CarouselItem[] }) {
	return (
		<div className="carousel-center rounded-box mt-5 max-w-full space-x-4 bg-neutral p-4 items-center inline-flex overflow-x-scroll snap-mandatory snap-x scroll-smooth">
			{items.map((item) => (
				<div key={item.link} className="relative">
					<a
						href={item.link}
						target="_blank"
						className="group"
						rel="noreferrer"
					>
						<style jsx>
							{`
                    .mockup-mac {
                      position: relative;
                      overflow: hidden;
                      overflow-x: auto;
                      padding-top: 0.7rem
                    }
                    .mockup-mac pre[data-prefix]:before {
                      content: attr(data-prefix);
                      display: inline-block;
                      text-align: right;
                    }
                    .mockup-mac:before {
                      content: '';
                      margin-bottom: 0.5rem;
                      display: block;
                      height: 0.5rem;
                      width: 0.5rem;
                      border-radius: 9999px;
                      opacity: 0.3;
                      box-shadow: 0.7em 0, 1.55em 0, 2.4em 0;
                    }
                  `}
						</style>
						<div
							className={`w-60 rounded-box bg-base-300 transition-all group-hover:scale-[1.02] max-h-48 overflow-hidden
                ${item.mockup === Mockup.MAC ? "mockup-mac" : ""}
                ${item.mockup === Mockup.IPHONE ? "mockup-iphone" : ""}
              `}
						>
							<Image
								src={item.image}
								alt={item.label}
								className="object-scale-down brightness-[0.35] transition-all group-hover:brightness-[0.3] blur-[2px]"
							/>
						</div>
						<div className="absolute inset-0 flex items-center justify-center px-2">
							<div className="transition-all group-hover:scale-[1.05] group-hover:text-info">
								<div className="flex items-center gap-1 w-full">
									<span className="w-3">
										<ExternalLinkIcon />
									</span>
									<p className="text-sm font-bold truncate w-full">
										{item.label}
									</p>
								</div>
								<div className="h-[1px] w-full bg-base-content group-hover:bg-info transition-all mt-[-2.5px]" />
							</div>
						</div>
					</a>
				</div>
			))}
		</div>
	);
}
