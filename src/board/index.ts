import type { Category } from "../allQuestions";
import { ALL_CATEGORIES } from "../allQuestions";

class Board {
  static getCategory(position: number): Category {
    return ALL_CATEGORIES[position % 4];
  }
}

export default Board;
