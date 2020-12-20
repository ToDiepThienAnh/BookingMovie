// Đây là file chứa các hàm action

import { GET_DATA_FILM } from "../const/QuanLiPhimConst"
import axios from 'axios'
import { DOMAIN } from '../../util/setting'

export const getDataFilmAction = () => {
    return async (dispatch) => {
        const res = await axios({
            url: `${DOMAIN}/api/quanlyphim/laydanhsachphim?manhom=GP01`,
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