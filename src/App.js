import { BrowserRouter as Router } from "react-router-dom";
import Footer from "./components/layout/Footer";
import Header from "./components/layout/Header";
import TodoTabs from "./components/layout/TodoTabs";
import Main from "./components/Main";
import { TaskContextProvider } from "./context/TaskContext";

function App() {

  return (
    <Router basename="/todo-app-master/">
      <TaskContextProvider>
        <div className="todo-wrapper">
          <Header />
          <TodoTabs />
          <Main />
          <Footer />
        </div>
      </TaskContextProvider>
    </Router>
  );
}

export default App;
