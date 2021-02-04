import React from 'react'
import {Menu, Layout, Breadcrumb} from 'antd';
import 'antd/dist/antd.css'; // or 'antd/dist/antd.less';
import HeaderTwo from './../../header/HeaderTwo'
import homeIcon from './../../../assets/home.png'
import acquisitionIcon from './../../../assets/acquisitionIcon.png'
import renovationIcon from './../../../assets/renovationIcon.png'
import dollarIcon from './../../../assets/dollar-sign.png'
import activityIcon from './../../../assets/activity.png'
import reportIcon from './../../../assets/file-text.png'
import assumptionsIcon from './../../../assets/assumptionsIcon.png'
import fixedIcon from './../../../assets/fixedvari.png'
import expenseIcon from './../../../assets/pie-chart.png'
import shoppingIcon from './../../../assets/shoppingbag.png'
import './sidenavtwo.css'


const {SubMenu} = Menu;
const {Header, Content, Footer, Sider} = Layout;


function SidenavTwoLong() {
  return (
    <div>
      {/*<Layout>*/}

      {/*<Content style={{padding: '0 50px'}}>*/}

      {/*<Layout className="site-layout-background" style={{padding: '24px 0'}}>*/}

      <Sider className="site-layout-background" width={200}>
        <Menu
          mode="inline"
          style={{height: '100%', backgroundColor: " #4B176A", borderRadius: "10px"}}
        >
          <Menu.Item style={{borderRadius: "10px"}}><img src={homeIcon} alt="This is icon"/> Property </Menu.Item>
          <Menu.Item style={{borderRadius: "10px"}}><img src={acquisitionIcon} alt="This is icon"/> Acquisition
          </Menu.Item>
          <Menu.Item style={{borderRadius: "10px"}}><img src={renovationIcon} alt="This is icon"/> Renovation
          </Menu.Item>
          <Menu.Item style={{borderRadius: "10px"}}><img src={dollarIcon} alt="This is icon"/> Financing
          </Menu.Item>
          <Menu.Item style={{borderRadius: "10px"}}><img src={expenseIcon} alt="This is icon"/> Expense
          </Menu.Item>
          <Menu.Item style={{borderRadius: "10px"}}><img src={assumptionsIcon} alt="This is icon"/> Assumptions
          </Menu.Item>
          <Menu.Item style={{borderRadius: "10px"}}><img src={reportIcon} alt="This is icon"/> Report </Menu.Item>

        </Menu>
      </Sider>


      {/*<Content className="ant-layout-content-second">*/}
      {/*    <Property/>*/}
      {/*</Content>*/}


      {/*</Layout>*/}
      {/*</Content>*/}

      {/*</Layout>*/}
    </div>
  )
}

export default SidenavTwoLong
