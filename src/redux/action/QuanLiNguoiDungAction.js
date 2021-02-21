import axios from 'axios'
import { history } from '../../App'
import { ACCESSS_TOKEN, DOMAIN, USER_LOGIN } from '../../util/setting'

export const dangNhapAction = (nguoiDung) => {
    return async dispatch => {
        try {
            const result = await axios({
                url: `${DOMAIN}/api/quanlynguoidung/dangnhap`,
                method: 'POST',
                data: nguoiDung,
            })
            // Đăng nhập thành công
            // lấy token lưu vào localStorage
            localStorage.setItem(ACCESSS_TOKEN, result.data.accessToken)
            localStorage.setItem(USER_LOGIN, JSON.stringify(result.data))
            // history.push('/trangchu')
            // trở về trang trước đó
            history.goBack();
            console.log(result.data);
        }
        catch (err) {
            console.log("Lỗi ", err);
        }
    }
}