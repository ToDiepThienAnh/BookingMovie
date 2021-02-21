import React, { useEffect } from 'react'
import { Redirect } from 'react-router-dom'
import { USER_LOGIN } from '../../util/setting'
import { useDispatch, useSelector } from 'react-redux'
import { layThongTinPhongVeApiAction } from '../../redux/action/QuanLiPhimAction'
import "./DatVe.css"

export default function DatVe(props) {

    const { thongTinPhongVe } = useSelector(state => state.QuanLiPhimReducer)

    const dispatch = useDispatch();

    console.log("thong Tin Phong vé", thongTinPhongVe);
    useEffect(() => {
        // lấy mã lịch chiếu từ url 
        let { maLichChieu } = props.match.params
        dispatch(layThongTinPhongVeApiAction(maLichChieu))

    }, [])
    let { thongTinPhim, danhSachGhe } = thongTinPhongVe;
    const renderDanhSachGhe = () => {
        return thongTinPhongVe?.danhSachGhe?.map((ghe, index) => {
            let classGheVip = ghe.loaiGhe === 'Vip' ? "gheVip" : ""
            let classGheDaDat = ghe.daDat === true ? "gheDaDat" : ""
            return <>

                <button key={index} className={`ghe ${classGheVip} ${classGheDaDat}`}>
                    {ghe.daDat ? 'X' : ghe.stt}
                </button>
                {(index + 1) % 16 === 0 ? <br /> : ''}
            </>
        })
    }
    return <div className='container-fluid'>
        <div className='row'>
            <div className='col-8 text-center'>
                <div className='bg-dark text-white pt-2 pb-2' style={{ width: '100%', height: 50 }}>
                    Màn hình
                </div>
                <div className='danhSachGhe mt-5'>
                    {renderDanhSachGhe()}
                </div>
            </div>
            <div className='col-4'>
                <p className='display-4'>{thongTinPhim?.tenPhim}</p>
                <p>
                    <img src={thongTinPhim?.hinhAnh} width={200} />
                </p>
                <p>
                    <span className='font-weight-bold mr-2'> Cụm Rạp</span>
                    <span>{thongTinPhim?.tenCumRap} - {thongTinPhim?.tenRap}</span>
                </p>
                <p>
                    <span className='font-weight-bold mr-2'> Địa chỉ</span>
                    <span>{thongTinPhim?.diaChi}</span>
                </p>
                <p>
                    <span className='font-weight-bold mr-2'> Ngày chiếu</span>
                    <span>{thongTinPhim?.ngayChieu}</span>
                </p>
                <p>
                    <span className='font-weight-bold mr-2'>Giờ Chiếu</span>
                    <span>{thongTinPhim?.gioChieu}</span>
                </p>
            </div>
        </div>
    </div>
}
