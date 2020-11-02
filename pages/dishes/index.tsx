import Head from "next/head";
import Link from "next/link";

import useDishesQuery from "../../src/hooks/useDishesQuery";
import DishesListModule from "../../src/components/modules/DishesList";

type Props = {};

const DishesPage = ({}: Props) => {
  const dishesQuery = useDishesQuery();

  if (dishesQuery.isLoading) {
    return "Loading...";
  }

  const dishes = dishesQuery.data;

  return (
    <div>
      <Head>
        <title>Menu Builder</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Link href="/">Home</Link>
      <h1>Dishes</h1>

      {dishes?.length ? (
        <DishesListModule dishes={dishes} />
      ) : (
        <h2>Add first dish</h2>
      )}
    </div>
  );
};

export default DishesPage;
