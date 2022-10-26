import { RouterProvider } from "react-router-dom";
import { routes } from "./Routes/Routes";

function App() {
  return (
    <div className="bg-light">
      <RouterProvider router={routes}></RouterProvider>
    </div>
  );
}

export default App;
