import { WeekMenu } from "../types";

import dishes from "./dishes";

export default {
  id: 1,
  price: 100,
  daysMenu: [
    {
      id: 1,
      day: "Mon",
      breakfask: dishes[0],
      lunch: dishes[0],
      dinner: dishes[0],
    },
  ],
} as WeekMenu;
