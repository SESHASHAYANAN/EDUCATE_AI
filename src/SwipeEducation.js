import React, { useState, useEffect } from "react";

const physicsQuestions = [
  {
    question: "What is Newton's First Law of Motion? 🏃‍♂️",
    answer:
      "An object remains at rest or in motion unless acted upon by an external force 🔄",
    options: [
      "An object remains at rest or in motion unless acted upon by an external force 🔄",
      "Force equals mass times acceleration 💥",
      "For every action there is an equal and opposite reaction ↔️",
      "Energy cannot be created or destroyed 🌍",
    ],
    emoji: "🔄",
  },
  {
    question: "What is the SI unit of force? 💪",
    answer: "Newton ⚡",
    options: ["Newton ⚡", "Joule 💡", "Pascal 🔧", "Watt 🔋"],
    emoji: "⚡",
  },
  {
    question: "What is the speed of light in vacuum? ⚡",
    answer: "3 x 10^8 m/s 🌟",
    options: [
      "3 x 10^8 m/s 🌟",
      "2 x 10^8 m/s ⚡",
      "3 x 10^7 m/s 💫",
      "3 x 10^9 m/s 🚀",
    ],
    emoji: "🌟",
  },
  {
    question: "What is the formula for kinetic energy? 🏃‍♀️",
    answer: "1/2 × m × v² 💫",
    options: ["1/2 × m × v² 💫", "m × g × h 🏔️", "F × d 🔨", "m × a 🛠️"],
    emoji: "💫",
  },
  {
    question: "What is the unit of electrical resistance? ⚡",
    answer: "Ohm ⚡",
    options: ["Ohm ⚡", "Ampere 🔋", "Volt ⚡", "Watt 💡"],
    emoji: "⚡",
  },
];

