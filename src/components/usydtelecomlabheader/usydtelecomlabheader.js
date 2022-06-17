import React from 'react';
// react-link
import { Link } from 'react-router-dom';
// react-intl 支持多语言
import {FormattedMessage} from 'react-intl'
// antd
// antd-layout
import { Layout, Menu} from 'antd';
const { Header} = Layout;
// antd-icon
import { WifiOutlined, HomeFilled } from '@ant-design/icons';
// antd-button
import { Button } from 'antd';
// utils
import { isObjEmpty } from '../../utils/commonfns';

// css
import "./usydtelecomlabheader.less";

export class USYDTelecomLabHeader extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            headerMenuSelectedIds: ["1"]
        };
    };

    render(){
        // add `center` & `account` if login
        let menuItems = [
            {
                key: "1",
                icon: <HomeFilled />,
                label: <><span><FormattedMessage id="header_menu_home"/></span><Link to="/" /></>
            }
        ];

        return(
            <Header style={{ position: 'fixed', zIndex: 1, width: '100%' }}>
                <div className="usydtelecomlabheader-logo">
                    <WifiOutlined className='Image'/>
                    <span className='Txt'><FormattedMessage id="header_org_name"/></span>
                </div>
                <Menu className="usydtelecomlabheader-menu" theme="dark" mode="horizontal" selectedKeys={this.state.headerMenuSelectedIds} items={menuItems} />
            </Header>
        )
    };

}