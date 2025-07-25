import { useEffect, useRef, useState } from "react"
// for validation
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as Yup from 'yup';
import { countriesWithCodeNumber } from "../data/countries";

const validationSchema = Yup.object({
    email: Yup.string().email('Invalid email format') 
    .required('Email is required'),
    name: Yup.string().min(2,"Name must be at least 2 characters long").required('Name is required'),
    phone : Yup.string().matches(/^[0-9+\-() ]*$/, 'Phone number is not valid').required('Phone is required'),   
    location : Yup.string(),   
  });
const Contact = ({fromPage})=>{
    const [ openLocation, setOpenLocation ] = useState("")
    const locations = [{
        id : 1,
        name : "Ashok Vihar"
    },{
        id : 2,
        name : "Janak Puri"
    }]
    const { register, handleSubmit, formState: { errors } ,setValue} = useForm(
        {resolver: yupResolver(validationSchema), 
            mode: 'onChange'   }
    );
    const [ loading, setLoading ] = useState(false)
    const [ openCode, setOpenCode ] = useState("")
    const [ message, setMessage ] = useState({
        type:"",
        value:""
    })
    const onSubmit = async(value)=>{
        setLoading(true)

        const temp = {}
        temp.body = `<div style="margin:auto;width: 500px;color:#0B081D;border-radius:12px;background-color: white;border: 1px solid #c9c9c9;font-family: Arial, sans-serif;">
                    <!-- Header -->
                    <div style="background: #872890;border-top-left-radius:12px;border-top-right-radius:12px;padding:10px;">
                        <div style="margin: auto;text-align: center;">
                            <img style="height: 100px;" src="https://figurenbellewellness.com/assets/images/logo.png" alt="figure--logo" />
                        </div>
                    </div>

                    <!-- Body Content -->
                    <div style="padding: 20px;">
                        <h1 style="text-align: center;color: #872890;margin-bottom: 0;">Welcome to Figure N Belle</h1>
                        <p>Dear Admin,</p>
                        <p>Someone has contacted us through the website. You can find their details below:</p>

                        <!-- Stylish Table -->
                        <table style="width: 100%; border-collapse: collapse; margin-top: 15px; color: #0B081D;">
                            <tbody><tr style="background-color: #F6F6F6;">
                                <td style="padding: 10px; font-weight: bold; border: 1px solid #DDD;">Name</td>
                                <td style="padding: 10px; border: 1px solid #DDD;">${value.name}</td>
                            </tr>
                            <tr>
                                <td style="padding: 10px; font-weight: bold; border: 1px solid #DDD;">Email</td>
                                <td style="padding: 10px; border: 1px solid #DDD;">${value.email}</td>
                            </tr>
                            <tr style="background-color: #F6F6F6;">
                                <td style="padding: 10px; font-weight: bold; border: 1px solid #DDD;">Phone</td>
                                <td style="padding: 10px; border: 1px solid #DDD;"> ${"( " + selectedCountry.dial_code +" ) "+ value.phone}</td>
                            </tr>
                            <tr>
                                <td style="padding: 10px; font-weight: bold; border: 1px solid #DDD;">Location</td>
                                <td style="padding: 10px; border: 1px solid #DDD;">${value.location}</td>
                            </tr>
                        </tbody></table>

                        <div style="margin-top: 20px;">
                            <p style="margin: 0;">Best regards,</p>
                            
                        </div>
                    </div>

                    <!-- Button -->
                    <div style="text-align: center; padding-bottom: 20px;">
                        <a href="https://figurenbellewellness.com/" target="_blank">
                            <button style="background-color: #872890;cursor: pointer;color: white;border: none;padding: 10px 20px;border-radius: 12px;">Go to Website</button>
                        </a>
                    </div>
                </div>`
            
        temp.userEmail = value.email
        temp.adminEmail = "info@figurenbellewellness.com" 
        temp.subject = "New Inquiry Received from Website"
        const res = await fetch("https://api.arizglobal.com/api/mail", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(temp),
        });
        const data = await res.json();
        if (data.success) {
            
            setMessage({
                type : "success",
                value : data.message
            })
            setTimeout(()=>{
                setMessage({
                    type : "",
                    value : ""
                }) 
            },2000)
            setLoading(false)
        } else {
            if(data.status == 422 ){
                setMessage({
                    type : "error",
                    value : data.message
                }) 
                setTimeout(()=>{
                    setMessage({
                        type : "",
                        value : ""
                    }) 
                },2000)
            }else{
                setMessage({
                    type : "error",
                    value : "Oops! Something went wrong."
                })   
                setTimeout(()=>{
                    setMessage({
                        type : "",
                        value : ""
                    }) 
                },2000)
            }
                
            setLoading(false)
        }
    }
    const targetRef = useRef(null)
    useEffect(() => {
        const handleClickOutside = (event) => {
        if (targetRef.current && !targetRef.current.contains(event.target)) {
            setOpenCode(false);
            setOpenLocation(false);
        }
        };
        if (openCode || openLocation) {
        document.addEventListener("mousedown", handleClickOutside);
        } else {
        document.removeEventListener("mousedown", handleClickOutside);
        }

        return () => {
        document.removeEventListener("mousedown", handleClickOutside);
        };
    }, [openCode,openLocation]);

    // For Code country
    const [ countries, setCountries] = useState(countriesWithCodeNumber)
    const [ selectedCountry, setSelectedCountry,] = useState({})
    useEffect(()=>{
        setSelectedCountry(countriesWithCodeNumber.find(e => e.code == "IN"))
    },[])
    const handleSearch = (e) => {
        if(e.target.value.length >2 ){
            const searchQuery = e.target.value.toLowerCase();
            const filtered = countriesWithCodeNumber.filter((country) =>
                country.name.toLowerCase().includes(searchQuery)
            );
            setCountries(filtered);
        }else{
            setCountries(countriesWithCodeNumber)
        }
       
    };
    
    return(<form   onSubmit={handleSubmit(onSubmit)} className={`contact  flex flex-col gap-5 ${fromPage?"":"p-5 box"}`}>
            <h3 className="bodoniTX">{fromPage ? "Enter Your Details": "Book an Appointment"}</h3>
            <div>
                <div className="input-wrapper">
                    <input {...register("name")} placeholder="Name" />
                </div>
                {errors.name && <p className="p-0.5 text-error">{errors.name.message}</p>}
            </div>
            <div>
                <div className="input-wrapper">
                    <input {...register("email")} placeholder="Email" />
                </div>
                {errors.email && <p className="p-0.5 text-error">{errors.email.message}</p>}
            </div>
            <div className="flex flex-col gap-5" ref={targetRef}>
                <div  className="relative">
                                {openLocation && <div  className="content-popup">
                                        <ul className="flex flex-col gap-2 p-4">
                                            {locations.map((e,idx)=>(<li onClick={()=>{
                                                setOpenLocation(false)
                                                setValue("location", e.name);
                                            }} className="cursor-pointer" key={`Locations_${e.name}_${idx}`}>{e.name}</li>))}
                                        </ul>
                                    </div>}
                                <div  className="input-wrapper">
                                    <input {...register("location")} readOnly onClick={() =>{
                                        setOpenLocation(!openLocation)
                                        setOpenCode(false)
                                    }} placeholder="Location" />
                                    <div onClick={() => {
                                        setOpenLocation(!openLocation)
                                        setOpenCode(false)
                                    }} className="icon-arrow cursor-pointer">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="11" height="12" viewBox="0 0 14 23" fill="none"><path d="M0.390625 19.7237L8.59646 11.5L0.390625 3.27625L2.91688 0.75L13.6669 11.5L2.91688 22.25L0.390625 19.7237Z" fill="#872890"></path></svg>
                                    </div>
                                    
                                </div>
                            </div>
                            <div >
                                <div className="flex gap-2 relative">
                                    {openCode && <div   className="content-popup countries-popup">
                                                    <ul className={`${openCode?"block":"hidden"} ${"menu-countries"} flex flex-col p-4`}>
                                                    <li className="py-1">
                                                        <input onChange={handleSearch} placeholder={"Search"} isDark={true}/>
                                                    </li>
                                                    {countries.length>0 ? countries.map((ele)=>{
                                                        const code = ele.code.toLowerCase()
                                                        return <li  onClick={()=>{setSelectedCountry(ele)
                                                            setOpenCode(false)
                                                        }} className="flex mb-2 gap-2 py-0.5 items-center cursor-pointer hover:text-stone-700 details-country" key={`Countries_${ele.name}`}>
                                                        <img className="!w-5 !h-4  rounded" alt={ele.name} src={`https://flagcdn.com/w320/${code}.png`} />
                                                        <div >
                                                            {ele.name}
                                                        </div>
                                                        <div>{`(${ele.dial_code})`}</div>
                                                    </li>
                                                    }):<div className="flex justify-center py-4">
                                                        <p>No Country founded</p>
                                                        </div>}
                                                </ul>
                                        </div>}
                                    <div  className="input-wrapper w-1/4">
                                        <input onClick={() => {
                                            setOpenCode(!openCode)
                                            setOpenLocation(false)
                                        }} readOnly value={selectedCountry.dial_code} placeholder="code" />
                                        <div onClick={() => {
                                            setOpenCode(!openCode)
                                            setOpenLocation(false)
                                        }} className="icon-arrow cursor-pointer">
                                            <svg xmlns="http://www.w3.org/2000/svg" width="11" height="12" viewBox="0 0 14 23" fill="none"><path d="M0.390625 19.7237L8.59646 11.5L0.390625 3.27625L2.91688 0.75L13.6669 11.5L2.91688 22.25L0.390625 19.7237Z" fill="#872890"></path></svg>
                                        </div>
                                    </div>
                                    <div className="input-wrapper w-full">
                                        <input {...register("phone")} placeholder="XX XXX XXX" />
                                    </div>
                                </div>
                                {errors.phone && <p className="p-0.5 text-error">{errors.phone.message}</p>}
                            </div>
            </div>
            {
                message.value != "" && <div className={` ${message.type == "success"?"success-card":"error-card"}  flex gap-2 items-center`}>
                <div>
                    {message.type == "success"?<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 123 110" fill="none">
                    <g clipPath="url(#clip0_967_125)">
                    <path fillRule="evenodd" clip-rule="evenodd" d="M0 52.88L22.68 52.58C31.44 57.63 39.28 64.17 46.03 72.44C63.49 43.49 83.55 19.77 105.6 0H122.88C92.05 34.25 66.89 70.92 46.77 109.76C36.01 86.69 20.96 67.27 0 52.88Z" fill="#01A601"/>
                    </g>
                    <defs>
                    <clipPath id="clip0_967_125">
                    <rect width="122.88" height="109.76" fill="white"/>
                    </clipPath>
                    </defs>
                    </svg>:<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 62 63" fill="none">
                        <g clipPath="url(#clip0_967_122)">
                        <path fill-rule="evenodd" clipRule="evenodd" d="M3.02726 3.90727C4.96917 1.96987 7.60026 0.881836 10.3433 0.881836C13.0864 0.881836 15.7175 1.96987 17.6594 3.90727L31.0302 17.273L44.3656 3.90727C46.3082 1.97111 48.939 0.883916 51.6817 0.883916C54.4244 0.883916 57.0552 1.97111 58.9978 3.90727C60.9352 5.84918 62.0232 8.48027 62.0232 11.2234C62.0232 13.9664 60.9352 16.5975 58.9978 18.5394L45.6169 31.8799L58.9827 45.2457C60.9188 47.1882 62.006 49.8191 62.006 52.5617C62.006 55.3044 60.9188 57.9353 58.9827 59.8778C57.0401 61.814 54.4093 62.9012 51.6666 62.9012C48.9239 62.9012 46.2931 61.814 44.3505 59.8778L30.9999 46.497L17.6594 59.8627C15.7169 61.7988 13.086 62.886 10.3433 62.886C7.60066 62.886 4.96982 61.7988 3.02726 59.8627C1.0911 57.9201 0.00390625 55.2893 0.00390625 52.5466C0.00390625 49.8039 1.0911 47.1731 3.02726 45.2305L16.3829 31.8799L3.02726 18.5092C1.09909 16.5685 0.0168967 13.9439 0.0168967 11.2082C0.0168967 8.47253 1.09909 5.84792 3.02726 3.90727Z" fill="#FF4141"/>
                        </g>
                        <defs>
                        <clipPath id="clip0_967_122">
                        <rect width="62" height="62" fill="white" transform="translate(0 0.879883)"/>
                        </clipPath>
                        </defs>
                    </svg>}
                </div>
                {message.value}
            </div>
            }
            <div>
                <button disabled={loading} className="w-full">{loading?<div className="spinner m-auto"></div>:"SUBMIT"}</button>
            </div>
    </form>)
}
export default Contact