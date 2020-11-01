import type { GetServerSideProps } from "next";
import Head from "next/head";
import Link from "next/link";

import type { Dish } from "../../src/types";
import DishesListModule from "../../src/components/modules/DishesList";
import fakeDishes from "../../src/fakeData/dishes";

type Props = {
  dishes: Dish[];
};

const DishesPage = ({ dishes }: Props) => {
  return (
    <div>
      <Head>
        <title>Menu Builder</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Link href="/">Home</Link>
      <h1>Dishes</h1>

      <DishesListModule dishes={dishes} />
    </div>
  );
};

export const getServerSideProps: GetServerSideProps<Props> = async (
  _context,
) => {
  return {
    props: {
      dishes: fakeDishes,
    },
  };
};

export default DishesPage;
