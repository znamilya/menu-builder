import type { GetServerSidePropsContext, GetStaticPropsResult } from 'next';
import Head from 'next/head';
import Link from 'next/link';

type Props = {
  dishId?: number;
};

const DishPage = ({ dishId }: Props) => {
  return (
    <div>
      <Head>
        <title>Menu Builder</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Link href="/">Home</Link>
      <Link href="/dishes">Dishes</Link>
      <h1>Dish {dishId}</h1>
    </div>
  );
};

export const getServerSideProps = (
  context: GetServerSidePropsContext,
): GetStaticPropsResult<Props> => {
  const id = context?.params?.id;
  const dishId = id ? Number(id) : undefined;

  return {
    props: {
      dishId,
    },
  };
};

export default DishPage;
