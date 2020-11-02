import Head from "next/head";
import Link from "next/link";

import useIngredientsQuery from "../../src/hooks/useIngredientsQuery";
import IngredientsListModule from "../../src/components/modules/IngredientsList";

type Props = {};

const IngredientsPage = ({}: Props) => {
  const ingredientsQuery = useIngredientsQuery();

  if (ingredientsQuery.isLoading) {
    return "Loading...";
  }

  const ingredients = ingredientsQuery.data;

  return (
    <div>
      <Head>
        <title>Menu Builder</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Link href="/">Home</Link>
      <h1>Ingredients</h1>

      {ingredients?.length ? (
        <IngredientsListModule ingredients={ingredients} />
      ) : (
        <h2>Add first ingredients</h2>
      )}
    </div>
  );
};

export default IngredientsPage;
