import { useNavigate } from "react-router-dom";

export function GetStartedButton() {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate("/financial-advisory");
  };

  return (
    <button
      onClick={handleClick}
      style={{
        background: "#f59e0b",
        color: "#0f172a",
        border: "none",
        padding: "14px 32px",
        fontSize: "16px",
        fontWeight: "600",
        borderRadius: "0",
        boxShadow: "none",
        transition: "all 0.3s ease",
        outline: "none",
        cursor: "pointer",
        textTransform: "uppercase",
        letterSpacing: "1px",
      }}
      onMouseEnter={(e) => {
        e.currentTarget.style.background = "#d97706";
        e.currentTarget.style.transform = "translateY(-2px)";
      }}
      onMouseLeave={(e) => {
        e.currentTarget.style.background = "#f59e0b";
        e.currentTarget.style.transform = "translateY(0)";
      }}
    >
      Get Started
    </button>
  );
}
