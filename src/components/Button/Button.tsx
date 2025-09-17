import s from "./Button.module.css";
interface Props {
  buttonUrl: string;
  urlAnchor: string;
}

export default function Button(props: Props) {
  const { buttonUrl, urlAnchor } = props;
  return (
    <button className={s.button} onClick={() => window.open(buttonUrl, "_blank")}>
      {urlAnchor}
    </button>
  );
}
