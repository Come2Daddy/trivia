import AllQuestions from "./index";
import CategoryQuestionSet from "../categoryQuestionSet";

test("It should ask the first question of science category", () => {
  const categoryQuestionSetAsPop = new CategoryQuestionSet("Pop question 1", "Pop question 2", "Pop question 3");
  const categoryQuestionSetAsScience = new CategoryQuestionSet(
    "Science question 1",
    "Science question 2",
    "Science question 3"
  );

  const categoryQuestion = new AllQuestions();

  categoryQuestion.addQuestionCategory("Pop", categoryQuestionSetAsPop);
  categoryQuestion.addQuestionCategory("Science", categoryQuestionSetAsScience);

  expect(categoryQuestion.ask("Science")).toBe("Science question 1");
});
