import Footer from "../menu/Footer"
import Menu from "../menu/Menu"
import Technologies from "../sections/components/Technologies"
import Contact from "../sections/Contact"
import OnBoard from "../sections/landingPage/OnBoard"
import Opinions from "../sections/landingPage/Opinions"
import Projects from "../sections/landingPage/Projects"
import Specializing from "../sections/landingPage/Specializing"


const LandingPage = () => {
    return (
        <>
            <Menu />
            <OnBoard />
            <Technologies />
            <Specializing />
            <Projects />
            <Opinions />
            <Contact />
            <Footer />
        </>
    )
}

export default LandingPage