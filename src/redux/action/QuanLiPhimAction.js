// Đây là file chứa các hàm action

import { GET_DATA_FILM } from "../const/QuanLiPhimConst"
import axios from 'axios'
import { DOMAIN } from '../../util/setting'

export const getDataFilmAction = () => {
    return async (dispatch) => {
        const res = await axios({
            url: `https://elearning0706.cybersoft.edu.vn/api/QuanLyKhoaHoc/LayDanhSachKhoaHoc_PhanTrang?page=1&pageSize=8&MaNhom=GP01`,
            method: 'GET'
        })

        // Gọi ajax
        dispatch({
            type: GET_DATA_FILM,
            dataFilm: res.data
        })
    }
}

export const createAction = (type, payload) => {
    return {
        type, payload
    }
}

export const layThongTinPhongVeApiAction = (maLichChieu) => {

    return async (dispatch) => {
        // dispatch(action Khác)
        // dispatch(action Khác)
        // dispatch(action Khác)
        // dispatch(action Khác)
        // Gọi Api
        try {
            let result = await axios({
                method: "GET",
                url: `${DOMAIN}/api/QuanLyDatVe/LayDanhSachPhongVe?MaLichChieu=${maLichChieu}`
            })
            dispatch({
                type: 'LAY_THONG_TIN_PHONG_VE',
                thongTinPhongVe: result.data
            })
        } catch (err) {
            // Nếu lỗi từ api
            console.log(err.response?.data);
            // Nếu lỗi trong hàm try gây ra
            console.log(err);
        }
    }
}