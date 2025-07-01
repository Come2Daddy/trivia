import CategoryQuestionSet from "./categoryQuestionSet";
import AllQuestions, { Category } from "./allQuestions";
import Board from "./board";
import Player from "./player";

export class Game {
  private players: Array<Player> = [];
  private places: Array<Board> = [];
  private currentPlayer: number = 0;

  private allQuestions: AllQuestions;

  constructor() {
    const questions = {
      pop: [],
      science: [],
      sports: [],
      rock: [],
    };
    for (let i = 0; i < 50; i++) {
      questions.pop.push("Pop Question " + i);
      questions.science.push("Science Question " + i);
      questions.sports.push("Sports Question " + i);
      questions.rock.push(this.createRockQuestion(i));
    }

    this.allQuestions = new AllQuestions();

    this.allQuestions.addQuestionCategory("Pop", new CategoryQuestionSet(...questions.pop));
    this.allQuestions.addQuestionCategory("Science", new CategoryQuestionSet(...questions.science));
    this.allQuestions.addQuestionCategory("Sports", new CategoryQuestionSet(...questions.sports));
    this.allQuestions.addQuestionCategory("Rock", new CategoryQuestionSet(...questions.rock));

    console.log("Populate 50 questions over [Pop, Science, Sports, Rock] catergory");
  }

  private createRockQuestion(index: number): string {
    return "Rock Question " + index;
  }

  public add(name: string) {
    this.players.push(new Player(name));
    this.places[this.howManyPlayers() - 1] = new Board();
    console.log(`Add player ${name} at place ${this.howManyPlayers() - 1}`);
  }

  private howManyPlayers(): number {
    return this.players.length;
  }

  public roll(roll: number) {
    this.players[this.currentPlayer].roll(this.allQuestions, roll);
  }

  private didPlayerWin(): boolean {
    return this.players[this.currentPlayer].hasWon();
  }

  public wrongAnswer(): boolean {
    this.players[this.currentPlayer].giveWrongAnswer();

    this.currentPlayer += 1;
    if (this.currentPlayer == this.players.length) this.currentPlayer = 0;

    console.log(`Player ${this.players[this.currentPlayer].name} turn`);
    return false;
  }

  public wasCorrectlyAnswered(): boolean {
    this.players[this.currentPlayer].giveCorrectAnswer();

    this.currentPlayer += 1;
    if (this.currentPlayer == this.players.length) this.currentPlayer = 0;

    console.log(`Player ${this.players[this.currentPlayer].name} turn`);

    return this.players[this.currentPlayer].hasWon();
  }
}
