import CategoryQuestionSet from "./index";

test("Ask the first question", () => {
  const categoryQuestionSet = new CategoryQuestionSet("Pop question 1", "Pop question 2", "Pop question 3");

  expect(categoryQuestionSet.ask()).toBe("Pop question 1");
});
