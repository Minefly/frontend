import { AppProps } from "next/app";
import { MDXProvider, MDXProviderComponents } from "@mdx-js/react";

import "../styles/globals.css";
import Head from "next/head";

const components: MDXProviderComponents = {
    h1(props) {
        const { nodivider, ...componentProps } = props;

        const className = props.className || "";

        return (
            <>
                <h1
                    {...componentProps}
                    className={
                        "font-extrabold text-3xl sm:text-5xl xl:text-7xl my-4 " +
                        className
                    }
                />
                {nodivider || <div className="divider h-1 my-4" />}
            </>
        );
    },

    h2(props) {
        const { nodivider, ...componentProps } = props;

        const className = props.className || "";

        return (
            <>
                <h2
                    {...componentProps}
                    className={
                        "font-bold text-xl sm:text-2xl xl:text-4xl my-4 " +
                        className
                    }
                />
                {nodivider || <div className="divider my-4" />}
            </>
        );
    },

    h3(props) {
        const { nodivider, ...componentProps } = props;

        const className = props.className || "";

        return (
            <>
                <h3
                    {...componentProps}
                    className={
                        "font-bold text-lg sm:text-xl xl:text-3xl my-4 " +
                        className
                    }
                />
                {nodivider || <div className="divider my-4" />}
            </>
        );
    },

    p(props) {
        const className = props.className || "";

        return <p {...props} className={"paragraph " + className} />;
    },

    a(props) {
        const className = props.className || "";

        return (
            <a
                {...props}
                className={"anchor " + className}
                target={props.href?.match(/^https?:\/\//) ? "_blank" : ""}
            />
        );
    },

    ul(props) {
        const className = props.className || "";

        return (
            <ul
                {...props}
                className={"list-inside list-disc ml-4 " + className}
            />
        );
    },

    ol(props) {
        const className = props.className || "";

        return (
            <ul
                {...props}
                className={"list-inside list-decimal ml-4 " + className}
            />
        );
    },

    li(props) {
        const className = props.className || "";

        return <li {...props} className={"paragraph " + className} />;
    },

    title(props) {
        return (
            <Head>
                <title {...props} />
            </Head>
        );
    },
};

function App({ Component, pageProps }: AppProps) {
    return (
        <>
            <div className="min-h-screen w-full dark:bg-gray-800 dark:text-white leading-relaxed overflow-x-hidden overflow-y-visible flex flex-col">
                <MDXProvider components={components}>
                    <Component {...pageProps} />
                </MDXProvider>
            </div>
        </>
    );
}

export default App;
