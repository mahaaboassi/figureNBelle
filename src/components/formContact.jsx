const Contact = ()=>{
    return(<form className="contact p-5 flex flex-col gap-5">
            <h3 className="bodoniTX">Book an Appointment</h3>
            <div>
                <div className="input-wrapper">
                    <input placeholder="Name" />
                </div>
                
            </div>
            <div>
                <div className="input-wrapper">
                    <input placeholder="Email" />
                </div>
            </div>
            <div>
                <div className="input-wrapper">
                    <input placeholder="Location" />
                </div>
            </div>
            <div>
                <div className="input-wrapper">
                    <input placeholder="Phone" />
                </div>
            </div>
            <div>
                <button className="w-full">SUBMIT</button>
            </div>
    </form>)
}
export default Contact