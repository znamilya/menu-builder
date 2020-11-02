import Head from "next/head";
import Link from "next/link";

import IngredientsListModule from "../../src/components/modules/IngredientsList";
import useRouterQuery from "../../src/hooks/useRouterQuery";
import useDishQuery from "../../src/hooks/useDishQuery";

type Props = {};

const DishPage = ({}: Props) => {
  // FIXIT: Figure out how to resolve return type based on constructor passed
  const dishId = useRouterQuery("id", Number) as number | undefined;
  const dishQuery = useDishQuery(dishId);

  if (dishQuery.isLoading) {
    return "Loading...";
  }

  if (!dishQuery.data) {
    return <h1>Not found</h1>;
  }

  const dish = dishQuery.data;

  return (
    <div>
      <Head>
        <title>Menu Builder</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Link href="/">Home</Link>
      <Link href="/dishes">Dishes</Link>
      <h1>Dish {dish.title}</h1>

      <h2>Ingredients:</h2>
      <IngredientsListModule ingredients={dish.ingredients} />
    </div>
  );
};

export default DishPage;
