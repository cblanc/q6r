interface GameConfig {
  rows?: number;
  columns?: number;

}

const DEFAULT_ROWS = 9;
const DEFAULT_COLUMNS = 9;

export class Game {
  public rows: number;
  public columns: number;

  constructor(config: GameConfig = {}) {
    const { rows, columns } = config;
    this.rows = rows || DEFAULT_ROWS;
    this.columns = columns || DEFAULT_COLUMNS;
  }

  get maxX() {
    return this.columns;
  }

  get maxY() {
    return this.rows;
  }
}

