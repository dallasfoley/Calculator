const OperationButton = ({
  operation,
  onClick,
}: {
  operation: "+" | "-" | "*" | "/" | "=" | "exp" | "sqrt" | "log_10" | "ln";
  onClick: () => void;
}) => {
  return <button onClick={onClick}>{operation}</button>;
};

export default OperationButton;
