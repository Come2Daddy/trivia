import CategoryQuestionSet from "./index";

test("It should ask the first question", () => {
  const categoryQuestionSet = new CategoryQuestionSet("Pop question 1", "Pop question 2", "Pop question 3");

  expect(categoryQuestionSet.ask()).toBe("Pop question 1");
});
