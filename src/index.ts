import CategoryQuestionSet from "./categoryQuestionSet";
import AllQuestions, { Category } from "./allQuestions";
import Board from "./board";
import Player from "./player";

export class Game {
  private players: Array<Player> = [];
  private places: Array<Board> = [];
  private inPenaltyBox: Array<boolean> = [];
  private currentPlayer: number = 0;
  private isGettingOutOfPenaltyBox: boolean = false;

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
    //this.purses[this.howManyPlayers() - 1] = 0;
    this.inPenaltyBox[this.howManyPlayers() - 1] = false;
    console.log(`Add player ${name} at place ${this.howManyPlayers() - 1}`);
  }

  private howManyPlayers(): number {
    return this.players.length;
  }

  public roll(roll: number) {
    console.log(`Dice rolled on ${roll}`);
    if (this.inPenaltyBox[this.currentPlayer]) {
      if (roll % 2 != 0) {
        this.isGettingOutOfPenaltyBox = true;

        console.log(`Player ${this.players[this.currentPlayer].name} is getting out of penalty box`);

        this.places[this.currentPlayer].move(roll);

        if (this.places[this.currentPlayer].hasCompletedTurnOnDisplacement)
          console.log(`Player ${this.players[this.currentPlayer].name} has completed a turn out of penalty box`);

        console.log(
          `Player ${this.players[this.currentPlayer].name} is moved to ${this.places[this.currentPlayer].getPosition}`
        );

        this.askQuestion();
      } else {
        this.isGettingOutOfPenaltyBox = false;
        console.log(`Player ${this.players[this.currentPlayer].name} is not getting out of penalty box`);
        console.log(
          `Player ${this.players[this.currentPlayer].name} is not moving (${
            this.places[this.currentPlayer].getPosition
          })`
        );
      }
    } else {
      this.places[this.currentPlayer].move(roll);

      if (this.places[this.currentPlayer].hasCompletedTurnOnDisplacement)
        console.log(`Player ${this.players[this.currentPlayer].name} has completed a turn`);

      console.log(
        `Player ${this.players[this.currentPlayer].name} is moved to ${this.places[this.currentPlayer].getPosition}`
      );

      this.askQuestion();
    }
  }

  private askQuestion(): void {
    console.log(this.allQuestions.ask(Board.getCategory(this.places[this.currentPlayer].getPosition)));
  }

  private didPlayerWin(): boolean {
    return this.players[this.currentPlayer].hasWon();
  }

  public wrongAnswer(): boolean {
    this.inPenaltyBox[this.currentPlayer] = true;

    console.log(
      `Player ${this.players[this.currentPlayer].name} has given a wrong answer and is getting into penalty box`
    );

    this.currentPlayer += 1;
    if (this.currentPlayer == this.players.length) this.currentPlayer = 0;

    console.log(`Player ${this.players[this.currentPlayer].name} turn`);
    return false;
  }

  public wasCorrectlyAnswered(): boolean {
    if (this.inPenaltyBox[this.currentPlayer]) {
      if (this.isGettingOutOfPenaltyBox) {
        this.inPenaltyBox[this.currentPlayer] = false;

        console.log(
          `Player ${this.players[this.currentPlayer].name} has given a correct answer and is getting out of penalty box`
        );

        this.players[this.currentPlayer].addPoint();

        console.log(`Player ${this.players[this.currentPlayer].name} has gained a point`);

        var winner = this.didPlayerWin();

        if (winner) console.log(`Player ${this.players[this.currentPlayer].name} has won`);

        this.currentPlayer += 1;
        if (this.currentPlayer == this.players.length) this.currentPlayer = 0;

        console.log(`Player ${this.players[this.currentPlayer].name} turn`);

        return winner;
      } else {
        this.currentPlayer += 1;
        if (this.currentPlayer == this.players.length) this.currentPlayer = 0;
        console.log(`Player ${this.players[this.currentPlayer].name} turn`);
        return false;
      }
    } else {
      this.players[this.currentPlayer].addPoint();

      console.log(`Player ${this.players[this.currentPlayer].name} has gained a point`);

      var winner = this.didPlayerWin();

      if (winner) console.log(`Player ${this.players[this.currentPlayer].name} has won`);

      this.currentPlayer += 1;
      if (this.currentPlayer == this.players.length) this.currentPlayer = 0;

      console.log(`Player ${this.players[this.currentPlayer].name} turn`);

      return winner;
    }
  }
}
