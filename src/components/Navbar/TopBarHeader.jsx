import { Link } from "react-router-dom"

const TopBarHeader = () => {
    return(
        <>
        <div className="pe-24 flex flex-wrap  bg-gray-400 justify-end ">
            <Link to="/contact" className="pr-24 " href="">Contact Us</Link>
            <Link to="/contact" className="pr-48  "  href="">Email Us</Link>

        </div>

       
        
        </>
    )
}
export default TopBarHeader