import s from "./TypeScript.module.css";

function TypeScript() {
  return (
    <div className={s.card}>
      <div className={s.content}>
        <h2 className={s.name}>👨🏻‍⚖️ Lecture: TypeScript</h2>
        <p className={s.content}>
          <ol>
            <li>TypeScript</li>
            <li>Setting up TS</li>
            <li>Scripts</li>
            <li>TSC & TSX</li>
            <li>Union Type</li>
            <li>Interface</li>
            <li>Functions</li>
            <li>Tuple</li>
          </ol>
        </p>
      </div>
    </div>
  );
}

export default TypeScript;

