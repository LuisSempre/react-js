import Content from "./Content";
import Header from "./Header";
import { UiContextProvider } from "./UiContext";

function App() {
  return (
    <UiContextProvider>
      <Header />
      <Content />
    </UiContextProvider>
  );
}

export default App;