const PhysicsCardGame = () => {
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [player1Score, setPlayer1Score] = useState(0);
  const [player2Score, setPlayer2Score] = useState(0);
  const [player1Answer, setPlayer1Answer] = useState(null);
  const [player2Answer, setPlayer2Answer] = useState(null);
  const [gameStarted, setGameStarted] = useState(false);
  const [gameFinished, setGameFinished] = useState(false);
  const [showAnswer, setShowAnswer] = useState(false);

  const styles = {
    body: {
      margin: 0,
      fontFamily: "Arial, sans-serif",
      backgroundColor: "#f4f4f4",
    },
    sidebar1: {
      position: "fixed",
      width: "200px",
      height: "100%",
      gap: "5px",
      fontFamily: "cursive",
      backgroundColor: "#333",
      display: "flex",
      flexDirection: "column",
      paddingTop: "15px",
      paddingBottom: "20px",
      color: "#f4f4f4",
      textAlign: "center",
      margin: 0,
      padding: 0,
      left: 0,
      top: 0,
    },
    Head: {
      fontSize: "20px",
      marginTop: "30px",
      fontFamily: "cursive",
    },
    sidebarItem: {
      width: "100%",
      display: "flex",
      justifyContent: "center",
      marginBottom: "5px",
      alignItems: "center",
    },
    sidebarBox: {
      backgroundColor: "#444",
      color: "#fff",
      padding: "20px 10px",
      width: "70%",
      textAlign: "center",
      borderRadius: "5px",
      cursor: "pointer",
      transition: "background-color 0.3s",
      margin: 0,
    },
    heading: {
      padding: "20px",
      fontWeight: 900,
      fontSize: "400%",
      fontFamily:
        "'Trebuchet MS', 'Lucida Sans Unicode', 'Lucida Grande', 'Lucida Sans', Arial, sans-serif",
      alignItems: "center",
      alignContent: "center",
      textAlign: "center",
    },
    gameContainer: {
      marginLeft: "260px",
      padding: "20px",
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      minHeight: "100vh",
      background: "linear-gradient(135deg, #f5f7fa 0%, #c3cfe2 100%)",
    },
    card: {
      width: "400px",
      minHeight: "400px",
      backgroundColor: "#fff",
      borderRadius: "20px",
      boxShadow: "0 8px 16px rgba(0,0,0,0.1)",
      display: "flex",
      flexDirection: "column",
      justifyContent: "center",
      alignItems: "center",
      padding: "30px",
      margin: "20px",
      position: "relative",
      background: "linear-gradient(to bottom, #ffffff 0%, #f8f9fa 100%)",
    },
    questionEmoji: {
      fontSize: "64px",
      marginBottom: "20px",
    },
    questionText: {
      fontSize: "24px",
      textAlign: "center",
      marginBottom: "30px",
      color: "#2c3e50",
      fontWeight: "bold",
    },
    option: {
      width: "100%",
      padding: "15px",
      margin: "8px 0",
      backgroundColor: "#f8f9fa",
      borderRadius: "10px",
      cursor: "pointer",
      transition: "all 0.3s ease",
      border: "2px solid transparent",
      "&:hover": {
        transform: "translateY(-2px)",
        boxShadow: "0 4px 8px rgba(0,0,0,0.1)",
      },
    },
    selectedOption: {
      backgroundColor: "#4CAF50",
      color: "white",
      transform: "translateY(-2px)",
      boxShadow: "0 4px 8px rgba(0,0,0,0.1)",
    },
    correctOption: {
      backgroundColor: "#28a745",
      color: "white",
    },
    incorrectOption: {
      backgroundColor: "#dc3545",
      color: "white",
    },
    scoreBoard: {
      display: "flex",
      justifyContent: "space-around",
      width: "100%",
      maxWidth: "600px",
      margin: "20px 0",
      padding: "20px",
      backgroundColor: "rgba(255,255,255,0.9)",
      borderRadius: "15px",
      boxShadow: "0 4px 8px rgba(0,0,0,0.1)",
    },
    playerScore: {
      textAlign: "center",
      padding: "10px 20px",
      borderRadius: "10px",
      background: "linear-gradient(45deg, #2196F3, #21CBF3)",
      color: "white",
    },
    finalScore: {
      textAlign: "center",
      padding: "30px",
      backgroundColor: "white",
      borderRadius: "20px",
      boxShadow: "0 8px 16px rgba(0,0,0,0.1)",
      margin: "20px 0",
    },
    trophy: {
      fontSize: "72px",
      margin: "20px 0",
    },
    nextButton: {
      padding: "12px 24px",
      backgroundColor: "#4CAF50",
      color: "white",
      border: "none",
      borderRadius: "30px",
      fontSize: "18px",
      cursor: "pointer",
      transition: "all 0.3s ease",
      marginTop: "20px",
      "&:hover": {
        backgroundColor: "#45a049",
        transform: "translateY(-2px)",
      },
    },
  };

  const initializeGame = () => {
    setCurrentQuestionIndex(0);
    setPlayer1Score(0);
    setPlayer2Score(0);
    setPlayer1Answer(null);
    setPlayer2Answer(null);
    setGameStarted(true);
    setGameFinished(false);
    setShowAnswer(false);
  };

  const handleAnswerSelect = (answer, player) => {
    if (showAnswer) return;
    if (player === 1 && !player1Answer) {
      setPlayer1Answer(answer);
    } else if (player === 2 && !player2Answer) {
      setPlayer2Answer(answer);
    }
  };

  useEffect(() => {
    if (player1Answer && player2Answer && !showAnswer) {
      setShowAnswer(true);
      const currentQuestion = physicsQuestions[currentQuestionIndex];
      if (player1Answer === currentQuestion.answer) {
        setPlayer1Score((prev) => prev + 1);
      }
      if (player2Answer === currentQuestion.answer) {
        setPlayer2Score((prev) => prev + 1);
      }
    }
  }, [player1Answer, player2Answer]);

  const handleNextQuestion = () => {
    if (currentQuestionIndex < physicsQuestions.length - 1) {
      setCurrentQuestionIndex((prev) => prev + 1);
      setPlayer1Answer(null);
      setPlayer2Answer(null);
      setShowAnswer(false);
    } else {
      setGameFinished(true);
    }
  };

  const getOptionStyle = (option, playerAnswer, isPlayer1) => {
    if (!showAnswer) {
      return {
        ...styles.option,
        ...(playerAnswer === option ? styles.selectedOption : {}),
      };
    }

    const isCorrect = option === physicsQuestions[currentQuestionIndex].answer;
    const isSelected = playerAnswer === option;

    if (isCorrect) {
      return { ...styles.option, ...styles.correctOption };
    }
    if (isSelected && !isCorrect) {
      return { ...styles.option, ...styles.incorrectOption };
    }
    return styles.option;
  };

  const renderFinalScore = () => (
    <div style={styles.finalScore}>
      <h2>Game Over! 🎮</h2>
      <div style={styles.trophy}>🏆</div>
      <h3>Final Scores:</h3>
      <div style={styles.scoreBoard}>
        <div style={styles.playerScore}>
          <h4>Player 1</h4>
          <p>{player1Score} / 5</p>
          {player1Score > player2Score && "🥇"}
        </div>
        <div style={styles.playerScore}>
          <h4>Player 2</h4>
          <p>{player2Score} / 5</p>
          {player2Score > player1Score && "🥇"}
        </div>
      </div>
      {player1Score === player2Score ? (
        <h3>It's a tie! 🤝</h3>
      ) : (
        <h3>
          {player1Score > player2Score ? "Player 1" : "Player 2"} wins! 🎉
        </h3>
      )}
      <button style={styles.startButton} onClick={initializeGame}>
        Play Again 🔄
      </button>
    </div>
  );

  return (
    <div style={styles.body}>
      <div style={styles.sidebar1}>
        <h1>educate</h1>
        {[
          "HOME",
          "SEARCH",
          "HACKATHON",
          "FORUM",
          "EDUCATION",
          "CONNECT",
          "JOBS",
          "PROFILE",
          "LOG OUT",
        ].map((item) => (
          <div key={item} style={styles.sidebarItem}>
            <div style={styles.sidebarBox}>{item}</div>
          </div>
        ))}
      </div>

      <div style={styles.gameContainer}>
        <h1>Physics Quiz Challenge ⚡</h1>
        {!gameStarted ? (
          <button style={styles.startButton} onClick={initializeGame}>
            Start New Game 🎮
          </button>
        ) : gameFinished ? (
          renderFinalScore()
        ) : (
          <>
            <div style={styles.scoreBoard}>
              <div style={styles.playerScore}>
                <h4>Player 1</h4>
                <p>{player1Score}</p>
              </div>
              <div style={styles.playerScore}>
                <h4>Player 2</h4>
                <p>{player2Score}</p>
              </div>
            </div>

            <div style={styles.card}>
              <div style={styles.questionEmoji}>
                {physicsQuestions[currentQuestionIndex].emoji}
              </div>
              <div style={styles.questionText}>
                Question {currentQuestionIndex + 1} of 5:
                <br />
                {physicsQuestions[currentQuestionIndex].question}
              </div>

              <div style={{ width: "100%" }}>
                <h4>Player 1</h4>
                {physicsQuestions[currentQuestionIndex].options.map(
                  (option, index) => (
                    <div
                      key={index}
                      style={getOptionStyle(option, player1Answer, true)}
                      onClick={() => handleAnswerSelect(option, 1)}
                    >
                      {option}
                    </div>
                  )
                )}
              </div>

              <div style={{ width: "100%", marginTop: "20px" }}>
                <h4>Player 2</h4>
                {physicsQuestions[currentQuestionIndex].options.map(
                  (option, index) => (
                    <div
                      key={index}
                      style={getOptionStyle(option, player2Answer, false)}
                      onClick={() => handleAnswerSelect(option, 2)}
                    >
                      {option}
                    </div>
                  )
                )}
              </div>

              {showAnswer && (
                <button style={styles.nextButton} onClick={handleNextQuestion}>
                  {currentQuestionIndex < physicsQuestions.length - 1
                    ? "Next Question ➡️"
                    : "See Results 🏆"}
                </button>
              )}
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default PhysicsCardGame;
