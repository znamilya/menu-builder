import type { GetServerSidePropsContext, GetStaticPropsResult } from 'next';
import Head from 'next/head';
import Link from 'next/link';

type Props = {
  ingredientId?: number;
};

const IngredientPage = ({ ingredientId }: Props) => {
  return (
    <div>
      <Head>
        <title>Menu Builder</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Link href="/">Home</Link>
      <Link href="/ingredients">Ingredients</Link>
      <h1>Ingredients {ingredientId}</h1>
    </div>
  );
};

export const getServerSideProps = (
  context: GetServerSidePropsContext,
): GetStaticPropsResult<Props> => {
  const id = context?.params?.id;
  const ingredientId = id ? Number(id) : undefined;

  return {
    props: {
      ingredientId,
    },
  };
};

export default IngredientPage;
