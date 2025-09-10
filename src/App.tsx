import "./App.css";
import Greeting from "./components/Greeting/Greeting";
import Goodbye from "./components/Goodbye/Goodbye";
import AgeInfo from "./components/AgeInfo/AgeInfo";
import DogCard from "./components/DogCard/DogCard";
import ProfileCard from "./components/ProfileCard/ProfileCard";

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
      <DogCard name={"Tyson"} />
      <ProfileCard
        avatar={"https://cdn.7days.ru/pic/7a3/881426/374499/104.jpg"}
        name={"Марина Кравец"}
        description={
          "Марина Леонидовна Кравец — российская теле- и радиоведущая, певица, актриса кино, телевидения и дубляжа. С 2009 года — резидент «Comedy Club». Биография. Родилась 18 мая 1984 года в Ленинграде. Марина — младший ребёнок в семье, у неё два старших брат..."
        }
      />
    </div>
  );
}

export default App;
