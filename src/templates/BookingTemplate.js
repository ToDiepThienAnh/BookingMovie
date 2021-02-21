import { Redirect, Route } from "react-router-dom"
import { USER_LOGIN } from "../util/setting"


export const BookingTemplate = (props) => {
    if (localStorage.getItem(USER_LOGIN)) {
        return <Route path={props.path} exact render={(propsRoute) => {
            return <props.Component {...propsRoute} />
        }} />
    }
    alert('Bạn cần đăng nhập trước khi vào trang này !')
    return <Redirect to='/dangnhap/' />
}