interface Props {
  age: number;
  name: string;
}

function AgeInfo({ age, name }: Props) {
  return (
    <div>
      <p>I'm {age} years old, my name is {name}</p>
    </div>
  );
}

export default AgeInfo;
