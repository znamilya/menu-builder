import Link from "next/link";
import React from "react";

import { WeekMenu } from "../../../types";

type Props = {
  weekMenu: WeekMenu;
};

const WeekMenuModule = ({ weekMenu }: Props) => {
  return (
    <div>
      {weekMenu.daysMenu.map((dayMenu) => (
        <section key={dayMenu.day}>
          <h2>{dayMenu.day}</h2>
          <dl>
            <dt>Breakfast</dt>
            <dd>
              <Link href={`/dishes/${dayMenu.breakfask.id}`}>
                {dayMenu.breakfask.title}
              </Link>
            </dd>
            <dt>Lunch</dt>
            <dd>
              <Link href={`/dishes/${dayMenu.lunch.id}`}>
                {dayMenu.lunch.title}
              </Link>
            </dd>
            <dt>Dinner</dt>
            <dd>
              <Link href={`/dishes/${dayMenu.dinner.id}`}>
                {dayMenu.dinner.title}
              </Link>
            </dd>
          </dl>
        </section>
      ))}
    </div>
  );
};

export default WeekMenuModule;
