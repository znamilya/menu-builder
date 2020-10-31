import React from "react";
import Link from "next/link";

import type { Dish } from "../../../types";

type Props = {
  dishes: Dish[];
};

const DishesListModule = ({ dishes }: Props) => {
  return (
    <ul>
      {dishes.map((dish) => (
        <li key={dish.id}>
          <Link href={`/dishes/${dish.id}`}>
            <a>
              {dish.title} / {dish.price}
            </a>
          </Link>
        </li>
      ))}
    </ul>
  );
};

export default DishesListModule;
