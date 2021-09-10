import type { NextPage } from "next";
import Head from "next/head";
import Footer from "../components/footer";
import Navbar from "../components/navbar";
import HomeStyles from "../styles/home.module.css";

const Home: NextPage = () => {
  return (
    <>
      <Head>
        <title>Home | Minefly</title>
      </Head>
      <Navbar />
      <div className="banner w-full relative h-200">
        <div className={HomeStyles["banner-img"]}></div>
        <div className="absolute z-10 top-2/5 left-1/2 transform -translate-x-1/2 text-center lg:text-left lg:left-2/5 font-extrabold">
          <h1 className={HomeStyles["banner-text"]}>
            Free, community-first
            <br />
            Minecraft server hosting
          </h1>
        </div>
      </div>
      {/*
      <main>
        <section>
          All users have access to free Minecraft servers, no credit card or
          payment required.
        </section>
      </main>
      */}
      <Footer />
    </>
  );
};

export default Home;
