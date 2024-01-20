export default function GameOver({ winner, onDraw }) {
  return (
    <div id="game-over">
      <h2>Game Over</h2>
      {winner && <p> You won! {winner} </p>}
      {!winner && <p>It's a draw</p>}
      <p>
        <button onClick={onDraw}>Play Again</button>
      </p>
    </div>
  );
}
