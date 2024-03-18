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
  return <button onClick={onClick}>{operation}</button>;
};

export default OperationButton;
