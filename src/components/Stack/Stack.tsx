import "./Stack.css";

import cppLogo from "../../Images/cpp-logo.svg";
import cssLogo from "../../Images/css-logo.svg";
import gitLogo from "../../Images/git-logo.svg";
import htmlLogo from "../../Images/html-logo.svg";
import jsLogo from "../../Images/js-logo.svg";
import mongodbLogo from "../../Images/mongodb-logo.svg";
import nodejsLogo from "../../Images/nodejs-logo.svg";
import pythonLogo from "../../Images/python-logo.svg";
import reactLogo from "../../Images/react-logo.svg";
import tsLogo from "../../Images/ts-logo.svg";

const Stack = (props: any) => {
  const frontendStack = [htmlLogo, cssLogo, jsLogo, reactLogo];
  const backendStack = [nodejsLogo, mongodbLogo];
  const OtherStack = [cppLogo, gitLogo, pythonLogo, tsLogo];

  const stack = props.data;

  function DisplayIcons({ array }: any) {
    return (
      <div>
        {array.map((logo: any) => {
          return <img src={logo} />;
        })}
      </div>
    );
  }

  return (
    <div className="Stack">
      <h1>{stack}</h1>
      {stack === "Frontend" ? <DisplayIcons array={frontendStack} /> : null}
      {stack === "Backend" ? <DisplayIcons array={backendStack} /> : null}
      {stack === "Others" ? <DisplayIcons array={OtherStack} /> : null}
    </div>
  );
};

export default Stack;
