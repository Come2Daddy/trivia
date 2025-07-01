class Player {
  private points: number = 0;

  constructor(private playerName: string) {}

  addPoint(): void {
    this.points += 1;
  }

  hasWon(): boolean {
    return this.points === 6;
  }

  /**
   * @deprecated
   */
  get name(): string {
    return this.playerName;
  }
}

export default Player;
