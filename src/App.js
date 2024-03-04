import { BrowserRouter, Route, Routes } from "react-router-dom";
import LayoutMain from "./common/layout/LayoutMain";
import router from "./routers/routers";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          {router.map((data) => {
            return data.layout ? (
              <Route path={data.path} key={data.path} element={<LayoutMain>{data.component}</LayoutMain>} />
            ) : (
              <Route path={data.path} key={data.path} element={data.component} />
            );
          })}
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
