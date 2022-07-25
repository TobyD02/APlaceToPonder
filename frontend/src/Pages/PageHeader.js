import logo from '../Logo.png'
import '../App.css'
import { useNavigate } from 'react-router-dom'

const PageHeader = () => {

    const navigate = useNavigate()

    return(
        <div style={style} className='thisisthepageheader'>
            <img src={logo} width={'40px'} height={'40px'} style={{position: 'relative', top: '50%',
             left: '0%', transform: 'translate(0, -50%)', paddingLeft: '10px', paddingRight: '10px'}} />
            <div onClick={() => navigate("/")} className='menu_button'>Home</div>
            <div onClick={() => navigate("/")} className='menu_button'>Account</div>
            <div onClick={() => navigate("/")} className='menu_button'>Discover</div>
            <div onClick={() => navigate("/")} className='menu_button'>Sign Out</div>
        </div>
    )
}

const style = {
    position: 'absolute',
    top: '0',
    left: '0',
    height: '50px',
    width: '100%',
    backgroundColor: '#555555',
    color: '#333333',
    display: 'flex',
    flexDirection: 'row'
}

export default PageHeader