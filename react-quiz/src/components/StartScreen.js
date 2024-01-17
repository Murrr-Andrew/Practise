function StartScreen({ numbQuestions, dispatch }) {
  return (
    <div className="start">
        <h2>Welcome to The Quiz!</h2>
        <p>{numbQuestions} question to test your mastery</p>
        <button
            className="btn btn-ui"
            onClick={() => dispatch({ type: "start" })}
        >
        Let's start
        </button>
    </div>
  );
}

export default StartScreen;
