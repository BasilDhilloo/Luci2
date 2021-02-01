import React from 'react'
import { Menu, Layout, Breadcrumb } from 'antd';
import 'antd/dist/antd.css'; // or 'antd/dist/antd.less';
import HeaderTwo from './../../header/HeaderTwo'
import homeIcon from './../../../assets/home.png'
import dollarIcon from './../../../assets/dollar-sign.png'
import activityIcon from './../../../assets/activity.png'
import reportIcon from './../../../assets/file-text.png'
import expensesIcon from './../../../assets/expense.png'
import fixedIcon from './../../../assets/fixedvari.png'
import expenseIcon from './../../../assets/pie-chart.png'
import shoppingIcon from './../../../assets/shoppingbag.png'
import './sidenavtwo.css'
import PropertyContent from '../propertycontent/PropertyContent'
// import { elastic as Mennu } from 'react-burger-menu';



const { SubMenu } = Menu;
const { Header, Content, Footer, Sider } = Layout;



function SidenavTwo() {
    return (
        <div>
            <Layout>
                {/* <HeaderTwo />  */}
                <Content style={{ padding: '0 50px' }}>
               
                <Layout className="site-layout-background" style={{ padding: '24px 0' }}>

                    <Sider className="site-layout-background" width={200}>
                    <Menu
                        mode="inline"
                        style={{ height: '100%' , backgroundColor:" #4B176A"}}
                    >   
                        <Menu.Item ><img src={homeIcon} alt="This is icon" /> Property </Menu.Item>
                        <Menu.Item ><img src={shoppingIcon} alt="This is icon" /> Purchase </Menu.Item>
                        <Menu.Item ><img src={dollarIcon} alt="This is icon" /> Income </Menu.Item>
                        <Menu.Item ><img src={expenseIcon} alt="This is icon" /> Expense </Menu.Item>
                        <Menu.Item ><img src={activityIcon} alt="This is icon" /> Assumptions </Menu.Item>
                        <Menu.Item ><img src={reportIcon} alt="This is icon" /> Report </Menu.Item>
                        <Menu.Item ><img src={expensesIcon} alt="This is icon" /> Expenses </Menu.Item>
                        <Menu.Item ><img src={fixedIcon} alt="This is icon" /> Fixed Variable</Menu.Item>
                        
                        
                    </Menu>
                    </Sider>
                    <Content className="ant-layout-content-second">
                        <PropertyContent />
         
                   
                    </Content>
                </Layout>
                </Content>
                {/* <Footer style={{ textAlign: 'center' }}>Ant Design ©2018 Created by Ant UED</Footer> */}
            </Layout>
        </div>
    )
}

export default SidenavTwo
