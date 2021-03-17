import Head from "next/head";

import Footer from "../components/footer";
import NavBar from "../components/navbar";

const Rules = () => {
	return (
		<>
			<title>
				Rules | Minefly
			</title>
			<NavBar contained />
			<div className="my-10 container mx-5 text-left">
				<h1 className="font-semibold text-3xl sm:text-5xl xl:text-7xl my-4 pt-10 dark:text-white">
					Minefly Rules
				</h1>
				<div className="grid grid-cols-1 divide-y divide-gray-500 pb-5">
					<div></div>
					<div></div>
				</div>
				<p className="text-base text-gray my-15 pt-4">
					By using the Minefly services you agree to follow Minefly's Terms of Service, Privacy Policy and all rules listed below. Failure to do so can result in punishment.
				</p>
				<p className="text-lg dark:text-white my-4">
					The rules are split into <b>Player Server</b> and <b>Platform-Specific Rules</b>. Platform rules only apply to the Minefly website, forums, lobbies, and discord server unless otherwise noted. When we say "you" we mean you as the user of the platform and anything you've contributed to, related to the platform.
				</p>
				<h2 className="font-semibold text-xl sm:text-2xl xl:text-4xl my-4 dark:text-white">
					Player Server Rules:
				</h2>
				<div  className="text-lg dark:text-white pl-5">
					<ol className="list-inside list-decimal" >
						<li>You are not allowed to bypass the maximum player slots.</li>
						<li>Taking advantage of bots to boost the server in the server list is not allowed.</li>
						<li>You may not advertise servers hosted outside of Minefly.</li>
						<li>You must keep your server name, description, and content appropriate unless you have enabled the ‘inappropriate’ server setting.</li>
					</ol>
				</div>
				<h2 className="font-semibold text-xl sm:text-2xl xl:text-4xl my-4 dark:text-white">
					Platform Rules:
				</h2>
				<div  className="text-lg dark:text-white pl-5">
					<ol className="list-inside list-decimal" >
						<li>You're not allowed to swear or use curse words anywhere unless otherwise stated.</li>
						<li>You're not allowed to make threats against any services or players.</li>
						<li>You're not allowed to post content that can be seen as inappropriate, NSFW, or includes references to drugs/alcohol (including in skins	usernames, images, and anything else you can change)</li>
						<li>You're not allowed to post potentially harmful content.</li>
						<li>Harassment, discrimination, and disrespect aren't allowed.</li>
						<li>External server/website/software advertisement isn't allowed unless otherwise stated.</li>
						<li>You're not allowed to spam or flood any chats.</li>
						<li>You're not allowed to release anyone's personal/private information unless with specific approval from the owner of the information.</li>
						<li>You aren't allowed to bypass punishments by using other accounts.</li>
						<li>Lobby Rules:
							<ol className="list-inside list-disc pl-6">
								<li>You're not allowed to advertise servers outside of /advertise or /ad</li>
							</ol>
						</li>
						<li>Discord Rules:
							<ul className="list-inside list-disc pl-6">
								<li>You must follow the <a href="https://discord.com/terms" className="no-underline hover:underline text-blue-600">Discord Terms of Service.</a></li>
								<li>You are only allowed to advertise social media if they're relevant to the ongoing conversation.</li>
								<li>You are to not advertise external services to members of the Minefly Discord.</li>
								<li>Refrain from disturbing others in voice channels. Voice changers are only allowed if everyone in the channel agrees to them.</li>
							</ul>
						</li>
						<li>Forum Rules:
							<ol className="list-inside list-disc pl-6">
								<li>WIP</li>
							</ol>
						</li>
					</ol>
				</div>
			</div>
			<Footer />
		</>
	);
};

export default Rules;
