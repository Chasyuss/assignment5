import React, { useState, useEffect, createContext, useContext } from "react";
import TextInput from "./components/TextInput";
import TextList from "./components/TextList";

const TextsContext = createContext();

function App() {
  // TODO: texts 를 context api 로 리팩터링 하세요.

  const [texts, setTexts] = useState(() =>
    localStorage.getItem("texts")
      ? JSON.parse(localStorage.getItem("texts"))
      : [],
  );

  useEffect(() => {
    localStorage.setItem("texts", JSON.stringify(texts));
  }, [texts]);

  const onAddText = (text) => {
    setTexts((prevTexts) => [...prevTexts, text]);
  };

  return (
    <TextsContext.Provider value={{ texts, onAddText }}>
      <div>
        <h1>Text Input and Listing</h1>
        <TextInput />
        <TextList />
      </div>
    </TextsContext.Provider>
  );
}

export const useTextsContext = () => useContext(TextsContext);
export default App;
