import React from 'react'
import { Redirect } from 'react-router-dom'
import { USER_LOGIN } from '../../util/setting'

export default function DatVe(props) {

    if (localStorage.getItem(USER_LOGIN)) {
        return <div>
            <h3>Đặt vé</h3>
        </div>
    }
    alert('Bạn phải đăng nhập trc khi đặt vé')

    return <Redirect to='/dangnhap' />
}
