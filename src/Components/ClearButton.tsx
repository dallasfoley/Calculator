const ClearButton = ({ onClick }: { onClick: () => void }) => {
  return (
    <button
      style={{ backgroundColor: "#f4f4f4", color: "#333" }}
      onClick={onClick}
    >
      AC
    </button>
  );
};

export default ClearButton;
