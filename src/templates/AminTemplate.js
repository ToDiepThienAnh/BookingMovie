import { Layout, Menu, Breadcrumb } from 'antd';
import {
    DesktopOutlined,
    PieChartOutlined,
    FileOutlined,
    TeamOutlined,
    UserOutlined,
} from '@ant-design/icons';
import { USER_LOGIN } from '../util/setting';
import { NavLink, Redirect, Route } from 'react-router-dom';
import { useState } from 'react';

import '../../node_modules/antd/dist/antd.min.css'

const { Header, Content, Footer, Sider } = Layout;
const { SubMenu } = Menu;



export const AdminTemplate = (props) => {


    const [collapsed, setCollapsed] = useState(false);

    const onCollapse = collapsed => {
        setCollapsed(collapsed)
    };

    if (localStorage.getItem(USER_LOGIN)) {
        // phải là quản trị mới được vào
        let userLogin = JSON.parse(localStorage.getItem(USER_LOGIN))
        if (userLogin.maLoaiNguoiDung === 'QuanTri') {
            return <Route path={props.path} exact render={(propsRoute) => {
                // Nội dung render khi người dùng gõ đúng các route admin
                return (
                    <Layout style={{ minHeight: '100vh' }}>
                        <Sider collapsible collapsed={collapsed} onCollapse={onCollapse}>
                            <div className="logo" />
                            <Menu theme="dark" defaultSelectedKeys={['1']} mode="inline">
                                {/* <Menu.Item key="1" icon={<PieChartOutlined />}>
                                    Option 1
                    </Menu.Item>
                                <Menu.Item key="2" icon={<DesktopOutlined />}>
                                    Option 2
                    </Menu.Item> */}
                                <SubMenu key="sub1" icon={<UserOutlined />} title="Quản lý">
                                    <Menu.Item key="3">
                                        <NavLink to='/admin/quanliphim' >quản lí phim</NavLink>
                                    </Menu.Item>
                                    <Menu.Item key="4">
                                        <NavLink to='/admin/quanlinguoidung' >Quản lí người dùng</NavLink>
                                    </Menu.Item>
                                </SubMenu>
                                {/* <SubMenu key="sub2" icon={<TeamOutlined />} title="Team">
                                    <Menu.Item key="6">Team 1</Menu.Item>
                                    <Menu.Item key="8">Team 2</Menu.Item>
                                </SubMenu>
                                <Menu.Item key="9" icon={<FileOutlined />}>
                                    Files
                    </Menu.Item> */}
                            </Menu>
                        </Sider>
                        <Layout className="site-layout">
                            <Header className="site-layout-background" style={{ padding: 0 }} />
                            <Content style={{ margin: '0 16px' }}>
                                {/* <Breadcrumb style={{ margin: '16px 0' }}>
                                        <Breadcrumb.Item>User</Breadcrumb.Item>
                                        <Breadcrumb.Item>Bill</Breadcrumb.Item>
                                    </Breadcrumb> */}
                                <props.Component {...propsRoute} />
                            </Content>
                            <Footer style={{ textAlign: 'center' }}>Ant Design ©2018 Created by Ant UED</Footer>
                        </Layout>
                    </Layout>
                );
            }} />
        }
        alert("Bạn không phải là admin !")
        return <Redirect to='/dangnhap' />
    }
    return <Redirect to='/dangnhap' />
}


// class SiderDemo extends React.Component {
//     state = {
//         collapsed: false,
//     };

    // onCollapse = collapsed => {
    //     console.log(collapsed);
    //     this.setState({ collapsed });
    // };

//     render() {
//         const { collapsed } = this.state;
        // return (
        //     <Layout style={{ minHeight: '100vh' }}>
        //         <Sider collapsible collapsed={collapsed} onCollapse={this.onCollapse}>
        //             <div className="logo" />
        //             <Menu theme="dark" defaultSelectedKeys={['1']} mode="inline">
        //                 <Menu.Item key="1" icon={<PieChartOutlined />}>
        //                     Option 1
        //     </Menu.Item>
        //                 <Menu.Item key="2" icon={<DesktopOutlined />}>
        //                     Option 2
        //     </Menu.Item>
        //                 <SubMenu key="sub1" icon={<UserOutlined />} title="User">
        //                     <Menu.Item key="3">Tom</Menu.Item>
        //                     <Menu.Item key="4">Bill</Menu.Item>
        //                     <Menu.Item key="5">Alex</Menu.Item>
        //                 </SubMenu>
        //                 <SubMenu key="sub2" icon={<TeamOutlined />} title="Team">
        //                     <Menu.Item key="6">Team 1</Menu.Item>
        //                     <Menu.Item key="8">Team 2</Menu.Item>
        //                 </SubMenu>
        //                 <Menu.Item key="9" icon={<FileOutlined />}>
        //                     Files
        //     </Menu.Item>
        //             </Menu>
        //         </Sider>
        //         <Layout className="site-layout">
        //             <Header className="site-layout-background" style={{ padding: 0 }} />
        //             <Content style={{ margin: '0 16px' }}>
        //                 <Breadcrumb style={{ margin: '16px 0' }}>
        //                     <Breadcrumb.Item>User</Breadcrumb.Item>
        //                     <Breadcrumb.Item>Bill</Breadcrumb.Item>
        //                 </Breadcrumb>
        //                 <div className="site-layout-background" style={{ padding: 24, minHeight: 360 }}>
        //                     Bill is a cat.
        //     </div>
        //             </Content>
        //             <Footer style={{ textAlign: 'center' }}>Ant Design ©2018 Created by Ant UED</Footer>
        //         </Layout>
        //     </Layout>
        // );
//     }
// }

// ReactDOM.render(<SiderDemo />, mountNode);