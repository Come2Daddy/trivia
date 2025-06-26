import CategoryQuestionSet from "../categoryQuestionSet";

const ALL_CATEGORIES = ["Pop", "Science", "Sports", "Rock"] as const;
export type Category = typeof ALL_CATEGORIES[number];

class AllQuestions {
  private record: Partial<Record<Category, CategoryQuestionSet>> = {};

  addQuestionCategory(category: Category, categoryQuestionSet: CategoryQuestionSet): void {
    this.record[category] = categoryQuestionSet;
  }

  ask(category: Category): string {
    return this.record[category].ask();
  }
}

export default AllQuestions;
