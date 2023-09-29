import { Routes, Route } from "react-router-dom";
import Problem1 from "./components/Problem-1.jsx";
import Menu from "./components/Menu.jsx";
import Problem2 from "./components/Problem-2.jsx";
import Index from "./components/Index.jsx";
import { store } from "./app/store.js";
import { Provider } from "react-redux";

function App() {
  return (
    <>
      <Provider store={store}>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/" element={<Menu />}>
            <Route path="problem-1" element={<Problem1 />} />
            <Route path="problem-2" element={<Problem2 />} />
          </Route>
        </Routes>
      </Provider>
    </>
  );
}

export default App;
