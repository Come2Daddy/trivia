import type { Category } from "../allQuestions";
import { ALL_CATEGORIES } from "../allQuestions";

class Board {
  private position: number = 0; // Start at 0

  private hasCompletedTurnOnDisplacementState: boolean = false;

  static getCategory(position: number): Category {
    return ALL_CATEGORIES[position % 4];
  }

  move(displacement: number): void {
    this.hasCompletedTurnOnDisplacementState = (this.position + displacement) / 12 >= 1 ? true : false;

    this.position = (this.position + displacement) % 12;
  }

  get getPosition(): number {
    return this.position;
  }

  get hasCompletedTurnOnDisplacement() {
    return this.hasCompletedTurnOnDisplacementState;
  }
}

export default Board;
