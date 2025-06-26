import CategoryQuestionSet from "./index";

test("It should ask questions in correct order", () => {
  const categoryQuestionSet = new CategoryQuestionSet("Pop question 1", "Pop question 2", "Pop question 3");

  expect(categoryQuestionSet.ask()).toBe("Pop question 1");
  expect(categoryQuestionSet.ask()).toBe("Pop question 2");
  expect(categoryQuestionSet.ask()).toBe("Pop question 3");
});
