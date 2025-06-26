import type QuestionSet from "./index.d.ts";

class CategoryQuestionSet {
  private questionSetIndex = 0;

  private questionSet: string[];

  constructor(...questionSet: string[]) {
    this.questionSet = questionSet;
  }

  ask(): string {
    const question = this.questionSet[this.questionSetIndex];
    this.questionSetIndex += 1;
    return question;
  }
}

export default CategoryQuestionSet;
