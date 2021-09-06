import { Menu } from 'antd'
import { Header } from 'antd/lib/layout/layout'
const Navbar = () => {
    return (
        <Header style={{ backgroundColor: 'black', position: 'fixed', zIndex: '1', width: '100%', height: '50px' }}>
            <Menu className="menu" theme="dark" mode="horizontal" defaultSelectedKeys={['2']}>
                <Menu.Item key="1"><a href="#home">Dallo Tech Cv</a></Menu.Item>
                <Menu.Item style={{ marginLeft: 'auto' }} key="2"><a href="#home" title="home">HOME</a></Menu.Item>
                <Menu.Item key="3"><a href="#about" title="about">ABOUT</a></Menu.Item>
                <Menu.Item key="4"><a href="#experience" title="experience">EXPERIENCE</a></Menu.Item>
                <Menu.Item key="5"><a href="#education" title="education">EDUCATION</a></Menu.Item>
                <Menu.Item key="5"><a href="#portfolio" title="portfolio">PORTFOLIO</a></Menu.Item>
                <Menu.Item key="6"><a href="#skills" title="skills">SKILLS</a></Menu.Item>
                <Menu.Item key="7"><a href="#contact" title="contact">CONTACT</a></Menu.Item>
            </Menu>
        </Header>
    )

}

export default Navbar
