"use client";

import webSculptorsImage from "@/assets/web_sculptors.png";
import invisionImage from "@/assets/invision.jpeg";
import wellguardImage from "@/assets/wellguard.jpeg";
import recessImage from "@/assets/recess.png";
import orderMapImage from "@/assets/order_map.png";
import orderFormImage from "@/assets/order_form.png";
import talkAppImage from "@/assets/talk_app.png";
import milkyskiesGithubImage from "@/assets/milkyskies_github.png";
import cloudhopper from "@/assets/cloudhopper.png";
import keihan from "@/assets/keihan.png";
import tsubasa from "@/assets/tsubasa.png";

import { Section } from "@/component/home/section";
import { GithubIcon } from "@/component/common/icons/github_icon";
import { TwitterIcon } from "@/component/common/icons/twitter_icon";
import { HistoryItem } from "@/component/home/history_item";
import { Carousel, Mockup } from "@/component/common/Carousel";

function Header() {
	return (
		<header className="bg-base-100 mx-auto max-w-screen-xl px-6 md:py-20 py-10 md:flex md:flex-col md:h-screen md:justify-between">
			<div className="items-center justify-center">
				<h1 className="text-4xl font-bold">チャン ライアン</h1>
				<h2 className="text-md mt-2 text-xl font-medium">Software Engineer</h2>
				<div className="prose">
					<p className="mt-3">
						<a
							href="mailto:ryan@websculptors.net"
							target="_blank"
							rel="noreferrer"
							className="link"
						>
							ryan@websculptors.net
						</a>
					</p>
					<p>
						アメリカのカリフォルニア州出身。IT業界で働いている父の影響でパソコンに興味を持ち、５歳の時からVBで遊んでいた。そして、中学校でプログラミング合宿などに通い、JavaやゲームソフトのMODに手をつけた。
					</p>
					<p>
						高校入学後に日本に興味を持ち、独学で日本語を覚えた。３年生の時に日本の大学に行くと決心し、ネットで購入した教材で日本人の高校生が学ぶ生物・化学・数学を独自に勉強した。そして、近畿大学の薬学部の一般入試に合格して３年通ったが、プログラミングの道に進みたいと思い休学し、開発に全力を注ぐことにした。
					</p>
				</div>
			</div>
			<div className="mt-4 flex gap-4">
				<a
					href="https://github.com/milkyskies"
					target="_blank"
					rel="noreferrer"
					className="w-8"
				>
					<GithubIcon />
				</a>
				<a
					href="https://twitter.com/milkyskies_dev"
					target="_blank"
					rel="noreferrer"
					className="w-8"
				>
					<TwitterIcon />
				</a>
			</div>
		</header>
	);
}

function Experience() {
	return (
		<Section title="職務経歴">
			<div className="flex flex-col gap-4">
				<HistoryItem
					period="2022.08 — 現在"
					title="Web Sculptors"
					position="設立・ウェブ開発・営業"
					tags={[
						"HTML",
						"CSS",
						"Svelte",
						"SvelteKit",
						"TailwindCSS",
						"JavaScript",
						"TypeScript",
						"Tailwind CSS",
						"Linux",
						"Google Search Console",
						"Google Analytics",
					]}
				>
					<p>
						小型企業向けのWebサービス会社を設立した。ホームページ作成やサーバー管理などのサービスを提供した。
					</p>
					<Carousel
						items={[
							{
								image: webSculptorsImage,
								label: "Web Sculptors HP",
								link: "https://websculptors.net",
								mockup: Mockup.MAC,
							},
							{
								image: invisionImage,
								label: "Invision Prints",
								link: "https://invisionprints.com/",
								mockup: Mockup.MAC,
							},
							{
								image: wellguardImage,
								label: "Wellguard Insurance",
								link: "https://wellguardinsurance.com/",
								mockup: Mockup.MAC,
							},
							{
								image: recessImage,
								label: "Recess Club Challenge",
								link: "https://recessclubchallenge.com/",
								mockup: Mockup.MAC,
							},
						]}
					/>
				</HistoryItem>
				<HistoryItem
					period="2022.11 — 現在"
					title="Web Sculptors"
					position="アプリ開発・サーバー構築"
					tags={[
						"SwiftUI",
						"Swift",
						"HTML",
						"CSS",
						"SvelteKit",
						"Svelte",
						"TailwindCSS",
						"Node.js",
						"Express.js",
						"TypeScript",
						"JavaScript",
						"Firebase",
						"PostgreSQL",
						"Prisma",
					]}
				>
					<p>
						スタートアップから依頼され、SwiftUIとFirebaseを用いて依頼・注文アプリの開発を担当した。Node.jsとPostgreSQLを用いてアプリと同じ機能を持つLINEのBotの開発も担当し、その後、Svelteで管理コンソールを構築した。
					</p>
					<Carousel
						items={[
							{
								image: orderMapImage,
								label: "注文アプリのスクショ（１）",
								mockup: Mockup.IPHONE,
								link: orderMapImage.src,
							},
							{
								image: orderFormImage,
								label: "注文アプリのスクショ（2）",
								mockup: Mockup.IPHONE,
								link: orderFormImage.src,
							},
						]}
					/>
				</HistoryItem>
				<HistoryItem
					period="2023.01 — 現在"
					title="株式会社sinProject"
					position="ウェブアプリ開発・サーバー構築"
					tags={[
						"HTML",
						"CSS",
						"Svelte",
						"SvelteKit",
						"TailwindCSS",
						"JavaScript",
						"TypeScript",
						"Tailwind CSS",
						"Linux",
						"MySQL",
						"Oracle DB",
						"Prisma",
					]}
				>
					<p>
						チームの一員として、SvelteKitとMySQLを用いて多機能の言語学習アプリの開発に参加し、翻訳・テーマ機能の実装やサーバーの構築などを担当した。また、見積書生成システムのウェブアプリの開発にも参加した。
					</p>
					<Carousel
						items={[
							{
								image: talkAppImage,
								label: "Talk - ウェブアプリ",
								link: "https://talk.sinpro.dev/docs",
								mockup: Mockup.MAC,
							},
							{
								image: milkyskiesGithubImage,
								label: "GitHub - Talk",
								link: "https://github.com/sinProject-Inc/talk",
								mockup: Mockup.MAC,
							},
						]}
					/>
				</HistoryItem>
			</div>
		</Section>
	);
}

