import React from 'react';
// react-intl 支持多语言
import {FormattedMessage} from 'react-intl'
// antd-layout
import { Layout} from 'antd';
const { Content } = Layout;
// antd
// antd-走马灯
import { Carousel } from 'antd';
// antd-icon
import { SnippetsTwoTone, WarningTwoTone, ApiTwoTone, EditTwoTone, MailTwoTone, LockTwoTone } from '@ant-design/icons';

// components
import { USYDTelecomLabFooter } from "../../components/usydtelecomlabfooter/usydtelecomlabfooter";

// 引入样式
import "./main.less";

export class Main extends React.Component{
    render(){
        return(
            <>
                <Content className='page-main-background'>
                    <div className="page-main-container" style={{ minHeight: 380 }}>
                        {/* <div className='Title'>
                            <FormattedMessage id="main_blogger_title"/>
                            <div className='Subtitle'>
                                <FormattedMessage id="main_blogger_subtitle"/>
                            </div>
                        </div>
                        <Carousel autoplay>
                            <div className='Carousel-Indicator'>
                                <div className='Image Image-1'/>
                            </div>
                            <div className='Carousel-Indicator'>
                                <div className='Image Image-2'/>
                            </div>
                            <div className='Carousel-Indicator'>
                                <div className='Image Image-3'/>
                            </div>
                            <div className='Carousel-Indicator'>
                                <div className='Image Image-4'/>
                            </div>
                            <div className='Carousel-Indicator'>
                                <div className='Image Image-5'/>
                            </div>
                        </Carousel> */}
                        
                    </div>
                </Content>
                <USYDTelecomLabFooter/>
            </>
        );
    }
}