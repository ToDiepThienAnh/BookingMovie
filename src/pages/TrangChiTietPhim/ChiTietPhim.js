import Axios from 'axios';
import React, { useState, useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { NavLink, withRouter } from 'react-router-dom';
import moment from 'moment'

export default function ChiTietPhim(props) {
    console.log("ppropsRoute", props);
    const [chiTietPhim, setChiTietPhim] = useState({});

    useEffect(async () => {
        const maPhim = props.match.params.id

        const result = await Axios({
            method: "GET",
            url: `http://movie0706.cybersoft.edu.vn/api/QuanLyRap/LayThongTinLichChieuPhim?MaPhim=${maPhim}`
        })

        setChiTietPhim(result.data)
        console.log("Data phim", result.data);
        document.title = result.data.tenPhim
    }, [])

    return (
        <div className="container">
            <div className="row">
                <div className="col-6">
                    <img style={{ width: '400px', height: "400px" }} src={chiTietPhim.hinhAnh} alt="" className="img-fluid" />

                </div>
                <div className="col-6">
                    <table className='table table-bordered'>

                        <tbody>
                            <tr>
                                <td>Tên Phim</td>
                                <td>{chiTietPhim.tenPhim}</td>
                            </tr>
                            <tr>
                                <td>Mô tả</td>
                                <td>{chiTietPhim.moTa}</td>
                            </tr>
                        </tbody>
                    </table>

                </div>
            </div>
            <div className='row mt-5'>
                <div className='col-12'>
                    <h3>Thông tin lịch chiếu</h3>

                </div>

            </div>
            <div className='row'>

                <div className="nav flex-column nav-pills col-6" id="v-pills-tab" role="tablist" aria-orientation="vertical">
                    {/* <a className="nav-link active" id="v-pills-home-tab" data-toggle="pill" href="#v-pills-home" role="tab" aria-controls="v-pills-home" aria-selected="true">Home</a>
                    <a className="nav-link" id="v-pills-profile-tab" data-toggle="pill" href="#v-pills-profile" role="tab" aria-controls="v-pills-profile" aria-selected="false">Profile</a>
                    <a className="nav-link" id="v-pills-messages-tab" data-toggle="pill" href="#v-pills-messages" role="tab" aria-controls="v-pills-messages" aria-selected="false">Messages</a>
                    <a className="nav-link" id="v-pills-settings-tab" data-toggle="pill" href="#v-pills-settings" role="tab" aria-controls="v-pills-settings" aria-selected="false">Settings</a> */}
                    {/* có thuộc tính heThongRapChieu có tồn tại k */}
                    {chiTietPhim.heThongRapChieu?.map((item, index) => {

                        const activeClass = index === 0 ? 'active' : '';
                        console.log("active", activeClass, index);
                        return <a className={`nav-link ${activeClass}`} data-toggle="pill" aria-controls={`${item.maHeThongRap}`} key={index} href={`#${item.maHeThongRap}`} className='nav-link' role="tab" id={`v-pills-${item.maHeThongRap}`}>{item.tenHeThongRap}
                            <img src={item.logo} width='50' height='50' alt="" /></a>
                    })}
                </div>
                <div className="tab-content col-6" id="v-pills-tabContent">
                    {/* <div className="tab-pane fade show active" id="v-pills-home" role="tabpanel" aria-labelledby="v-pills-home-tab">Home</div>
                    <div className="tab-pane fade" id="v-pills-profile" role="tabpanel" aria-labelledby="v-pills-profile-tab">Profile</div>
                    <div className="tab-pane fade" id="v-pills-messages" role="tabpanel" aria-labelledby="v-pills-messages-tab">Message</div>
                    <div className="tab-pane fade" id="v-pills-settings" role="tabpanel" aria-labelledby="v-pills-settings-tab">Settings</div> */}
                    {chiTietPhim.heThongRapChieu?.map((item, index) => {

                        const activeClass = index === 0 ? 'active' : ''

                        return <div className={`tab-pane text-success ${activeClass}`} role="tabpanel" aria-labelledby={`v-pills-${item.maHeThongRap}`} id={`${item.maHeThongRap}`} key={index}>
                            {item.cumRapChieu?.map((cumrap, index) => {
                                return <div key={index}>
                                    <h3>{cumrap.tenCumRap}</h3>
                                    <p className='text-warning'>Thời gian chiếu</p>
                                    <div className='row'>
                                        {cumrap.lichChieuPhim?.slice(0, 12).map((lichChieu, index) => {
                                            return <NavLink to={`/datve/${lichChieu.maLichChieu}`} className='col-3' key={index}>
                                                {moment(lichChieu.ngayChieuGioChieu).format("LT")}
                                            </NavLink>
                                        })}
                                    </div>
                                </div>
                            })}
                        </div>
                    })}
                </div>


            </div>
        </div >
    )
}


