import React from "react";
import Link from "next/link";

import type { Ingredient } from "../../../types";

type Props = {
  ingredients: Ingredient[];
};

const IngredientsListModule = ({ ingredients }: Props) => {
  return (
    <ul>
      {ingredients.map((ingredient) => (
        <li key={ingredient.id}>
          <Link href={`/ingredients/${ingredient.id}`}>
            <a>
              {ingredient.title} / {ingredient.price}
            </a>
          </Link>
        </li>
      ))}
    </ul>
  );
};

export default IngredientsListModule;
