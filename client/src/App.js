import TopPage from '../src/Component/TopPage/TopPage';
import NavBar from '../src/Component/TopPage/NavBar';
import SignIn from '../src/Component/SignInUpOut/SignIn';
import SignUp from '../src/Component/SignInUpOut/SignUp';
import ListOfPost1 from './Component/ListOfPost/ListOfPost1';
import ListOfPost2 from './Component/ListOfPost/ListOfPost2';
import ListOfPost3 from './Component/ListOfPost/ListOfPost3';
import Post from './Component/Post/Post';
import ScrollToTop from './Component/ScrollToTop';
import ScrollButton from '../src/Component/ScrollButton/ScrollButton';
import { BrowserRouter as Router, Routes, Route, Link, Switch } from "react-router-dom";
function App() {
  return (
    <div>
      <Router>
      <NavBar />
      <ScrollToTop />
      <ScrollButton />
      <Switch>
        <Route path="/" exact component={TopPage} />
        <Route path="/SignIn" exact component={SignIn} />
        <Route path="/SignUp" exact component={SignUp} />
        <Route path="/ListOfPost1" exact component={ListOfPost1} />
        <Route path="/ListOfPost2" exact component={ListOfPost2} />
        <Route path="/ListOfPost3" exact component={ListOfPost3} />
        <Route path="/Post" exact component = {Post}/>
      </Switch>
      </Router>
      
      {/*<NavBar /> */}
      {/*<TopPage /> */}
      {/*<SignIn /> */}
      {/*<SignUp /> */}
      {/*<ListOfPost1 /> */}
      {/*<ListOfPost2 /> */}
      {/*<ListOfPost3 /> */}
      {/*<Post />*/}
    </div>
  );
}

export default App;
