import Stack from "../Stack/Stack";
import "./TechStack.css";

const TechStack = () => {
  return (
    <div className="TechStack">
      <h1>Tech Stack</h1>
      <div className="categories">
        <Stack data={"Frontend"} />
        <Stack data={"Backend"} />
        <Stack data={"Others"} />
      </div>
    </div>
  );
};

export default TechStack;
