import React from "react";
import SplitText from "react-pose-text";
import "./App.css";

const charPoses1 = {
  exit: { y: 20, opacity: 0 },
  enter: {
    y: 0,
    opacity: 1,
    transition: ({ charInWordIndex }) => ({
      type: "spring",
      delay: charInWordIndex * 200,
      stiffness: 500 + charInWordIndex * 150,
      damping: 10 - charInWordIndex * 1
    })
  }
};

const charPoses2 = {
  exit: { opacity: 0, y: 20 },
  enter: {
    opacity: 1,
    y: 0,
    delay: ({ charIndex }) => charIndex * 150
  }
};

class App extends React.Component {
  state = {
    isLoading: true
  };

  componentDidMount() {}

  render() {
    const { isLoading } = this.state;
    return (
      <section className="container">
        {isLoading ? (
          <div className="loader">
            <div>
              <SplitText
                className="loader__title"
                initialPose="exit"
                pose="enter"
                charPoses={charPoses1}
              >
                Ash
              </SplitText>
            </div>
            <div>
              <SplitText
                className="loader__sub"
                initialPose="exit"
                pose="enter"
                charPoses={charPoses2}
              >
                Appraisal Company
              </SplitText>
            </div>
          </div>
        ) : null}
      </section>
    );
  }
}

export default App;
