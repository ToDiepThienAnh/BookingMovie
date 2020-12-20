import React, {useState} from 'react'
import { useDispatch} from 'react-redux' // useDispatch là hook do react redux cung cấp tượng props.dispatch khi sử dụng connect
import { dangNhapAction } from '../../redux/action/QuanLiNguoiDungAction';



export default function DangNhap() {
    const dispatch = useDispatch()
    // useState là thư viện thay thế this.state trong RE class component
    const [state, setState] = useState({
        taiKhoan: '',
        matKhau: ''
    }) // useState nhận giá trị đầu vào là stateDefault
    console.log('state', state);
    const handleChangeInput = (event) =>{
        const {value, name} = event.target
        console.log(name,value);
        const newState = {...state, [name]:value}
        setState(newState)

        // Gọi Api xác thực để đăng nhập
        // không cần dùng connect
    
    }
    const handleSubmit = (event)=>{
        event.preventDefault()
        dispatch(dangNhapAction(state))
    }
    return (
        <form className='container border px-0' onSubmit={handleSubmit}>
            <h3 className='display-4 text-center bg-secondary py-2'>Đăng Nhập</h3>
            <div className='form-group'>
                <p>Tài khoản</p>
                <input onChange={handleChangeInput} placeholder='Nhập tài khoản' type='text' name="taiKhoan" className='form-control'></input>
            </div>
            <div className='form-group'>
                <p>Mật khẩu</p>
                <input onChange={handleChangeInput} placeholder='Nhập mật khẩu' name="matKhau" type='password' className='form-control'></input>
            </div>
            <div className='form-group'>
                <button className='btn btn-success'>Đăng Nhập</button>
            </div>
        </form>
    )
}
