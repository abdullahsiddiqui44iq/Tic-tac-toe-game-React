export default function Log({ turns }) {
  return (
    <ol id="log">
        {turns.map((turn) => (
            <li>
                {turn.player} played at row {turn.square.row}, column {turn.square.col}
            </li>
        ))}
    </ol>
  );
}
