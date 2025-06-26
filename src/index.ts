import CategoryQuestionSet from "./categoryQuestionSet";

export class Game {
  private players: Array<string> = [];
  private places: Array<number> = [];
  private purses: Array<number> = [];
  private inPenaltyBox: Array<boolean> = [];
  private currentPlayer: number = 0;
  private isGettingOutOfPenaltyBox: boolean = false;

  private popQuestions: CategoryQuestionSet;
  private scienceQuestions: CategoryQuestionSet;
  private sportsQuestions: CategoryQuestionSet;
  private rockQuestions: CategoryQuestionSet;

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

    this.popQuestions = new CategoryQuestionSet(...questions.pop);
    this.scienceQuestions = new CategoryQuestionSet(...questions.science);
    this.sportsQuestions = new CategoryQuestionSet(...questions.sports);
    this.rockQuestions = new CategoryQuestionSet(...questions.rock);

    console.log("Populate 50 questions over [Pop, Science, Sports, Rock] catergory");
  }

  private createRockQuestion(index: number): string {
    return "Rock Question " + index;
  }

  public add(name: string) {
    this.players.push(name);
    this.places[this.howManyPlayers() - 1] = 0;
    this.purses[this.howManyPlayers() - 1] = 0;
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

        console.log(`Player ${this.players[this.currentPlayer]} is getting out of penalty box`);

        this.places[this.currentPlayer] = this.places[this.currentPlayer] + roll;
        if (this.places[this.currentPlayer] > 11) {
          this.places[this.currentPlayer] = this.places[this.currentPlayer] - 12;

          console.log(`Player ${this.players[this.currentPlayer]} has completed a turn out of penalty box`);
        }

        console.log(`Player ${this.players[this.currentPlayer]} is moved to ${this.places[this.currentPlayer]}`);

        this.askQuestion();
      } else {
        this.isGettingOutOfPenaltyBox = false;
        console.log(`Player ${this.players[this.currentPlayer]} is not getting out of penalty box`);
        console.log(`Player ${this.players[this.currentPlayer]} is not moving (${this.places[this.currentPlayer]})`);
      }
    } else {
      this.places[this.currentPlayer] = this.places[this.currentPlayer] + roll;
      if (this.places[this.currentPlayer] > 11) {
        this.places[this.currentPlayer] = this.places[this.currentPlayer] - 12;

        console.log(`Player ${this.players[this.currentPlayer]} has completed a turn`);
      }

      console.log(`Player ${this.players[this.currentPlayer]} is moved to ${this.places[this.currentPlayer]}`);

      this.askQuestion();
    }
  }

  private askQuestion(): void {
    if (this.currentCategory() == "Pop") console.log(this.popQuestions.ask());
    if (this.currentCategory() == "Science") console.log(this.scienceQuestions.ask());
    if (this.currentCategory() == "Sports") console.log(this.sportsQuestions.ask());
    if (this.currentCategory() == "Rock") console.log(this.rockQuestions.ask());
  }

  private currentCategory(): string {
    if (this.places[this.currentPlayer] == 0) return "Pop";
    if (this.places[this.currentPlayer] == 4) return "Pop";
    if (this.places[this.currentPlayer] == 8) return "Pop";
    if (this.places[this.currentPlayer] == 1) return "Science";
    if (this.places[this.currentPlayer] == 5) return "Science";
    if (this.places[this.currentPlayer] == 9) return "Science";
    if (this.places[this.currentPlayer] == 2) return "Sports";
    if (this.places[this.currentPlayer] == 6) return "Sports";
    if (this.places[this.currentPlayer] == 10) return "Sports";
    return "Rock";
  }

  private didPlayerWin(): boolean {
    return this.purses[this.currentPlayer] == 6;
  }

  public wrongAnswer(): boolean {
    this.inPenaltyBox[this.currentPlayer] = true;

    console.log(`Player ${this.players[this.currentPlayer]} has given a wrong answer and is getting into penalty box`);

    this.currentPlayer += 1;
    if (this.currentPlayer == this.players.length) this.currentPlayer = 0;

    console.log(`Player ${this.players[this.currentPlayer]} turn`);
    return false;
  }

  public wasCorrectlyAnswered(): boolean {
    if (this.inPenaltyBox[this.currentPlayer]) {
      if (this.isGettingOutOfPenaltyBox) {
        this.inPenaltyBox[this.currentPlayer] = false;

        console.log(
          `Player ${this.players[this.currentPlayer]} has given a correct answer and is getting out of penalty box`
        );

        this.purses[this.currentPlayer] += 1;

        console.log(`Player ${this.players[this.currentPlayer]} has gained a point`);

        var winner = this.didPlayerWin();

        if (winner) console.log(`Player ${this.players[this.currentPlayer]} has won`);

        this.currentPlayer += 1;
        if (this.currentPlayer == this.players.length) this.currentPlayer = 0;

        console.log(`Player ${this.players[this.currentPlayer]} turn`);

        return winner;
      } else {
        this.currentPlayer += 1;
        if (this.currentPlayer == this.players.length) this.currentPlayer = 0;
        console.log(`Player ${this.players[this.currentPlayer]} turn`);
        return false;
      }
    } else {
      this.purses[this.currentPlayer] += 1;

      console.log(`Player ${this.players[this.currentPlayer]} has gained a point`);

      var winner = this.didPlayerWin();

      if (winner) console.log(`Player ${this.players[this.currentPlayer]} has won`);

      this.currentPlayer += 1;
      if (this.currentPlayer == this.players.length) this.currentPlayer = 0;

      console.log(`Player ${this.players[this.currentPlayer]} turn`);

      return winner;
    }
  }
}
