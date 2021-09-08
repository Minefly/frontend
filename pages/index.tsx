import type { NextPage } from "next";
import Head from "next/head";
import Footer from "../components/footer";

const Home: NextPage = () => {
  return (
    <>
      <Head>
        <title>Home | Minefly</title>
      </Head>
      <main>
        <section>
          All users have access to free Minecraft servers, no credit card or
          payment required.
        </section>
      </main>
      <Footer />
    </>
  );
};

export default Home;
