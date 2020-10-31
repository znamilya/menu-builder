import Head from 'next/head';
import Link from 'next/link';

const IngredientsPage = () => {
  return (
    <div>
      <Head>
        <title>Menu Builder</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Link href="/">Home</Link>
      <h1>Ingredients</h1>
      <Link href="/ingredients/1">Ingredient 1</Link>
    </div>
  );
};

export default IngredientsPage;
