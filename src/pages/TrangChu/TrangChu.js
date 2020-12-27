import React, { useEffect } from 'react'
import { connect, useSelector, useDispatch } from 'react-redux'
import axios from 'axios'
import { getDataFilmAction } from '../../redux/action/QuanLiPhimAction';
import { NavLink } from 'react-router-dom';

export default function TrangChu(props) {

    console.log("propsRoute", props);
    // useSelector là hooj reactredux cung cấp dùng để lấy state từ store về
    const mangPhim = useSelector(state => state.QuanLiPhimReducer.mangPhim)
    // const loadDataPhim = async ()=>{
    //     const res = await axios({
    //         url: 'https:movie0706.cybersoft.edu.vn/api/quanlyphim/laydanhsachphim?manhom=GP01',
    //         method: 'GET'
    //     })
    // useDispatch là hook thay thế cho props.dispatch khi dùng redux connect
    const dispatch = useDispatch()
    console.log(mangPhim);
    const loadDataPhim = async () => {
        dispatch(getDataFilmAction())
    }

    // useEffect thay thế cho các liftcycle 
    useEffect(
        () => {
            // chạy 1 lần duy nhất sau khi giao diện render ứng vs ComponentDidMount
            dispatch(getDataFilmAction());
        }, []
    )
    const renderPhim = () => {
        return mangPhim.map((phim, index) => {
            return <div className='col-4' key={index}>
                <div className="card">
                    <img className="card-img-top" src={phim.hinhAnh} alt />
                    <div className="card-body">
                        <h4 className="card-title">{phim.tenPhim}</h4>
                        <p className="card-text">{phim.moTa}</p>
                    </div>
                    <NavLink to={`/chitietphim/${phim.maPhim}`} className='btn btn-danger'>
                        Mua vé
                    </NavLink>
                </div>

            </div>
        })
    }
    return (
        <div>
            <button onClick={() => loadDataPhim()}>Load Danh Sác phim</button>
            Trang chủ
            <div className='row'>
                {renderPhim()}
            </div>
        </div>
    )
}


// const mapStateToProps = (state) => {

//     return {
//         mangPhim: state.QuanLiPhimReducer.mangPhim
//     }
// }


// export default connect(mapStateToProps)(TrangChu)