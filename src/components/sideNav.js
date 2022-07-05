// import { react } from 'react' 
import logo from '../imgs/logo-original-ona.png'
import { DashBoardIcon, EntrepriseIcon, AssureIcon, TreeDotIcon, ReportsIcon, SettingIcon } from './icons' 


const Logo = () => {
    return (
        <div className="icon-bx">
            <img src={logo} alt="Logo" className='icon-bx-content'/>
        </div>
    )
}

const icon = [
    {

    }
]

const SideNav = () => {
    return (
        <div className="sidepanel flex-vt">
            <Logo/>
            <div className="grp flex-vt">
                <DashBoardIcon/>
                <AssureIcon/>
                <EntrepriseIcon/>
                <ReportsIcon/>
                <TreeDotIcon/>
            </div>
            <SettingIcon/>
        </div>
    )
}

export default SideNav;