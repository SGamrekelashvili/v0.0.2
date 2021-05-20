import { BrowserRouter, Switch, Route } from "react-router-dom";
import ListingPage from "./components/magazineListing/ListingPage";
import C1 from "./components/mainPage/c1/c1";
import Main from "./components/mainPage/main";
function App() {
  const Navbar = C1;
  return (
    <>
      <BrowserRouter>
        <Navbar></Navbar>
        <Switch>
          <Route path="/magazines">
            <ListingPage />
          </Route>
          <Route path="/">
            <Main />
          </Route>
        </Switch>
      </BrowserRouter>
    </>
  );
}

export default App;
