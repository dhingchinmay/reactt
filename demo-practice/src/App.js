import Header from "../src/components/Header";
// import List from "../src/components/List";
// import Registration from "../src/components/Registration";
import "./App.css";
import AppRoutes from "./Router/Router";

function App() {
  return (
    <div>
      <Header />
      {/* <Registration /> */}
      {/* <List /> */}
      <AppRoutes />
    </div>
  );
}

export default App;
