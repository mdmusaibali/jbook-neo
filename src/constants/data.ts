export const defaultHTMLForEditor = `import React from "react";
import ReactDOM from "react-dom";
import "bulma@0.9.4/css/bulma.min.css";

const Card = ({ rank, text }) => {
  return (
    <div className="column box mb-3">
      <h1 className="tag is-primary mb-2">#{rank}</h1>
      <div className="content is-half">
        <p>{text}</p>
      </div>
    </div>
  );
};

const App = () => {
  const reasonsToUseJsbookNeo = [
    { rank: 1, text: "Easy to use" },
    { rank: 2, text: "Minimal UI" },
    { rank: 3, text: "No initial setup needed" },
    { rank: 4, text: "And many more 😀" },
  ];
  return (
    <div className="container columns is-fluid mt-4 mb-4">
      <h1 className="mb-4">Reason to use JSBook Neo:</h1>
      {reasonsToUseJsbookNeo.map((reason) => (
        <Card rank={reason.rank} text={reason.text} />
      ))}
    </div>
  );
};

ReactDOM.render(<App />, document.querySelector("#root"));
`;
