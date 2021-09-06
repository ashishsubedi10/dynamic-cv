import AboutMe from '../../components/AboutMe/AboutMe'
import Contact from '../../components/Contact/Contact'
import Education from '../../components/Education/Education'
import Experience from '../../components/Experience/Experience'
import Landing from '../../components/Landing/Landing'
import Navbar from '../../components/Navbar/Navbar'
import Portfolio from '../../components/Portfolio/Portfolio'
import Skills from '../../components/Skills/Skills'
const Home = () => {
    return (
        <>
            <Navbar />
            <Landing />
            <AboutMe />
            <Experience />
            <Education />
            <Portfolio />
            <Skills />
            <Contact />
        </>
    )
}

export default Home
