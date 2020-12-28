
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
import BaiTapReactApi from './BaiTapReactApi/BaiTapReactApi';


export const history = createBrowserHistory()

function App() {
  return (
    <BaiTapReactApi />
  );
}

export default App;
