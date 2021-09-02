import { Menu } from 'antd'
import { Header } from 'antd/lib/layout/layout'
const Navbar = () => {
    return (
        <Header className="header" gutter={{ xs: 24, sm: 24, md: 24, lg: 32 }}>
            <Menu className="menu" theme="dark" mode="horizontal" defaultSelectedKeys={['2']}>
                <Menu.Item key="1">Dallo Tech Cv</Menu.Item>
                <Menu.Item style={{ marginLeft: 'auto' }} key="2"><a href="#about" title="about">ABOUT</a></Menu.Item>
                <Menu.Item key="3"><a href="#experience" title="experience">EXPERIENCE</a></Menu.Item>
                <Menu.Item key="4"><a href="#education" title="education">EDUCATION</a></Menu.Item>
                <Menu.Item key="5"><a href="#skills" title="skills">SKILLS</a></Menu.Item>
                <Menu.Item key="6"><a href="#contact" title="contact">CONTACT</a></Menu.Item>

            </Menu>
            {/* <Anchor targetOffset="64">
                <Link href="#about" title="About" />
                <Link href="#experience" title="Experience" />
                <Link href="#education" title="Education" />
                <Link href="#skills" title="Skills" />
                <Link href="#contact" title="Contact" />

            </Anchor> */}
        </Header>

    )

}

export default Navbar
