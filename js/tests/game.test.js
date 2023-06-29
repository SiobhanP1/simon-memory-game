const { TestScheduler } = require("jest");
const { hasUncaughtExceptionCaptureCallback } = require("process");

const { game, newGame } = require("../game");

beforeAll(()=> {
    let fs = require("fs");
    let fileContents = fs.readFileSync("index.html", "utf-8");
    document.open();
    document.write(fileContents);
    document.close();
})

describe("game object contains", ()=> {
    test("score key exists", ()=> {
        expect("score" in game).toBe(true);
    });
    test("currentGame key exists", ()=> {
        expect("currentGame" in game).toBe(true);
    });
    test("playerMoves key exists", ()=> {
        expect("playerMoves" in game).toBe(true);
    });
    test("choices key exists", ()=> {
        expect("choices" in game).toBe(true);
    });
    test("choices array contains all four button ids", ()=> {
        expect(game.choices).toEqual(["button1", "button2", "button3", "button4"]);
    })
})

describe("newGame works correctly", ()=> {
    beforeAll(()=> {
        game.score = 42;
        newGame();
    });
    test("Should set game score to zero", ()=> {
        expect(game.score).toEqual(0);
    });
    test("Should set currentGame to zero", ()=> {
        expect(game.currentGame).toEqual(0);
    });
    test("Should set playerMoves to zero", ()=> {
        expect(game.playerMoves).toEqual(0);
    });
});