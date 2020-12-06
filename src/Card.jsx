export function createCards() {
  return [
    {
      id: 1,
      number: 1,
      flipped: false,
      finished: false,
    },
    {
      id: 2,
      number: 1,
      flipped: false,
      finished: false,
    },
    {
      id: 3,
      number: 2,
      flipped: false,
      finished: false,
    },
    {
      id: 4,
      number: 2,
      flipped: false,
      finished: false,
    },
    {
      id: 5,
      number: 3,
      flipped: false,
      finished: false,
    },
    {
      id: 6,
      number: 3,
      flipped: false,
      finished: false,
    },
  ];
}

export function FisherYatesShuffle(arr) {
  let clone = [...arr];
  for (let i = clone.length - 1; i >= 0; i--) {
    let randomIndex = Math.floor(Math.random() * Math.floor(i));
    let temp = clone[i];
    clone[i] = clone[randomIndex];
    clone[randomIndex] = temp;
  }
  return clone;
}

export default function Card({ id, number, flipped, onClick }) {
  return (
    <div className={'flip-card'}>
      <div
        className={'flip-card-inner' + (flipped ? ' flip-card-flipped' : '')}
        onClick={() => {
          onClick({ id, number, flipped });
        }}
      >
        <div className={'flip-card-front'} />
        <div className={'flip-card-back'}>{number}</div>
      </div>
    </div>
  );
}
