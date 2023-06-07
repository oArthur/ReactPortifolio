import SocialNetWorks from './SocialNetworks'
import InformationContainer from './InformationContainer'

import Avatar from '../img/eu.jpeg'

import '../styles/components/sidebar.sass'


const Sidebar = ()=> {
    return(
        <aside id="sidebar">
            <img src={Avatar} alt="Eu Arthur" />
            <p className="title">Desenvolvedor</p>
            <SocialNetWorks />
            <InformationContainer />
            <a href="" className="btn">Download Curriculo</a>
        </aside>
    )
}
export default Sidebar