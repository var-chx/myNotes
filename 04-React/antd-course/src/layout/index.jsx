import { Component } from 'react'
import { Layout } from 'antd'
const { Header, Footer, Sider, Content } = Layout
export default class BasicLayout extends Component {
    render () {
        return (
            <Layout>
                <Sider width={256} style={{ minHeight: '100vh', color: 'white'}}>sider</Sider>
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