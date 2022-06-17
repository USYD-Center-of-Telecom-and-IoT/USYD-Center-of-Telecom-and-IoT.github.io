import React from 'react';
// react-intl support multiple langs
import {FormattedMessage} from 'react-intl'
// data
// members
import { members } from "../../data/members"
// utils
// common functions
import { sortObjArrByPropery } from '../../utils/commonfns';
// antd-layout
import { Layout} from 'antd';
const { Content } = Layout;
// antd
// antd-icon
import { SnippetsTwoTone, WarningTwoTone, ApiTwoTone, EditTwoTone, MailTwoTone, LockTwoTone } from '@ant-design/icons';
// components
import { USYDTelecomLabFooter } from "../../components/usydtelecomlabfooter/usydtelecomlabfooter";
// css
import "./main.less";

export class Main extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            memberAvatar: null
        };
    }

    // after the component is mounted to DOM
    componentDidMount(){
        // load the data
        // sort members by the last name
        sortObjArrByPropery(members, 'last_name');
        let memberAvatar = [];
        members.forEach((element, index)=>{
            memberAvatar.push(<li key={index}><div className='box'><img src={element.img_url}/><div className='intro'><span className='txt'>{element.first_name} {element.last_name}</span></div></div></li>);
        });
        this.setState({
            memberAvatar: memberAvatar
        });
    }

    render(){
        return(
            <>
                <Content className="page-main-container">
                    <div className="" style={{minHeight: "720px"}}>
                        <p className='title'>Telecom Lab</p>
                        <ul className='content'>
                            <li>This lab is led by Wibowo Hardjawana and Branka Vucetic in the University of Sydney.</li>
                            <li>Wibowo Hardjawana's work aims to develop wireless network softwarisation. The emerging 5G mobile network will need to handle numerous types of traffic, including applications and devices ranging from the internet of things (IoT) to high-demand mobile broadband. These traffic types have elastic requirements with regard to bandwidth, latency and reliability, requiring network operators to regularly program their radio resources according to demand. While the radio access mobile networks of today will be interoperable with any of the above devices due to their conformance with standards, the software and interfaces used to manage radio resources remain proprietary 'black boxes' to everyone except the original equipment manufacturers.</li>
                            <li>Professor Branka Vucetic's work aims to develop theoretical framework and design principles for wireless communication systems. She is an internationally recognised expert in coding theory and its applications in wireless engineering. Professor Vucetic has held various research and academic positions in the UK, Yugoslavia and Australia, and since 1986 she has been with the School of Electrical and Information Engineering at Sydney University, where she is currently Laureate Professor and Director of the Centre of Excellence in Telecommunications.</li>
                        </ul>
                        <p className='title'>Members</p>
                        <p className='subtitle'>The list is sorted by the last name</p>
                        <ul className='memavatar'>
                            {this.state.memberAvatar}
                        </ul>
                    </div>
                </Content>
                <USYDTelecomLabFooter/>
            </>
        );
    }
}