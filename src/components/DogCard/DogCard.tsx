interface Props {
  name: string;
}
function DogCard({ name }: Props) {
  return (
    <div>
      <p>I love my dog {name}</p>
    </div>
  );
}

export default DogCard;
