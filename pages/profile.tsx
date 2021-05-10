import Footer from "../components/footer";
import NavBar from "../components/navbar";
import Link from "next/link";
import Head from "next/head";
import { useAuthStore } from "../store/auth";
import { useState } from "react";

export default function profile() {
	const isLoggedIn = useAuthStore(state => state.loggedIn);
	const uuid = "b597aac0011f41d0bab1edc1b809016e" //replace with real uuid
	const name = "Imposter" //replace with real name

	const [passOpen, setPassOpen] = useState(false)

	if (!isLoggedIn == false) { //remove the "!" when ready for prod
		return ( //if theres a js way to do this, pls do it
			<>
				<Head>
					<meta httpEquiv="Refresh" content="0; URL=/401" />
				</Head>
			</>
		)
	}
	else {
		return (
			<>
				<NavBar contained />
					<div className="flex flex-grow flex-col lg:flex-row mx-auto container px-5 md:px-20 my-10">
						<div className="w-96 flex flex-rwo lg:flex-col">
							<img className="rounded-full w-72 h-72" src={"https://crafatar.com/avatars/" + uuid + "?overlay"}/>
							<div className="h-full flex flex-col items-center justify-center mt-10 ml-10 lg:mt-0 lg:ml-0">
								<h1 className="text-2xl fonst-semibold">{name + "'s Profile"}</h1>
								<button className="btn btn-filled btn--accent mt-6">Dashboard</button>
							</div>
						</div>
						<div className="mt-10 lg:mt-0 lg:ml-10 w-full bg-gray-850 rounded shadow">
							<form className="flex flex-grow flex-col h-full  m-6">
								<div className="flex flex-col md:flex-row">
									<div className="w-full p-4">
										<label className="relative">
											Email
											<input type="email" className="rounded-lg bg-gray-200 dark:bg-gray-700 w-full h-9 p-1 tracking-widest focus:outline-none" maxLength={24} />
											<div className="absolute inset" />
										</label>
										<label className="mt-16">
											Password
											<input type="password" className="rounded-lg bg-gray-200 dark:bg-gray-700 w-full h-9 p-1 tracking-widest focus:outline-none" maxLength={24} />
										</label>
										<p 
											className="text-sm mb-2 text-blue-500 hover:underline select-none cursor-pointer"
											onClick={() => setPassOpen(!passOpen)}
										>Change Password?</p>
										<label className={"mt-16 " + (passOpen ? "" : "hidden")}>
											New password
											<input type="password" className="rounded-lg bg-gray-200 dark:bg-gray-700 w-full h-9 p-1 tracking-widest focus:outline-none" maxLength={24} />
										</label>
									</div>
									<div className="w-full p-4">
										<label className="">
											Phone Number
											<input type="text" className="rounded-lg bg-gray-200 dark:bg-gray-700 w-full h-9 p-1 tracking-widest focus:outline-none" maxLength={24} />
										</label>
										<button className="btn btn-outlined btn--primary mt-6">Enable 2fa</button>
									</div>
								</div>
								<input type="submit" className="btn btn-filled btn--accent mt-6 cursor-pointer" />
							</form>
						</div>
					</div>
				<Footer />
			</>
		)
	}
}
