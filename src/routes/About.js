import React from "react";
import "./Routes.css";
import Loading from "../components/Loading";

class About extends React.Component {
  state = {
    isLoading: true,
  }
  componentDidMount() {
    setTimeout(() => {
      this.setState({ isLoading: false })
    }, 2000);

  }
  render() {
    const { isLoading } = this.state;
    return (
      <>
        <section className="container">
          {isLoading ? <Loading/>: (
            <div className="about_container">
              <span>
                “Freedom is the freedom to say that two plus two make four. If that is
                granted, all else follows.”
              </span>
              <span>− George Orwell, 1984</span>
            </div>
          )}
        </section>
      </>
    )
  }
}

// function About() {
//   return (
//     <div className="about_container">
//       <span>
//         “Freedom is the freedom to say that two plus two make four. If that is
//         granted, all else follows.”
//       </span>
//       <span>− George Orwell, 1984</span>
//     </div>
//   );
// }

export default About;