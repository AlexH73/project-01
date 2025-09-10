import "./App.css";
import Greeting from "./components/Greeting/Greeting";
import Goodbye from "./components/Goodbye/Goodbye";
import AgeInfo from "./components/AgeInfo/AgeInfo";

function App() {
  return (
    <div>
      <p>Hello, React!</p>
      <Greeting />
      <Greeting />
      <Greeting />
      <Goodbye name={"Bob"} />
      <Goodbye name={"Jon"} />
      <AgeInfo age={25} name={"Вася"} />
      <AgeInfo age={52} name={"Adolf"} />
    </div>
  );
}

export default App;
