import React, { useState, useEffect } from "react";
import { Deck } from "cards";
import TarotCard from "./tarot_card";

const Tarot = () => {
  const [deck] = useState(
    new Deck([
      {
        rank: "Death",
        domt_title: "Skull:",
        domt_text:
          "You summon an avatar of death--a ghostly humanoid skeleton clad in a tattered black robe and carrying a spectral scythe. It appears in a space of the GM's choice within 10 feet of you and attacks you, warning all others that you must win the battle alone. The avatar fights until you die or it drops to 0 hit points, whereupon it disappears. If anyone tries to help you, the helper summons its own avatar of death. A creature slain by an avatar of death can't be restored to life.",
      },
      {
        rank: "Judgement",
        domt_title: "Rogue:",
        domt_text:
          "A nonplayer character of the GM's choice becomes hostile toward you. The identity of your new enemy isn't known until the NPC or someone else reveals it. Nothing less than a wish spell or divine intervention can end the NPC's hostility toward you.",
      },
      {
        rank: "Justice",
        domt_title: "Balance:",
        domt_text:
          "Your mind suffers a wrenching alteration, causing your alignment to change. Lawful becomes chaotic, good becomes evil, and vice versa. If you are true neutral or unaligned, this card has no effect on you.",
      },
      {
        rank: "Strength",
        domt_title: "Knight:",
        domt_text:
          "You gain the service of a 4th-level fighter who appears in a space you choose within 30 feet of you. The fighter is of the same race as you and serves you loyally until death, believing the fates have drawn him or her to you. You control this character.",
      },
      {
        rank: "Temperance",
        domt_title: "Ruin:",
        domt_text:
          "All forms of wealth that you carry or own, other than magic items, are lost to you. Portable property vanishes. Businesses, buildings, and land you own are lost in a way that alters reality the least. Any documentation that proves you should own something lost to this card also disappears.",
      },
      {
        rank: "The Chariot",
        domt_title: "Comet:",
        domt_text:
          "If you single-handedly defeat the next hostile monster or group of monsters you encounter, you gain experience points enough to gain one level. Otherwise, this card has no effect.",
      },
      {
        rank: "The Devil",
        domt_title: "Flames:",
        domt_text:
          "A powerful devil becomes your enemy. The devil seeks your ruin and plagues your life, savoring your suffering before attempting to slay you. This enmity lasts until either you or the devil dies.",
      },
      {
        rank: "The Emperor",
        domt_title: "Throne:",
        domt_text:
          "You gain proficiency in the Persuasion skill, and you double your Proficiency Bonus on checks made with that skill. In addition, you gain rightful ownership of a small keep somewhere in the world. However, the keep is currently in the hands of Monsters, which you must clear out before you can claim the keep as. yours.",
      },
      {
        rank: "The Empress",
        domt_title: "Gem:",
        domt_text:
          "Twenty-five pieces of jewelry worth 2,000 gp each or fifty gems worth 1,000 gp each appear at your feet.",
      },
      {
        rank: "The Fool",
        domt_title: "Fool:",
        domt_text:
          "You lose 10,000 XP, discard this card, and draw from the deck again, counting both draws as one of your declared draws. If losing that much XP would cause you to lose a level, you instead lose an amount that leaves you with just enough XP to keep your level.",
      },
      {
        rank: "The Hanged Man",
        domt_title: "Donjon:",
        domt_text:
          "You disappear and become entombed in a state of suspended animation in an extradimensional sphere. Everything you were wearing and carrying stays behind in the space you occupied when you disappeared. You remain imprisoned until you are found and removed from the sphere. You can't be located by any divination magic, but a wish spell can reveal the location of your prison. You draw no more cards.",
      },
      {
        rank: "The Hermit",
        domt_title: "Idiot:",
        domt_text:
          "Permanently reduce your Intelligence by 1d4 + 1 (to a minimum score of 1). You can draw one additional card beyond your declared draws.",
      },
      {
        rank: "The Hierophant",
        domt_title: "Vizier:",
        domt_text:
          "At any time you choose within one year of drawing this card, you can ask a question in meditation and mentally receive a truthful answer to that question. Besides information, the answer helps you solve a puzzling problem or other dilemma. In other words, the knowledge comes with Wisdom on how to apply it.",
      },
      {
        rank: "The High Priestess",
        domt_title: "Euryale:",
        domt_text:
          "The card's medusa-like visage curses you. You take a −2 penalty on saving throws while cursed in this way. Only a god or the magic of The Fates card can end this curse.",
      },
      {
        rank: "The Lovers",
        domt_title: "Key:",
        domt_text:
          "A rare or rarer magic weapon with which you are proficient appears in your hands. The GM chooses the weapon.",
      },
      {
        rank: "The Magician",
        domt_title: "The Fates:",
        domt_text:
          "Reality's fabric unravels and spins anew, allowing you to avoid or erase one event as if it never happened. You can use the card's magic as soon as you draw the card or at any other time before you die.",
      },
      {
        rank: "The Moon",
        domt_title: "Moon:",
        domt_text:
          "You are granted the ability to cast the wish spell 1d3 times.",
      },
      {
        rank: "The Star",
        domt_title: "Star:",
        domt_text:
          "Increase one of your Ability Scores by 2. The score can exceed 20 but can't exceed 24.",
      },
      {
        rank: "The Sun",
        domt_title: "Sun:",
        domt_text:
          "You gain 50,000 XP, and a wondrous item (which the DM determines randomly) appears in your hands.",
      },
      {
        rank: "The Tower",
        domt_title: "The Void:",
        domt_text:
          "This black card Spells Disaster. Your soul is drawn from your body and contained in an object in a place of the DM's choice. One or more powerful beings guard the place. While your soul is trapped in this way, your body is Incapacitated. A wish spell can't restore your soul, but the spell reveals the location of the object that holds it. You draw no more cards.",
      },
      {
        rank: "The World",
        domt_title: "Talons:",
        domt_text:
          "Every magic item you wear or carry disintegrates. Artifacts in your possession aren't destroyed but do Vanish.",
      },
      {
        rank: "Wheel of Fortune",
        domt_title: "Jester:",
        domt_text:
          "You gain 10,000 XP, or you can draw two additional cards beyond your declared draws.",
      },
    ])
  );
  const [deck_size, setDeck_size] = useState(deck.remainingLength);
  const [current_cards, setCurrent_cards] = useState([
    { rank: "Card Back", domt_title: "", domt_text: "" },
  ]);
  const [draw_amount, setDraw_amount] = useState(1);
  const [card_style, setCard_style] = useState("classic");
  const [domt, setDomt] = useState(false);

  const target = React.createRef();
  const wrong_input = React.createRef();

  useEffect(() => {
    deck.shuffleRemaining();
  }, []);

  // Draw cards from deck
  function draw_cards() {
    // Check if deck is empty
    if (deck.remainingLength !== 0) {
      // Check if draw_amount is an allowed number
      if (target.current.value === "" || target.current.value <= 0) {
      } else {
        var newCards = deck.draw(draw_amount);
        setCurrent_cards(newCards);
        setDeck_size(deck.remainingLength);
      }
    }
  }

  // Reset deck
  function reset_deck() {
    deck.shuffleAll();
    setDeck_size(deck.remainingLength);
    setCurrent_cards([{ rank: "Card Back", domt_title: "", domt_text: "" }]);
  }

  // Update Draw Amount
  function updateDrawAmount() {
    if (target.current.value === "" || target.current.value < 0) {
      wrong_input.current.style.display = "block";
    } else {
      wrong_input.current.style.display = "none";
      setDraw_amount(parseInt(target.current.value));
    }
  }

  // Update Card art
  function updateCardStyle() {
    setCard_style(document.querySelector("#card_art").value);
  }

  // Display / hide Deck of Many Things text
  function updateDomt() {
    setDomt(document.querySelector("#domt").checked);
  }

  // Loads cards
  function LoadCards() {
    if (domt === true) {
      return current_cards.map((card, i) => (
        <TarotCard
          rank={card.rank}
          style={card_style}
          domt_text={card.domt_text}
          domt_title={card.domt_title}
          key={i}
        />
      ));
    } else {
      return current_cards.map((card, i) => (
        <TarotCard rank={card.rank} style={card_style} key={i} />
      ));
    }
  }

  return (
    <main id="card_draw">
      <aside id="controls">
        <button onClick={draw_cards}>Draw Cards</button>
        <div id="draw_amount_container">
          <label htmlFor="draw_amount">Amount of cards to draw</label>
          <input
            ref={target}
            type="number"
            name="draw_amount"
            id="draw_amount"
            min="1"
            defaultValue="1"
            onChange={updateDrawAmount}
          />
          <p ref={wrong_input} id="wrong_input">
            The amount of cards you want to draw is either not a number or a
            negative number. Please enter a positive number in the input field
            above.
          </p>
        </div>
        <div id="card_art_container">
          <label htmlFor="card_art">Card art style</label>
          <select name="card_art" id="card_art" onChange={updateCardStyle}>
            <option value="classic">Classic</option>
            <option value="ds">Dark Souls</option>
            <option value="fma">Fullmetal Alchemist</option>
          </select>
        </div>
        <div id="showDomt">
          <label htmlFor="domt">Show Deck of Many Things text?</label>
          <input type="checkbox" name="domt" id="domt" onChange={updateDomt} />
        </div>
        <button onClick={reset_deck}>Reset</button>
        <div id="art_credits">
          <p>Art credits</p>
          <p>
            Dark Souls art:{" "}
            <a href="https://www.artstation.com/steftastan">Stef Tastan</a>
          </p>
          <p>
            Fullmetal Alchemist art:{" "}
            <a href="https://twitter.com/emmmerald_">Emmmerald_</a>
          </p>
        </div>
      </aside>

      <div id="card_area_container">
        <p>
          Cards left: <span>{deck_size}</span>/22
        </p>
        <div id="card_area">
          <LoadCards />
        </div>
      </div>
    </main>
  );
};

export default Tarot;
