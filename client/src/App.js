import "./App.css";
import { ChatsProvider } from "./context/appContext";
import MainRouter from "./router/MainRouter";

function App() {
  return (
    <ChatsProvider>
      <div className="App">
        <MainRouter />
      </div>
    </ChatsProvider>
  );
}

export default App;
