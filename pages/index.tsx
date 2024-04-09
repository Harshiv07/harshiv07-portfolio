import Head from "next/head";
import { Home } from "@/components/home/Home";

export default function home() {
  return (
    <>
      <Head>
        <title>Harshiv Patel</title>
        <link rel='shortcut icon' href='/favicon.png' />
        <meta name='description' content='Harshiv Patel | Software Developer' />
        <meta name='viewport' content='width=device-width, initial-scale=1' />
        <meta
          property='og:title'
          content='Harshiv Patel | Software Developer'
        />
        <meta
          name='description'
          content="Hey! I'm Harshiv Patel, and I'm a Masters of Science in Computer Science graduate."
        />

        <meta
          property='og:title'
          content='Harshiv Patel | Software Developer'
        />
        <meta property='og:type' content='article' />
        <meta property='og:url' content='https://github.com/Harshiv07' />
        <meta
          property='og:description'
          content="Hey! I'm Harshiv Patel, and I'm a Masters of Science in Computer Science graduate."
        />

        <meta name='twitter:card' content='summary' />
        <meta name='twitter:site' content='@Harshiv17' />
        <meta
          name='twitter:title'
          content='Harshiv Patel | Software Developer'
        />
        <meta
          name='twitter:description'
          content="Hey! I'm Harshiv Patel, and I'm a Masters of Science in Computer Science graduate."
        />
        <meta name='twitter:creator' content='@Harshiv17' />
      </Head>
      <Home />
    </>
  );
}
