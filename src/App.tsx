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
import SectionTitle from "./components/SectionTitle/SectionTitle";
import Demo from "./components/Demo/Demo";
import Nationality from "./components/Nationality/Nationality";
import GenderPredictor from "./components/GenderPredictor/GenderPredictor";
import TypeScript from "./components/TypeScript/TypeScript";
import Button from "./components/Button/Button";
import FloatingMenu from "./components/FloatingMenu/FloatingMenu";

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
          <section id="lesson-01" className="section">
            <SectionTitle
              title={"Lesson 01  - TypeScript"}
              codeUrl="https://github.com/AlexH73/frontend-pro/tree/main/lessons/lesson_01"
              urlAnchor="Lecture work"
            />
            <div className="components-grid">
              <TypeScript />
            </div>
          </section>

          <section id="homework-01" className="section">
            <SectionTitle
              title={"Homework 01"}
              codeUrl="https://github.com/AlexH73/frontend-pro/blob/main/homeworks/hw_01/tasks.md"
              urlAnchor="Tasks"
            />
            <div className="components-grid">
              <Button
                buttonUrl="https://github.com/AlexH73/frontend-pro/blob/main/homeworks/hw_01/index.ts"
                urlAnchor=">> Task solution <<"
              />
            </div>
          </section>

          <section id="lesson-02" className="section">
            <SectionTitle
              title={"Lesson 02 - React + Vite (Props)"}
              codeUrl="https://github.com/AlexH73/frontend-pro/blob/main/lessons/lesson_02/react.pdf"
              urlAnchor="Presentation"
            />
            <div className="components-grid">
              <Greeting />
              <Goodbye name={"Bob"} />
              <Goodbye name={"Jon"} />
              <AgeInfo age={23} name={"Andrey"} />
              <AgeInfo age={26} name={"Fred"} />
            </div>
          </section>

          <section id="homework-02" className="section">
            <SectionTitle
              title={"Homework 02"}
              codeUrl="https://github.com/AlexH73/frontend-pro/blob/main/homeworks/hw_02/tasks.md"
              urlAnchor="Tasks"
            />
            <div className="components-grid">
              <DogCard name={"Tyson"} />
              <ProfileCard
                avatar={"https://cdn.7days.ru/pic/7a3/881426/374499/104.jpg"}
                name={"Марина Кравец"}
                description={
                  "Марина Леонидовна Кравец — российская теле- и радиоведущая, певица, актриса кино, телевидения и дубляжа. С 2009 года — резидент «Comedy Club». Биография. Родилась 18 мая 1984 года в Ленинграде. Марина — младший ребёнок в семье, у неё два старших брат..."
                }
              />
              <ProfileCard
                avatar={
                  "https://avatars.mds.yandex.net/get-entity_search/7798118/970288456/S600xU_2x"
                }
                name={"Albert Einstein"}
                description={
                  'Einstein received numerous awards and honors, and in 1922, he was awarded the 1921 Nobel Prize in Physics "for his services to Theoretical Physics, and especially for his discovery of the law of the photoelectric effect". None of the nominations in 1921 met the criteria set by Alfred Nobel, so the 1921 prize was carried forward and awarded to Einstein in 1922. ...'
                }
              />
            </div>
          </section>

          <section id="lesson-03" className="section">
            <SectionTitle
              title={"Lesson 03 - useState, css modules, controlled input"}
              codeUrl="https://github.com/AlexH73/frontend-pro/blob/main/lessons/lesson_03/use-state.pdf"
              urlAnchor="Presentation"
            />
            <div className="components-grid">
              <PersonalGreeting />
              <Counter />
            </div>
          </section>

          <section id="homework-03" className="section">
            <SectionTitle
              title={"Homework 03"}
              codeUrl="https://github.com/AlexH73/frontend-pro/blob/main/homeworks/hw_03/tasks.md"
              urlAnchor="Task"
            />
            <div className="components-grid">
              <SpaceMissionForm />
            </div>
          </section>

          <section id="lesson-04" className="section">
            <SectionTitle
              title={"Lesson 04 - useEffect"}
              codeUrl="https://github.com/AlexH73/frontend-pro/blob/main/lessons/lesson_04/theory.md"
              urlAnchor="Theory"
            />
            <div className="components-grid">
              <Demo />
              <Nationality />
            </div>
          </section>

          <section id="homework-04" className="section">
            <SectionTitle
              title={"Homework 04"}
              codeUrl="https://github.com/AlexH73/frontend-pro/blob/main/homeworks/hw_04/tasks.md"
              urlAnchor="Task"
            />
            <div className="components-grid">
              <GenderPredictor />
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
      <FloatingMenu />
    </div>
  );
}

export default App;
