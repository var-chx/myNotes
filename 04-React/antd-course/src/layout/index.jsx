import { Component } from 'react'
import { Layout, Menu, Icon } from 'antd'
const { Header, Footer, Sider, Content } = Layout
const { SubMenu }  = Menu
import Link from 'umi/link'
export default class BasicLayout extends Component {
    render () {
        return (
            <Layout>
                <Sider width={256} style={{ minHeight: '100vh', color: 'white'}}>
                    <div style={{height: 32, background: 'rgba(255,255,255, .2)', margin: 16}}></div>
                    <Menu
                        style={{ width: 256 }}
                        theme="dark"
                        mode="inline"
                    >
                        <SubMenu
                            key="sub1"
                            title={
                                <span>
                                    <Icon type="pie-chart" />
                                    <span>Navigation One</span>
                                </span>
                            }
                        >
                            <Menu.ItemGroup key="g1" title="Dashboard">
                                <Menu.Item key="1">
                                    <Link to='./analysis'>
                                        分析
                                    </Link>
                                </Menu.Item>
                                <Menu.Item key="2">
                                    <Link to='monitor'>
                                        监控
                                    </Link>
                                </Menu.Item>
                                <Menu.Item key="3"> 
                                    <Link to='workplace'>
                                        工作台
                                    </Link>
                                </Menu.Item>
                            </Menu.ItemGroup>
                        </SubMenu>
                    </Menu>
                </Sider>
                <Layout>
                    <Header style={{background: '#fff', textAlign: 'center', padding: 0}}>header</Header>
                    <Content>
                        <div style={{background: '#fff', padding: 24, minHeight: 360}}>
                            {this.props.children}
                        </div>
                    </Content>
                    <Footer style={{textAlign: 'center'}}>footer</Footer>
                </Layout>
            </Layout>
        )
    }
}