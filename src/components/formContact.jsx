const Contact = ()=>{
    return(<form className="contact p-5 flex flex-col gap-5">
            <h3 className="bodoniTX">Book An Apportemnet</h3>
            <div>
                <div class="input-wrapper">
                    <input placeholder="Name" />
                </div>
                
            </div>
            <div>
                <div class="input-wrapper">
                    <input placeholder="Email" />
                </div>
            </div>
            <div>
                <div class="input-wrapper">
                    <input placeholder="Select Location" />
                </div>
            </div>
            <div>
                <div class="input-wrapper">
                    <input placeholder="Phone" />
                </div>
            </div>
            <div>
                <button className="w-full">Submit</button>
            </div>
    </form>)
}
export default Contact