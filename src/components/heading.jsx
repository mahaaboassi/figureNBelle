const Heading = ({isCenter=true, title, description})=>{
    return(<div className={`heading  ${isCenter? "flex flex-col items-center text-center" :""}`}>
        <h2 className="bodoniTX uppercase">{title}</h2>
        <p>{description}</p>

    </div>)
}
export default Heading