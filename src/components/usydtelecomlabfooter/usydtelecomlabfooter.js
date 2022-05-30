import React from 'react';
// react-intl 支持多语言
import {FormattedMessage} from 'react-intl'
// antd-layout
import { Layout} from 'antd';
const { Footer } = Layout;
// antd-icon
import { CopyrightOutlined } from '@ant-design/icons';
// moment
import moment  from 'moment';

// css
import "./usydtelecomlabfooter.less";

export class USYDTelecomLabFooter extends React.Component{
    render(){
        return(
            <Footer className='usydtelecomlabfooter'>
                <p className='declare'>Copyright <CopyrightOutlined /> 2003-{moment().format('YYYY')}&nbsp;<FormattedMessage id="footer_company_name"/>
                </p>
            </Footer>
        );
    }
}