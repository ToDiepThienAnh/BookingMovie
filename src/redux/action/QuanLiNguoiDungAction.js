import axios from 'axios'
import { ACCESSS_TOKEN, DOMAIN, USER_LOGIN } from '../../util/setting'

export const dangNhapAction = (nguoiDung) =>{
    return async dispatch => {
        const result = await axios({
            url: `${DOMAIN}/api/quanlynguoidung/dangnhap`,
            method: 'POST',
            data: nguoiDung
        })
        // Đăng nhập thành công
        // lấy token lưu vào localStorage
        localStorage.setItem(ACCESSS_TOKEN, result.data.accessToken)
        localStorage.setItem(USER_LOGIN, JSON.stringify(result.data))

        console.log(result.data);
    }
}