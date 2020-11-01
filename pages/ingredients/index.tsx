import type { GetServerSideProps } from "next";
import Head from "next/head";
import Link from "next/link";

import type { Ingredient } from "../../src/types";
import IngredientsListModule from "../../src/components/modules/IngredientsList";
import fakeIngredients from "../../src/fakeData/ingredients";

type Props = {
  ingredients: Ingredient[];
};

const IngredientsPage = ({ ingredients }: Props) => {
  return (
    <div>
      <Head>
        <title>Menu Builder</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Link href="/">Home</Link>
      <h1>Ingredients</h1>

      <IngredientsListModule ingredients={ingredients} />
    </div>
  );
};

export const getServerSideProps: GetServerSideProps<Props> = async (
  _context,
) => {
  return {
    props: {
      ingredients: fakeIngredients,
    },
  };
};

export default IngredientsPage;
