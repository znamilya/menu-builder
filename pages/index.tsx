import type { GetServerSideProps } from "next";
import Head from "next/head";
import Link from "next/link";

import type { WeekMenu } from "../src/types";
import WeekMenuModule from "../src/components/modules/WeekMenu";
import fakeWeekMenu from "../src/fakeData/weekMenu";

type Props = {
  weekMenu: WeekMenu;
};

const HomePage = ({ weekMenu }: Props) => {
  return (
    <div>
      <Head>
        <title>Menu Builder</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <Link href="/">Home</Link>
        <Link href="/dishes">Dishes</Link>
        <Link href="/ingredients">Ingredients</Link>

        <WeekMenuModule weekMenu={weekMenu} />
      </main>
    </div>
  );
};

export const getServerSideProps: GetServerSideProps<Props> = async () => {
  return {
    props: {
      weekMenu: fakeWeekMenu,
    },
  };
};

export default HomePage;
