import { useRouter } from "next/router";
import { FC } from "react";
import DashboardLayout from "../../../components/dashboard-layout";
import imgs from "../../../styles/index.module.css";

const Server: FC = () => {
    const router = useRouter();

    const { server: serverName } = router.query;

    return (
        <DashboardLayout>
            {/* <div className="container grid grid-cols-12 gap-4 my-6">
				<div className="col-span-12 card text-center relative p-0 overflow-hidden">
					<div className="p-8">
						<h1 className="text-lg font-bold">
							{serverName}{" "}
							<span className="font-normal text-base chip bg-green-600 text-white">
								Online
							</span>
						</h1>
					</div>
					{/* <div className="flex justify-between my-2">
						<p className="font-bold">Player Count</p>
						<p>
							<span className="chip bg-gray-600">5</span>/
							<span className="chip bg-gray-600">20</span>
						</p>
					</div>
					<div className="flex justify-between my-2">
						<p className="font-bold">Status</p>
						<p className="chip bg-green-600">Online</p>
					</div> }
					<div className="divider" />
					<div className="bottom-0 w-full p-2 text-right">
						<button className="btn btn-filled btn--secondary">Shut down</button>
					</div>
				</div>
			</div> */}
            <div
                className={
                    "w-full bg-center bg-no-repeat bg-cover flex justify-center items-center flex-col mb-8 py-10 " +
                    imgs["img-1"]
                }
            >
                <h1 className="text-3xl font-bold my-1">{serverName}</h1>
                <div className="chip bg-green-600 text-white my-1 shadow-md">
                    Online - 5/20 players
                </div>
                <div className="flex my-3">
                    <button className="btn btn-outlined mx-2 hover:bg-primary-600 hover:text-white hover:border-primary-600 focus:ring-0">
                        Restart
                    </button>
                    <button className="btn btn-filled mx-2 hover:bg-secondary-600 hover:text-white focus:ring-0">
                        Shut down
                    </button>
                </div>
            </div>
            <div className="container my-8">
                <div className="card text-right">
                    {/* <div className="-mx-2">
						<button className="btn btn-filled btn--primary mx-2">
							Restart
						</button>
						<button className="btn btn-filled btn--secondary mx-2">
							Shut down
						</button>
					</div> */}
                </div>
            </div>
        </DashboardLayout>
    );
};

export default Server;
