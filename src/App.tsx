import "./App.css";
import ThemeToggle from "./components/ThemeToggle/ThemeToggle";
import Logo from "./components/Logo/Logo";
import Greeting from "./components/Greeting/Greeting";
import Goodbye from "./components/Goodbye/Goodbye";
import AgeInfo from "./components/AgeInfo/AgeInfo";
import DogCard from "./components/DogCard/DogCard";
import ProfileCard from "./components/ProfileCard/ProfileCard";
import Counter from "./components/Counter/Counter";
import PersonalGreeting from "./components/PersonalGreeting/PersonalGreeting";
import SpaceMissionForm from "./components/SpaceMissionForm/SpaceMissionForm";

function App() {
  return (
    <div className="app">
      <header className="app-header">
        <div className="container">
          <div className="headerContent">
            <Logo />
            <ThemeToggle />
          </div>
        </div>
      </header>

      <main className="app-main">
        <div className="container">
          <section className="section">
            <h2 className="section-title">Базовые компоненты</h2>
            <div className="components-grid">
              <Greeting />
            </div>
          </section>

          <section className="section">
            <h2 className="section-title">Компоненты с пропсами</h2>
            <div className="components-grid">
              <Goodbye name={"Bob"} />
              <Goodbye name={"Jon"} />
              <AgeInfo age={25} name={"Вася"} />
              <AgeInfo age={52} name={"Adolf"} />
            </div>
          </section>

          <section className="section">
            <h2 className="section-title">Карточки</h2>
            <div className="components-grid">
              <DogCard name={"Tyson"} />
              <ProfileCard
                avatar={"https://cdn.7days.ru/pic/7a3/881426/374499/104.jpg"}
                name={"Марина Кравец"}
                description={
                  "Марина Леонидовна Кравец — российская теле- и радиоведущая, певица, актриса кино, телевидения и дубляжа. С 2009 года — резидент «Comedy Club». Биография. Родилась 18 мая 1984 года в Ленинграде. Марина — младший ребёнок в семье, у неё два старших брат..."
                }
              />
            </div>
          </section>
          <section className="section">
            <h2 className="section-title">Компоненты с useState</h2>
            <div className="components-grid">
              <PersonalGreeting />
              <Counter />
              <SpaceMissionForm />
            </div>
          </section>
        </div>
      </main>

      <footer className="app-footer">
        <div className="container">
          <p>Учебный проект © 2025</p>
        </div>
      </footer>
    </div>
  );
}

export default App;
