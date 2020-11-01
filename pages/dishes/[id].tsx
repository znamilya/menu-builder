import type { GetServerSideProps } from "next";
import Head from "next/head";
import Link from "next/link";

import type { Dish } from "../../src/types";
import IngredientsListModule from "../../src/components/modules/IngredientsList";
import fakeDishes from "../../src/fakeData/dishes";

type Props = {
  dish: Dish;
};

const DishPage = ({ dish }: Props) => {
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

export const getServerSideProps: GetServerSideProps<Props> = async (
  context,
) => {
  const id = context?.params?.id;
  const dishId = id ? Number(id) : undefined;

  if (!dishId || fakeDishes[dishId - 1] === undefined) {
    return {
      notFound: true,
    };
  }

  return {
    props: {
      dish: fakeDishes[dishId - 1],
    },
  };
};

export default DishPage;
