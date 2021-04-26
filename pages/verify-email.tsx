import Head from "next/head";
import Footer from "../components/footer";
import NavBar from "../components/navbar";
import { API_URL } from "./constants";

const verifyEmail = () => {
    return (
        <>
            <Head>
                <title>Sign Up | Minefly</title>
            </Head>
            <NavBar />
            <VerificationForm />
            <Footer />
        </>
    );
};


export const VerificationForm = () => {
  return (<></>)
}



export default verifyEmail;