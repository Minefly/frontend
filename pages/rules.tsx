import { MDXProvider, MDXProviderComponents } from "@mdx-js/react";
import type { NextPage } from "next";
import Head from "next/head";
import { FC } from "react";
import RulesMD from "../markdown/rules.md";
import RuleStyles from "../styles/rules.module.css";

interface Components extends MDXProviderComponents {
  title: FC;
}

const components: Components = {
  h1(props) {
    const { nodivider, ...componentProps } = props;

    const className = props.className || "";

    return (
      <>
        <h1
          {...componentProps}
          className={
            "font-extrabold text-3xl sm:text-5xl xl:text-7xl my-4 " + className
          }
        />
        {nodivider || <div className={RuleStyles.divider + " h-1 my-4"} />}
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
            "font-bold text-xl sm:text-2xl xl:text-4xl my-4 " + className
          }
        />
        {nodivider || <div className={RuleStyles.divider + " my-4"} />}
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
            "font-bold text-lg sm:text-xl xl:text-3xl my-4 " + className
          }
        />
        {nodivider || <div className={RuleStyles.divider + " my-4"} />}
      </>
    );
  },

  p(props) {
    const className = props.className || "";

    return <p {...props} className={RuleStyles.paragraph + className} />;
  },

  a(props) {
    const className = props.className || "";

    return (
      <a
        {...props}
        className={RuleStyles.anchor + className}
        target={props.href?.match(/^https?:\/\//) ? "_blank" : ""}
      />
    );
  },

  ul(props) {
    const className = props.className || "";

    return (
      <ul {...props} className={"list-inside list-disc ml-4 " + className} />
    );
  },

  ol(props) {
    const className = props.className || "";

    return (
      <ul {...props} className={"list-inside list-decimal ml-4 " + className} />
    );
  },

  li(props) {
    const className = props.className || "";

    return <li {...props} className={RuleStyles.paragraph + className} />;
  },

  title(props) {
    return (
      <Head>
        <title {...props} />
      </Head>
    );
  },
};

const Home: NextPage = () => {
  return (
    <>
      <Head>
        <title>Rules | Minefly</title>
      </Head>
      <MDXProvider components={components}>
        <div className="container text-left mt-4">
          <RulesMD />
        </div>
      </MDXProvider>
    </>
  );
};

export default Home;
