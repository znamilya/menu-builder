import Head from 'next/head';
import Link from 'next/link';

const HomePage = () => {
  return (
    <div>
      <Head>
        <title>Menu Builder</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <Link href="/">Home</Link>
        <Link href="/dishes">Dishes</Link>
        <Link href="/ingredients">Ingredients</Link>
      </main>
    </div>
  );
};

export default HomePage;
