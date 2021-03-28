import { useRouter } from "next/router";
import DashboardLayout from "../../../components/dashboard-layout";

const Server = (props) => {
	const router = useRouter();

	const { server: serverName } = router.query;

	return (
		<DashboardLayout>
			<div className="container grid grid-cols-12 gap-4 my-6">
				<div className="col-span-12 card text-center -mx-2 px-48">
					<h1 className="text-lg font-bold">{serverName}</h1>
					<div className="flex justify-between">
						<p className="font-bold">Player Count</p>
						<p>5</p>
					</div>
					<div className="flex justify-between">
						<p className="font-bold">Status</p>
						<p>Online</p>
					</div>
				</div>
			</div>
		</DashboardLayout>
	);
};

export default Server;
