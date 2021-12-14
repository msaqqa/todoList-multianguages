
import './App.css';
import Banner from './components/Banner/Banner';
import { Switch, Route } from "react-router-dom"
import TodoPage from './pages/TodoPage/TodoPage';
import FollowersPage from './pages/FollowersPage/FollowersPage';
import { useTranslation } from "react-i18next";

function App() {
  const {i18n} = useTranslation();
  return (
    <div className="App" dir={i18n.language=== 'ar'? "rtl":"ltr"}>
      <Banner />
      <Switch>
        <Route strict exact path="/" component={TodoPage}/>
        <Route strict exact path="/followers" component={FollowersPage}/>
      </Switch>
    </div>
  );
}

export default App;
