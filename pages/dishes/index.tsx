import Head from 'next/head';
import Link from 'next/link';

const DishesPage = () => {
  return (
    <div>
      <Head>
        <title>Menu Builder</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Link href="/">Home</Link>
      <h1>Dishes</h1>
      <Link href="/dishes/1">Dish 1</Link>
    </div>
  );
};

export default DishesPage;
