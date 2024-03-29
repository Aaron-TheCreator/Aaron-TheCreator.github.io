import React from "react";
import CodeBar from "../CodeBar";
import "../../css/Contact.css";

const Contact = () => {
  return (
    <div className="ct-root">
      <CodeBar rowAmount={16} />
      <div className="ct-content">
        <div className="comments">
          <p className="comment">{`/*`}</p>
          <p className="comment">{`* CONTACT`}</p>
          <p className="comment">{`* To reach me the fastest, reach out to me through LinkedIn or Email`}</p>
          <p className="comment">{`* For Business Inquires, My Email is also the best way to reach me`}</p>
          <p className="comment">{`*/`}</p>
        </div>
        <div className="css-content">
          <p className="selector">
            <span className="bracket">.</span>contact{" "}
            <span className="bracket">{`{`}</span>
          </p>
          <p className="css-line">
            email:{" "}
            <span className="css-value">
              <a href="mailto:a.aburns95@gmail.com">a.aburns95@gmail.com</a>
            </span>
            <span className="bracket">;</span>
          </p>
          <p className="css-line">
            github:{" "}
            <span className="css-value">
              <a href="https://github.com/Aaron-TheCreator" target="__blank">
                https://github.com/Aaron-TheCreator
              </a>
            </span>
            <span className="bracket">;</span>
          </p>
          <p className="css-line">
            linkedin:{" "}
            <span className="css-value">
              <a
                href="https://www.linkedin.com/in/aaaronburns/"
                target="__blank"
              >
                https://www.linkedin.com/in/aaaronburns/
              </a>
            </span>
            <span className="bracket">;</span>
          </p>

          <p className="css-line">
            location: <span className="css-value">{`"Phoeniz, AZ / remote"`}</span>
            <span className="bracket">;</span>
          </p>
          <span className="bracket">{`}`}</span>
        </div>
      </div>
    </div>
  );
};

export default Contact;
