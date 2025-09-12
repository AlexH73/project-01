import s from "./ProfileCard.module.css";

interface Props {
  avatar: string;
  name: string;
  description: string;
}

function ProfileCard(props: Props) {
  const { avatar, name, description } = props;
  return (
    <div className={s.profileCard}>
      <img className={s.avatar} src={avatar} alt={`Avatar of ${name}`} />
      <div className={s.content}>
        <h2 className={s.name}>{name}</h2>
        <p className={s.description}>{description}</p>
      </div>
    </div>
  );
}

export default ProfileCard;
