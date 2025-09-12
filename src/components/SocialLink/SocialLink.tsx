import styles from "./SocialLink.module.css";

interface SocialLinkProps {
  href: string;
  icon: React.ReactNode;
  label: string;
}

const SocialLink = ({ href, icon, label }: SocialLinkProps) => {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className={styles.link}
      aria-label={label}
    >
      {icon}
      <span>{label}</span>
    </a>
  );
};

export default SocialLink;
