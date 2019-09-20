import React, { Component } from 'react';
import { Layout } from 'antd';
import View1 from './views/View1';
import View2 from './views/View2';
import View3 from './views/View3';
import View4 from './views/View4';
import View5 from './views/View5';
import View6 from './views/View6';
import './dashboard.css';

const { Sider, Content } = Layout;

export default class Dashboard extends Component {
    render() {
        return (
            <div>
                <Layout style={{ height: 920 }}>
                    <Sider width={300} style={{backgroundColor:'white'}}>
                        <Content style={{ height: 200 }}>
                            <View1/>
                        </Content>
                        <Content style={{ height: 300 }}>
                            <View2/>
                        </Content>
                        <Content style={{ height: 400 }}>
                            <View3/>
                        </Content>
                    </Sider>
                    <Layout>
                        <Content style={{ height: 300 }}>
                            <View4/>
                        </Content>
                        <Layout style={{ height: 600 }}>
                            <Content>
                                <View5/>
                            </Content>
                            <Sider width={300} style={{backgroundColor:'white'}}>
                                <View6/>
                            </Sider>
                        </Layout>
                    </Layout>
                </Layout>
            </div>
            // <div className="App">
            //     Dashboard
            // </div>
        )
    }
}
