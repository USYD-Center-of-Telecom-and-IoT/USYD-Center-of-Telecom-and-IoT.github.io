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
import { SkypeFilled, HomeFilled, AppstoreFilled, SettingFilled } from '@ant-design/icons';
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
        let menuRestBtns = [];
        menuRestBtns.push(
            <Menu.Item key="1">
                <AppstoreFilled />
                <span><FormattedMessage id="header_menu_center"/></span>
                <Link to="/center" />
            </Menu.Item>
        );

        return(
            <Header style={{ position: 'fixed', zIndex: 1, width: '100%' }}>
                <div className="usydtelecomlabheader-logo">
                    <SkypeFilled className='Image'/>
                    <span className='Txt'><FormattedMessage id="header_org_name"/></span>
                </div>
                <Menu className="usydtelecomlabheader-menu" theme="dark" mode="horizontal" selectedKeys={this.state.headerMenuSelectedIds} onClick={this.menuOnClick}>
                    { menuRestBtns }
                </Menu>
            </Header>
        )
    };

}