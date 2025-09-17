import { useTheme } from "../../hooks/useTheme";
import s from "./SectionTitle.module.css";

interface Props {
  title: string;
  codeUrl?: string;
  urlAnchor?: string;
}

export default function SectionTitle(props: Props) {
  const { title, codeUrl, urlAnchor } = props;
  const { theme } = useTheme();
  return (
    <div className={`${s.container} ${theme === "dark" ? s.darkTheme : ""}`}>
      <h2 className={`${s.sectionTitle} section-title`}>
        {title}:
        <a href={codeUrl} target="_blank" rel="noopener noreferrer">
          {urlAnchor}
        </a>
      </h2>
    </div>
  );
}
