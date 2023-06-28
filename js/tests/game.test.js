const { TestScheduler } = require("jest");
const { hasUncaughtExceptionCaptureCallback } = require("process");

const { game } = require("../game");


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
    })
})