import { createContext, useState } from 'react';
// import logo from './logo.svg';
import { Route, Routes } from 'react-router-dom';
import Home from './component/Home/Home';
import Header from './component/Header/Herdear'
import HomeDetails from './component/HomeDetails/HomeDetails';

export const HomeContext = createContext();

function App() {
  const [home, seteHome] = useState(HomeContext);
  // console.log(home)
  
  return (
    <HomeContext.Provider value={[home, seteHome]}>
      <Header></Header>
      <Routes>
        <Route path='/' element={<Home></Home>}></Route>
        <Route path='/home' element={<Home></Home>}></Route>
        <Route path='/about' element={<Home></Home>}></Route>
        <Route path='/explore' element={<Home></Home>}></Route>
        <Route path='/service-details/:serviceId' element={<HomeDetails></HomeDetails>}></Route>
      </Routes>
    </HomeContext.Provider>

  );
}

export default App;
