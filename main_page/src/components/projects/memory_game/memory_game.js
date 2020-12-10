import React, { useEffect } from "react";
const Memory_Game = () => {
  var tileImgs = [
    "Death",
    "Judgement",
    "Justice",
    "Strength",
    "Temperance",
    "The Chariot",
    "The Devil",
    "The Emperor",
    "The Empress",
    "The Fool",
    "The Hanged Man",
    "The Hermit",
    "The Hierophant",
    "The High Priestess",
    "The Lovers",
    "The Magician",
    "The Moon",
    "The Star",
    "The Sun",
    "The Tower",
    "The World",
    "Wheel of Fortune",
  ];
  var tilesFlipped = [];
  var tilesMatch = [];
  var i;

  useEffect(() => {
    document.querySelector("#game_board").addEventListener("click", flipTile);
    document
      .querySelector("#game_end")
      .querySelectorAll("button")[0]
      .addEventListener("click", newGame);
    document.querySelector("#playGame").addEventListener("submit", drawBoard);
  });

  function drawBoard(event) {
    event.preventDefault();
    document.querySelector("#game_intro").classList.add("hidden");
    document.querySelector("#game_board").classList.remove("hidden");

    var gameTiles = document.querySelector("#playGame").level.value;
    var gameTileImgs = tileImgs.slice(0, gameTiles / 2);
    gameTileImgs = gameTileImgs.doubleShuffle();
    var content;
    for (i = 0; i < gameTileImgs.length; i += 1) {
      content = "";
      content += "<section>";
      content += '<div class="front"></div>';
      content +=
        '<div class="back"><img src="/cards/ds/' +
        gameTileImgs[i] +
        '.jpg"></div>';
      content += "</section>";

      document
        .querySelector("#game_board")
        .insertAdjacentHTML("beforeend", content);
    }
  }

  Array.prototype.doubleShuffle = function () {
    var d;
    for (d = 0; d < this.length; d += 2) {
      this.splice(d + 1, 0, this[d]);
    }
    i = this.length;
    var j;
    var temp;
    while (--i > 0) {
      j = Math.floor(Math.random() * (i + 1));
      temp = this[j];
      this[j] = this[i];
      this[i] = temp;
    }
    return this;
  };

  function newGame() {
    document.querySelector("#game_board").innerHTML = "";
    document.querySelector("#game_board").classList.add("hidden");
    document.querySelector("#game_intro").classList.remove("hidden");
    document.querySelector("#game_end").classList.remove("show");
  }

  function endOfGame() {
    if (
      document.querySelector("#game_board").getElementsByTagName("section")
        .length ===
      document.querySelector("#game_board").getElementsByClassName("reward")
        .length
    ) {
      document.querySelector("#game_end").classList.add("show");
    }
  }

  function flipBack() {
    var tiles = document
      .querySelector("#game_board")
      .querySelectorAll("section");
    tiles[tilesFlipped[0]].classList.remove("flipped");
    tiles[tilesFlipped[1]].classList.remove("flipped");
    tilesFlipped = [];
    tilesMatch = [];
    document.querySelector("#game_board").style.pointerEvents = "auto";
  }

  function twoTiles(tiles) {
    if (tilesFlipped.length >= 2) {
      document.querySelector("#game_board").style.pointerEvents = "none";
      if (tilesMatch[0] === tilesMatch[1]) {
        tiles[tilesFlipped[0]].classList.add("reward");
        tiles[tilesFlipped[1]].classList.add("reward");
        tilesFlipped = [];
        tilesMatch = [];
        setTimeout(endOfGame, 500);
        document.querySelector("#game_board").style.pointerEvents = "auto";
      } else {
        setTimeout(flipBack, 700);
      }
    }
  }

  function flipTile(event) {
    var tiles = Array.from(document.querySelectorAll("section"));
    if (event.target !== event.currentTarget) {
      if (event.target.nodeName !== "IMG") {
        event.target.parentNode.classList.add("flipped");
        tilesFlipped.push(tiles.indexOf(event.target.parentNode));
        tilesMatch.push(event.target.nextElementSibling.innerHTML);
        twoTiles(tiles);
      }
    }
  }

  return (
    <main id="memory_game">
      <div id="game_intro">
        <h1>Huske Spil V1</h1>
        <p>Vælg antallet af brikker i spillet</p>
        <form id="playGame">
          <div>
            <input
              type="radio"
              name="level"
              id="eight"
              value="8"
              defaultChecked
            />
            <label htmlFor="eight">8</label>
            <input type="radio" name="level" value="14" id="fourteen" />
            <label htmlFor="fourteen">14</label>
            <input type="radio" name="level" value="20" id="twenty" />
            <label htmlFor="twenty">20</label>
            <input type="radio" name="level" value="32" id="thirtytwo" />
            <label htmlFor="thirtytwo">32</label>
            <input type="radio" name="level" value="44" id="fortyfour" />
            <label htmlFor="fortyfour">44</label>
          </div>

          <button type="submit">Spil</button>
        </form>
      </div>
      <div id="game_end">
        <p>Du vandt</p>
        <button>Tilbage til brik menuen</button>
      </div>
      <div id="game_board" className="hidden"></div>
    </main>
  );
};
export default Memory_Game;
