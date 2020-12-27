
import './App.css';
import { BrowserRouter, Route, Router, Switch } from 'react-router-dom'
import TrangChu from './pages/TrangChu/TrangChu';
import Dangky from './pages/DangKy/Dangky';
import DangNhap from './pages/DangNhap/DangNhap';
import ChiTietPhim from './pages/TrangChiTietPhim/ChiTietPhim';
import Header from './Components/Header/Header';
import { HomeTemplate } from './templates/HomeTemplate';
import { LoginTemplate } from './templates/LoginTemplate';
import DatVe from './pages/DatVe/DatVe';
import { createBrowserHistory } from 'history';


export const history = createBrowserHistory()

function App() {
  return (
    <Router history={history}>
      {/* <Header></Header> */}
      <Switch>
        {/* <Route path="/trangchu" render={(propsRoute) => {
          propsRoute: chứa các thuộc tính history, match
          return <div>
            <Header></Header>
            <TrangChu {...propsRoute}></TrangChu>
            Truyền các props của route vào component
          </div>
        }} /> */}
        <HomeTemplate path='/trangchu' Component={TrangChu} />
        <Route path="/dangky" component={Dangky} />
        {/* <Route path="/dangnhap" component={DangNhap} /> */}
        <LoginTemplate path="/dangnhap" Component={DangNhap} />
        {/* <Route path="/chiTietPhim/:id" render={(propsRoute) => {
          propsRoute: chứa các thuộc tính history, match
          return <div>
            <Header></Header>
            <ChiTietPhim {...propsRoute}></ChiTietPhim>
            Truyền các props của route vào component
          </div>
        }} /> */}
        <Route path="/datve" render={(propsRoute) => {
          return <DatVe {...propsRoute} />
        }} />
        <HomeTemplate path='/chitietphim/:id' Component={ChiTietPhim} />
        <HomeTemplate path="/" Component={TrangChu} />
      </Switch>
    </Router>
  );
}

export default App;
