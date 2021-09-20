import type { NextPage } from "next";
import Head from "next/head";
import Footer from "../components/footer";
import Navbar from "../components/navbar";
import HomeStyles from "../styles/home.module.css";
import Link from "next/link";

const Home: NextPage = () => {
  return (
    <>
      <Head>
        <title>Home | Minefly</title>
      </Head>
      <div className={HomeStyles["home-navbar"]}>
        <Navbar />
      </div>
      <div className="banner w-full relative h-screen">
        <div className={HomeStyles["banner-img"]}></div>
        <div className={`absolute font-extrabold ${HomeStyles["banner-data"]}`}>
          <h1 className={HomeStyles["banner-text"]}>
            Free, community-first
            <br />
            Minecraft server hosting
          </h1>
          <Link href="/dashboard">
            <a className="btn btn-big btn-outlined w-max select-none">
              Get started
            </a>
          </Link>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Home;
