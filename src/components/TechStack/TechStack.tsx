import "./TechStack.css";

import FrontendStack from "../FrontendStack/FrontendStack";
import BackendStack from "../BackendStack/BackendStack";
import OtherStack from "../OtherStack/OtherStack";

const TechStack = () => {
  return (
    <div className="TechStack">
      <h1>Tech Stack</h1>
      <div className="categories">
        <FrontendStack />
        <BackendStack />
        <OtherStack />
      </div>
    </div>
  );
};

export default TechStack;
