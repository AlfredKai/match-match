import React from 'react';

import './App.sass';
import Card, {createCards, FisherYatesShuffle} from './Card';


export default function App() {
  const [cards, setCards] = React.useState(createCards());
  const firstCard = React.useRef(null);
  const secondCard = React.useRef(null);

  const flipCard = (cardId, flipped) => {
    return cards.map((card) => {
      if (card.id === cardId) {
        card.flipped = flipped;
        return card;
      }
      return card;
    });
  };

  const finishCard = (cardId) => {
    return cards.map((card) => {
      if (card.id === cardId) {
        card.finished = true;
        return card;
      }
      return card;
    });
  };

  const check = () => {
    if (firstCard.current.number !== secondCard.current.number) {
      let card1Id = firstCard.current.id;
      let card2Id = secondCard.current.id;
      setTimeout(() => {
        if (!cards.find((card) => card.id === card1Id).finished) {
          setCards(flipCard(card1Id, false));
        }
        if (!cards.find((card) => card.id === card2Id).finished) {
          setCards(flipCard(card2Id, false));
        }
      }, 1000);
    } else {
      finishCard(firstCard.current.id);
      finishCard(secondCard.current.id);
    }
    firstCard.current = null;
    secondCard.current = null;
  };

  const onClick = (clickedCard) => {
    if (cards.find((c) => c.id === clickedCard.id).finished) {
      return;
    }
    if (firstCard.current === null) {
      setCards(flipCard(clickedCard.id, true));
      firstCard.current = clickedCard;
    } else if (
      secondCard.current === null &&
      clickedCard.id !== firstCard.current.id
    ) {
      setCards(flipCard(clickedCard.id, true));
      secondCard.current = clickedCard;
      check();
    }
  };
  const cardsEle = cards.map((card) => (
    <Card
      key={card.id}
      id={card.id}
      number={card.number}
      flipped={card.flipped}
      onClick={onClick}
    />
  ));
  return (
    <>
      <div className={'container'}>{cardsEle}</div>
      <button
        onClick={() => {
          setCards((cards) => FisherYatesShuffle(cards));
        }}
      >
        Shuffle
      </button>
      <button
        onClick={() => {
          setCards(createCards());
        }}
      >
        Reset
      </button>
    </>
  );
}
