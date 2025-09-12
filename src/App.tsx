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
          <div className="footer-content">
            <p>Учебный проект © {new Date().getFullYear()}</p>
            <div className="footer-links">
              <a
                href="https://github.com/AlexH73/project-01"
                target="_blank"
                rel="noopener noreferrer"
                className="footer-link"
                aria-label="GitHub проекта"
              >
                <svg
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                >
                  <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22" />
                </svg>
                <span>GitHub</span>
              </a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;
