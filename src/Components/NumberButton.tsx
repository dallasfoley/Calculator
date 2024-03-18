const NumberButton = ({
  value,
  onClick,
}: {
  value: number;
  onClick: () => void;
}) => {
  return (
    <button style={{ backgroundColor: "grey" }} onClick={onClick}>
      {value}
    </button>
  );
};

export default NumberButton;