function Other() {
	return (
		<Section title="個人開発経歴">
			<div className="flex flex-col gap-4">
				<HistoryItem
					title="Ginga Games"
					position="ゲーム開発"
					tags={["C#", "Godot Engine"]}
				>
					<p>
						ネットで協力者を募集し、Godot
						EngineとC#でゲームを作成し、ウェブゲーム会社に販売した。
						<span className="font-bold text-base-content">
							2万人ほどのプレイ数
						</span>
						を獲得できた。
					</p>
					<Carousel
						items={[
							{
								image: cloudhopper,
								label: "Cloudhopper - Armor Games",
								link: "https://armorgames.com/cloudhopper-game/19219",
								mockup: Mockup.MAC,
							},
						]}
					/>
				</HistoryItem>
				<HistoryItem
					title="関西弁のアクセント辞典"
					position="ウェブアプリ開発"
					tags={[
						"HTML",
						"CSS",
						"Svelte",
						"SvelteKit",
						"TailwindCSS",
						"JavaScript",
						"TypeScript",
						"Tailwind CSS",
						"Supabase",
						"PostgreSQL",
					]}
				>
					<Carousel
						items={[
							{
								image: keihan,
								label: "関西弁のアクセント辞典",
								link: "https://kansai.milkyskies.dev",
								mockup: Mockup.MAC,
							},
							{
								image: milkyskiesGithubImage,
								label: "GitHub - 関西弁のアクセント辞典",
								link: "https://github.com/milkyskies/kansai-accent",
								mockup: Mockup.MAC,
							},
						]}
					/>
				</HistoryItem>
				<HistoryItem
					title="Tsubasa（動画圧縮）"
					position="ウェブアプリ開発"
					tags={[
						"HTML",
						"CSS",
						"Vue",
						"Nuxt.js",
						"TailwindCSS",
						"JavaScript",
						"TypeScript",
						"Tailwind CSS",
						"Wasm",
					]}
				>
					<Carousel
						items={[
							{
								image: tsubasa,
								label: "Tsubasa",
								link: "https://tsubasa.js.org",
								mockup: Mockup.MAC,
							},
							{
								image: milkyskiesGithubImage,
								label: "GitHub - Tsubasa",
								link: "https://github.com/matchamoon/tsubasa",
								mockup: Mockup.MAC,
							},
						]}
					/>
				</HistoryItem>
				<HistoryItem
					title="LINE ChatGPT Bot"
					position="サーバー開発"
					tags={["Go", "SurrealDB"]}
				>
					<Carousel
						items={[
							{
								image: milkyskiesGithubImage,
								label: "GitHub - LINE ChatGPT Bot",
								link: "https://github.com/milkyskies/line-chatgpt",
								mockup: Mockup.MAC,
							},
						]}
					/>
				</HistoryItem>
			</div>
		</Section>
	);
}

export default function Home() {
	return (
		<div className="bg-base-100 pb-20 h-screen">
			<div className="min-h-screen text-base-content w-full">
				<div className="mx-auto max-w-[1200px] md:px-6 md:flex gap-4">
					<div className="md:w-[40%] md:sticky md:top-0 md:h-full">
						<Header />
					</div>
					<main className="md:w-[60%] mt-10 pb-14">
						<Experience />
						<div className="divider px-4" />
						<Other />
					</main>
				</div>
			</div>
		</div>
	);
}
