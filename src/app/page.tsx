"use client";

import webSculptorsImage from "@/assets/web_sculptors.png";
import invisionImage from "@/assets/invision.jpeg";
import wellguardImage from "@/assets/wellguard.jpeg";
import recessImage from "@/assets/recess.png";
import orderMapImage from "@/assets/order_map.png";
import orderFormImage from "@/assets/order_form.png";
import talkAppImage from "@/assets/talk_app.png";
import milkyskiesGithubImage from "@/assets/milkyskies_github.png";

import { Section } from "@/components/home/section";
import { useRef } from "react";
import { GithubIcon } from "@/components/common/icons/github_icon";
import { TwitterIcon } from "@/components/common/icons/twitter_icon";
import { HistoryItem } from "@/components/home/history_item";
import { Carousel, Mockup } from "@/components/common/Carousel";

function LeftPanel() {
	return (
		<div className="md:w-1/2 md:sticky md:top-0 md:h-full">
			<Header />
		</div>
	);
}

function Header() {
	return (
		<header className="bg-base-100 mx-auto max-w-screen-xl px-6 pt-10">
			<div className="items-center justify-center">
				<h1 className="text-4xl font-bold">Ryan Chong</h1>
				<h2 className="text-md mt-2 text-xl font-medium">Software Engineer</h2>
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
								label: "Talk - GitHub",
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
								label: "Talk - GitHub",
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

export default function Home() {
	return (
		<div className="bg-base-100 pb-20 h-screen">
			<div className="min-h-screen text-base-content w-full">
				<div className="mx-auto max-w-screen-xl md:px-6 md:flex gap-4">
					<LeftPanel />
					<main className="md:w-1/2">
						<Experience />
						<Other />
					</main>
				</div>
			</div>
		</div>
	);
}
