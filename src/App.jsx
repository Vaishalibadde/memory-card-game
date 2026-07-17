import { useEffect, useState } from "react";
import { Card } from "./Components/Card";
import { GameHeader } from "./Components/GameHeader";

const CardValues = [
  { value: "🍎" },
  { value: "🍌" },
  { value: "🍇" },
  { value: "🍊" },
  { value: "🍓" },
  { value: "🥝" },
  { value: "🍑" },
  { value: "🍒" },
  { value: "🍎" },
  { value: "🍌" },
  { value: "🍇" },
  { value: "🍊" },
  { value: "🍓" },
  { value: "🥝" },
  { value: "🍑" },
  { value: "🍒" },
];

function App() {
  const [cards, setCards] = useState([]);
  const [flippedCards, setFlippedCards] = useState([]);
  const [score, setScore] = useState(0);
  const [moves, setMoves] = useState(0);
  const [isChecking, setIsChecking] = useState(false);

  const initializeGame = () => {
    const shuffled = [...CardValues]
      .sort(() => Math.random() - 0.5)
      .map((card, index) => ({
        id: index,
        value: card.value,
        isFlipped: false,
        isMatched: false,
      }));

    setCards(shuffled);
    setFlippedCards([]);
    setScore(0);
    setMoves(0);
    setIsChecking(false);
  };

  useEffect(() => {
    initializeGame();
  }, []);

  const handleCardClick = (card) => {
    // Prevent invalid clicks
    if (isChecking || card.isFlipped || card.isMatched) return;

    // Flip selected card
    const updatedCards = cards.map((c) =>
      c.id === card.id ? { ...c, isFlipped: true } : c
    );

    setCards(updatedCards);

    const newFlipped = [...flippedCards, card.id];
    setFlippedCards(newFlipped);

    // Wait until two cards are flipped
    if (newFlipped.length === 2) {
      setMoves((prev) => prev + 1);
      setIsChecking(true);

      const firstCard = updatedCards.find((c) => c.id === newFlipped[0]);
      const secondCard = updatedCards.find((c) => c.id === newFlipped[1]);

      setTimeout(() => {
        if (firstCard.value === secondCard.value) {
          // Match
          setCards((prev) =>
            prev.map((c) =>
              c.id === firstCard.id || c.id === secondCard.id
                ? { ...c, isMatched: true }
                : c
            )
          );

          setScore((prev) => prev + 1);
        } else {
          // Not Match
          setCards((prev) =>
            prev.map((c) =>
              c.id === firstCard.id || c.id === secondCard.id
                ? { ...c, isFlipped: false }
                : c
            )
          );
        }

        setFlippedCards([]);
        setIsChecking(false);
      }, 1000);
    }
  };

  return (
    <div className="app">
      <GameHeader score={score} moves={moves} />

      <div className="cards-grid">
        {cards.map((card) => (
          <Card
            key={card.id}
            card={card}
            onClick={handleCardClick}
          />
        ))}
      </div>
    </div>
  );
}

export default App;