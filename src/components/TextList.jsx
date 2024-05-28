import { useTextsContext } from "../App";

export default function TextList() {
  const { texts } = useTextsContext();
  return (
    <ul>
      {texts.map((text, index) => (
        <li key={index}>{text}</li>
      ))}
    </ul>
  );
}
