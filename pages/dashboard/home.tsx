import Head from "next/head";
import DashboardLayout from "../../components/dashboard-layout";

const DashboardHome = () => {
  return (
    <>
      <Head>
        <title>Home | Minefly Dashboard</title>
      </Head>
      <DashboardLayout>
        <div className="container grid grid-cols-12 gap-4 m-4">
          <div className="col-span-12 card text-center flex items-center -mx-2">
            <h2 className="text-xl font-bold mx-2">Server 1</h2>
            <p className="bg-green-600 py-0.5 px-5 rounded-full mx-2">Online</p>
            <div className="flex-1 mx-2" />
            <button className="btn btn-filled btn--primary mx-2">
              Edit server
            </button>
          </div>
        </div>
      </DashboardLayout>
    </>
  );
};

export default DashboardHome;
