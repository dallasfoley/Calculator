const OperationButton = ({
  operation,
  onClick,
}: {
  operation:
    | "+"
    | "-"
    | "*"
    | "/"
    | "="
    | "e"
    | "sqrt"
    | "log_10"
    | "ln"
    | React.ReactNode;
  onClick: () => void;
}) => {
  return operation !== "=" ? (
    <button onClick={onClick}>{operation}</button>
  ) : (
    <button
      style={{ backgroundColor: "#f4f4f4", color: "#333" }}
      onClick={onClick}
    >
      {operation}
    </button>
  );
};

export default OperationButton;
