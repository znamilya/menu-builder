import Head from "next/head";
import Link from "next/link";

import useRouterQuery from "../../src/hooks/useRouterQuery";
import useIngredientQuery from "../../src/hooks/useIngredientQuery";

type Props = {};

const IngredientPage = ({}: Props) => {
  // FIXIT: Figure out how to resolve return type based on constructor passed
  const ingredientId = useRouterQuery("id", Number) as number | undefined;
  const ingredientQuery = useIngredientQuery(ingredientId);

  if (ingredientQuery.isLoading) {
    return "Loading...";
  }

  if (!ingredientQuery.data) {
    return <h1>Not found</h1>;
  }

  const ingredient = ingredientQuery.data;

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

export default IngredientPage;
