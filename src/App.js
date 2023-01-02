// import logo from './logo.svg';
// import Oraganic from './restask/orangicfood';
import Responsive from './restask/responsive';


import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Menu1 from './restask/tasmenu';
import Home1 from './restask/home';
import Works1 from './restask/works';
import Aboutus1 from './restask/aboutus';
// import Products1 from './restask/products';
import Oraganic1 from './restask/orangicfood';
import Technologycards from './technologycards';
import Login from './login';
import Notification from './notification';
import Socialbutton from './socialbutton';
import SuperOverLeague from './superoverleague';
import Hello from './helloworld';
import Menu from './menu';
import CongartsCard from './congratscard';
// import Menu from '../src/restask/tasmenu';
// import Home from '../src/restask/home';
// import Works from '../src/restask/works';
// import Aboutus from './restask/aboutus';
import Products1 from '../src/restask/products';
// import Oraganic from '../src/restask/orangicfood';
import AddSub from './addsub';
import MangoBan from './mangoban';
import FeedBack from './restask/feedback';
import FeedBack1 from './restask/feedback1';
import Date1 from './date';
import Carwala1 from './carwala1';
import FakeFlipkart from './fakeflipkart';
import Details2 from './details';
function App() {
  return (
    <div className="App">
      {/* <FeedBack/> */}
      {/* <FeedBack1/> */}
      {/* <MangoBan/> */}
      {/* <AddSub/> */}
      <BrowserRouter>
      <Routes>
      <Route path='/' element={<Menu/>}/>
        <Route path='/home' element={[<Menu/>,<Menu1/>,<Home1/>]}/>
        <Route path='/works' element={[<Menu/>,<Menu1/>,<Works1/>]}/>
        <Route path='/aboutus' element={[<Menu/>,<Menu1/>,<Aboutus1/>]}/>
        <Route path='/products' element={[<Menu/>,<Menu1/>,<Products1/>]}/>
        <Route path='/orangicfood' element={[<Menu/>,<Menu1/>,<Oraganic1/>]}/>
        <Route path='/responsive' element={[<Menu/>,<Responsive/>]}/>
        <Route path='/helloworld' element={[<Menu1/>,<Hello/>]}/>
        <Route path='/congartscard' element={[<Menu1/>,<CongartsCard/>]}/>
        <Route path='/superoverleague' element={[<Menu1/>,<SuperOverLeague/>]}/>
        <Route path='/socialbutton' element={[<Menu1/>,<Socialbutton/>]}/>
        <Route path='/notification' element={[<Menu1/>,<Notification/>]}/>
        <Route path='/login' element={[<Menu1/>,<Login/>]}/>
        <Route path='/technologycards' element={[<Menu1/>,<Technologycards/>]}/>
        <Route path='/feedback1' element={[<Menu/>,<FeedBack1/>]}/>
        <Route path='/feedback' element={[<Menu/>,<FeedBack/>]}/>
        <Route path='/mangoban' element={[<Menu/>,<MangoBan/>]}/>
        <Route path='/addsub' element={[<Menu/>,<AddSub/>]}/>
        <Route path='/date' element={[<Menu/>,<Date1/>]}/>
        <Route path='/Carwala1' element={[<Menu/>,<Carwala1/>]}/>
        <Route path='/details' element={[<Menu/>,<FakeFlipkart/>]}/>
        <Route path='/details/:id' element={[<Menu/>,<Details2/>]}/>
        </Routes>
      </BrowserRouter>
      {/* <Menu/> */}
      {/* <Home/> */}
      {/* <Works/> */}
      {/* <Aboutus/> */}
      {/* <Products1/> */}
      {/* <Oraganic/> */}
      {/* <Responsive/> */}
      {/* <BrowserRouter>
        <Routes>
          <Route path='/' element={<Menu/>}/>
          <Route path='/helloworld' element={<Hello/>}/>
          <Route path='/congartscard' element={<CongartsCard/>}/>
          <Route path='/superoverleague' element={<SuperOverLeague/>}/>
          <Route path='/socialbutton' element={<Socialbutton/>}/>
          <Route path='/notification' element={<Notification/>}/>
          <Route path='/login' element={<Login/>}/>
          <Route path='/technologycards' element={<Technologycards/>}/>
        </Routes>
      </BrowserRouter> */}
      {/* <Technologycards/> */}
      {/* <Notification/> */}
      {/* <CongartsCard/> */}
      {/* <SuperOverLeague/> */}
      {/* <Socialbutton/> */}
      {/* <Login/> */}
    </div>
  );
}

export default App;
