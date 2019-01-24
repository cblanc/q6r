import { assert } from "chai";
import { Game } from "../lib/index";

describe("Game", () => {
  it ("instantiates correctly", () => {
    const config = {
      rows: 9,
      columns: 9,
    };
    const g = new Game(config);
    assert.equal(g.maxX, config.columns);
    assert.equal(g.maxY, config.rows);
  });
  it ("instantiates with right defaults", () => {
    const g = new Game();
    assert.equal(g.maxX, 9);
    assert.equal(g.maxY, 9);
  });
});
