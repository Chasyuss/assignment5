import React from "react";
import { Provider } from "react-redux";
import store from "./redux/config/configStore";
import TextInput from "./components/TextInput";
import TextList from "./components/TextList";

function App() {
  return (
    <Provider store={store}>
      <div>
        <h1>Text Input and Listing</h1>
        <TextInput />
        <TextList />
      </div>
    </Provider>
  );
}

export default App;
