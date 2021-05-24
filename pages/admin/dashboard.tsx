import Head from "next/head";
import { useRouter } from "next/router";
import withAuthRedirect from "../../hocs/withAuth";
import { useAuthStore, UserType } from "../../store/auth";
import four01 from "../401";


const AdminHome = withAuthRedirect(function AdminDashboard() {
  return <>
    <Head>
      <title>Minefly | Admin Dashboard</title>
    </Head>
  </>
 },
  UserType.Admin, "/401"

);
export default AdminHome;