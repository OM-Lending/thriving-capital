import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";

export function LearnMoreButton({ targetPage }) {
  const navigate = useNavigate();

  const handleClick = () => {
    // Use the targetPage prop to navigate to the specified page
    if (targetPage) {
      navigate(targetPage);
    }
  };

  return (
    <motion.div
      animate={{ x: 0 }}
      whileHover={{ scale: 1.1 }}
      transition={{ type: "spring", stiffness: 400, damping: 10 }}
    >
      <button
        onClick={handleClick}
        style={{
          background: "transparent",
          color: "#f59e0b",
          border: "1px solid #64748b",
          padding: "12px 28px",
          fontSize: "15px",
          fontWeight: "600",
          borderRadius: "0",
          boxShadow: "none",
          transition: "all 0.3s ease",
          outline: "none",
          cursor: "pointer",
          textTransform: "uppercase",
          letterSpacing: "0.5px",
        }}
        onMouseEnter={(e) => {
          e.currentTarget.style.borderColor = "#f59e0b";
          e.currentTarget.style.transform = "translateY(-2px)";
        }}
        onMouseLeave={(e) => {
          e.currentTarget.style.borderColor = "#64748b";
          e.currentTarget.style.transform = "translateY(0)";
        }}
      >
        Learn More
      </button>
    </motion.div>
  );
}
