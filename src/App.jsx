import Palace from "./components/Palace";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Sparkles,
  Moon,
  ArrowRight,
  Flame,
  Heart,
  Stars
} from "lucide-react";
import "./App.css";

function App() {
  const [entered, setEntered] = useState(false);
  const [showExperience, setShowExperience] = useState(false);
  const [litDiyas, setLitDiyas] = useState([]);

  useEffect(() => {
    if (entered) {
      const timer = setTimeout(() => {
        setShowExperience(true);
      }, 2500);

      return () => clearTimeout(timer);
    }
  }, [entered]);

  const diyas = [
    { id: 1, name: "Hope", message: "May your dreams find their light." },
    { id: 2, name: "Love", message: "May your home always be filled with love." },
    { id: 3, name: "Peace", message: "May peace find its way into your heart." },
    { id: 4, name: "Joy", message: "May every day bring a reason to smile." },
    { id: 5, name: "Dreams", message: "May your wishes turn into beautiful realities." },
    { id: 6, name: "Gratitude", message: "Be thankful for every little blessing." }
  ];

  const lightDiya = (id) => {
    setLitDiyas((previous) =>
      previous.includes(id)
        ? previous.filter((item) => item !== id)
        : [...previous, id]
    );
  };

  if (showExperience) {
    return (
      <motion.div
       className="diwali-container experience-screen"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1.2 }}
        style={{
          minHeight: "100vh",
          padding: "60px 20px",
          textAlign: "center"
        }}
      >
        <div className="stars"></div>
        <div className="moon"></div>

        <div style={{ position: "relative", zIndex: 2 }}>
          <p className="eyebrow">✦ A NIGHT OF A THOUSAND WISHES ✦</p>

          <h1 style={{ fontSize: "clamp(38px, 6vw, 68px)" }}>
            Light Your <span>Little World.</span>
          </h1>

          <p className="entrance-description">
            Every diya carries a wish.
            <br />
            Choose yours and bring the night to life.
          </p>

          <div
            style={{
              display: "grid",
            gridTemplateColumns: "repeat(3, minmax(0, 1fr))",
gap: "25px",
maxWidth: "760px",
margin: "55px auto"
            }}
          >
            {diyas.map((diya) => {
              const isLit = litDiyas.includes(diya.id);

              return (
                <motion.button
                  key={diya.id}
                  onClick={() => lightDiya(diya.id)}
                  whileHover={{ y: -8, scale: 1.04 }}
                  whileTap={{ scale: 0.94 }}
                  style={{
                    minHeight: "190px",
                    padding: "25px 12px",
                    border: "1px solid rgba(231,185,104,0.5)",
                    borderRadius: "18px",
                    background: isLit
                      ? "rgba(201,145,66,0.2)"
                      : "rgba(255,255,255,0.035)",
                    color: "#fff0ce",
                    cursor: "pointer",
                    boxShadow: isLit
                      ? "0 0 35px rgba(255,190,85,0.3)"
                      : "none"
                  }}
                >
                  <Flame
                    size={38}
                    color={isLit ? "#ffbd59" : "#a68a65"}
                    fill={isLit ? "#ffbd59" : "none"}
                    style={{
                      filter: isLit
                        ? "drop-shadow(0 0 14px #ffad35)"
                        : "none"
                    }}
                  />

                  <h2 style={{ marginTop: "15px" }}>{diya.name}</h2>

                  <p style={{ fontSize: "13px", lineHeight: 1.6 }}>
                    {isLit ? diya.message : "Tap to light this diya"}
                  </p>
                </motion.button>
              );
            })}
          </div>

          <p className="entrance-description">
            {litDiyas.length} of 6 diyas illuminated
          </p>

          {litDiyas.length === 6 && (
            <motion.div
              initial={{ opacity: 0, scale: 0.7 }}
              animate={{ opacity: 1, scale: 1 }}
              style={{
                maxWidth: "550px",
                margin: "35px auto",
                padding: "30px",
                border: "1px solid #d9ad65",
                borderRadius: "18px",
                background: "rgba(201,145,66,0.12)"
              }}
            >
              <Stars size={35} color="#ffcf79" />
              <h2 style={{ color: "#ffcf79" }}>
                You Created Your Own Universe of Light!
              </h2>
              <p>
                May these six lights bring six beautiful blessings
                into your life. Happy Diwali!
              </p>
             <motion.div
  className="final-heart"
  animate={{ scale: [1, 1.2, 1] }}
  transition={{
    duration: 1.5,
    repeat: Infinity,
    ease: "easeInOut"
  }}
>
  <Heart size={30} color="#ffbd80" strokeWidth={1.8} />
</motion.div>
            </motion.div>
          )}

          <button
            className="enter-button"
            style={{ marginTop: "25px" }}
            onClick={() => {
              setLitDiyas([]);
              setShowExperience(false);
              setEntered(false);
            }}
          >
            RETURN TO THE BEGINNING
          </button>
        </div>
      </motion.div>
    );
  }

  return (
    <div className="diwali-container">
      <div className="stars"></div>
      <div className="moon"></div>

      <Palace />

      <nav className="navbar">
        <h2>✦ DIWALI AFTER DARK</h2>
        <span>AN EXPERIENCE OF LIGHT</span>
      </nav>

      <main className="entrance">
        <motion.div
          className="entrance-content"
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.5 }}
        >
          <motion.div
            className="golden-symbol"
            animate={{ rotate: 360 }}
            transition={{
              duration: 30,
              repeat: Infinity,
              ease: "linear"
            }}
          >
            ✧
          </motion.div>

          <p className="eyebrow">✦ THE NIGHT IS YOURS ✦</p>

          <h1>
            A Thousand Lights.
            <br />
            <span>One Magical Night.</span>
          </h1>

          <p className="entrance-description">
            Beyond the ordinary celebrations lies a world
            <br />
            where every little flame holds a beautiful story.
          </p>

          <motion.button
            className="enter-button"
            onClick={() => setEntered(true)}
            whileHover={{ scale: 1.06 }}
            whileTap={{ scale: 0.95 }}
          >
            ENTER THE EXPERIENCE
            <ArrowRight size={18} />
          </motion.button>

          <p className="scroll-note">
            
          </p>
        </motion.div>
      </main>

      <AnimatePresence>
        {entered && !showExperience && (
          <motion.div
            className="welcome-overlay"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <motion.div
              initial={{ scale: 0.7, y: 30 }}
              animate={{ scale: 1, y: 0 }}
              className="welcome-message"
            >
              <Sparkles size={35} />
              <h2>The magic begins...</h2>
              <p>
                Your journey into the night of lights
                is about to unfold.
              </p>
              <Moon size={28} />
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      <footer className="entrance-footer">
        MADE OF LIGHT · ROOTED IN TRADITION · FILLED WITH MAGIC
      </footer>
    </div>
  );
}

export default App;