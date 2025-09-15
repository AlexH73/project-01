import s from "./SectionTitle.module.css";
interface Props {
  title: string;
  codeUrl?: string;
  urlAnchor?: string;
}

export default function SectionTitle(props: Props) {
  const { title, codeUrl, urlAnchor } = props;
  return (
    <h2 className={s.sectionTitle}>
      {title}:
      <a href={codeUrl} target="_blank" rel="noopener noreferrer">
        {urlAnchor}
      </a>
    </h2>
  );
}
