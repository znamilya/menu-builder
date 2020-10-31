import type { GetServerSidePropsContext, GetStaticPropsResult } from "next";
import Head from "next/head";
import Link from "next/link";

import type { Ingredient } from "../../src/types";
import fakeIngredients from "../../src/fakeData/ingredients";

type Props = {
  ingredient: Ingredient;
};

const IngredientPage = ({ ingredient }: Props) => {
  return (
    <div>
      <Head>
        <title>Menu Builder</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Link href="/">Home</Link>
      <Link href="/ingredients">Ingredients</Link>
      <h1>{ingredient.title}</h1>
      <h2>{ingredient.price}</h2>
    </div>
  );
};

export const getServerSideProps = (
  context: GetServerSidePropsContext,
): GetStaticPropsResult<Props> => {
  const id = context?.params?.id;
  const ingredientId = id ? Number(id) : undefined;

  if (!ingredientId || !fakeIngredients[ingredientId - 1]) {
    return {
      notFound: true,
    };
  }

  return {
    props: {
      ingredient: fakeIngredients[ingredientId - 1],
    },
  };
};

export default IngredientPage;
