import { Link } from "react-router-dom"
import logo from "../assets/images/logo_figure.png"
const Footer = ()=>{
    
    return(<footer>
        <div>
            <div>
                <img src={logo} alt="Logo" />
            </div>
            <p>At Figure N Belle, we combine beauty, science, and care to offer advanced skin and laser treatments tailored to your needs. Your confidence is our mission .</p>
            <p>© 2025, All Rights Reserved , Powered by <Link target="_blank" to={"https:/arizglobal.com"}>Ariz Global</Link></p>
        </div>
        <div>
            <h3>
                pages
            </h3>
            <ul>
                
            </ul>
        </div>

    </footer>)
}
export default Footer