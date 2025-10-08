import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";

export function ContactUsButton() {
    const navigate = useNavigate();

    const handleClick = () => {
        navigate("/contact");
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
                  background: "linear-gradient(135deg,rgb(46, 185, 113),rgb(11, 108, 26))", // Gradient background
                  color: "white",
                  border: "none",
                  padding: "12px 24px",
                  fontSize: "16px",
                  borderRadius: "25px", // Rounded corners
                  boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
                  transition: "all 0.3s ease",
                  outline: "none",
                  cursor: "pointer",
                }}
            >
                Contact Us
            </button>
        </motion.div>
    );
}