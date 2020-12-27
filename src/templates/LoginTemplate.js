import React, { useEffect, useState } from 'react'
import { Route } from 'react-router-dom'

export const LoginTemplate = (props) => {
    const { Component, path } = props
    // Lấy chiều dài va chiều rộng của browser window
    // const { innerWidth, innerHeight } = window

    const [obWindow, setObWindow] = useState({
        innerWidth: window.innerWidth,
        innerHeight: window.innerHeight
    })
    useEffect(() => {
        // Đăng kí sự kiện resize cho window
        window.onresize = () => {
            // lấy width, height mới của windwo sau khi resize => set lại state window khi resize
            let newWidth = window.innerWidth
            let newHeight = window.innerHeight
            setObWindow({
                innerWidth: newWidth,
                innerHeight: newHeight
            })
        }

    }, [])
    const { innerWidth, innerHeight } = obWindow
    return <Route path={path} exact render={
        (propsRoute) => {
            return <>
                <div className='d-flex'>
                    <div style={{ width: innerWidth / 2, height: innerHeight }}>
                        <img src="https://picsum.photos/2000" style={{ width: '100%', height: '100%' }} />
                    </div>
                    <div style={{ width: innerWidth / 2, height: innerHeight }}>
                        <Component {...propsRoute} />
                    </div>
                </div>
            </>
        }
    }
    />
}