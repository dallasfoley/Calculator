const OperationButton = ({
  operation,
  onClick,
}: {
  operation: "+" | "-" | "*" | "/" | "=" | "exp" | "sqrt";
  onClick: () => void;
}) => {
  return <button onClick={onClick}>{operation}</button>;
};

export default OperationButton;
