const NumberButton = ({
  value,
  onClick,
}: {
  value: number;
  onClick: () => void;
}) => {
  return <button onClick={onClick}>{value}</button>;
};

export default NumberButton;
