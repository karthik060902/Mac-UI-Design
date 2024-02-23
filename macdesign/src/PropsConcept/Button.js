import React ,{useState}from 'react'

function Button({
    firstnametype,
    secondnametype,
    Emailtype,
    DOBtype,
    firstname,
    secondname,
    security,
    Email,
    Dob,
    password,
    Heading,
    color,
    colortype,
    button
})

 {
    const [value,setValue] = useState({
        firstname:"",
        secondname:"",
        email:"",
        password:"",
    });



    const handleChange = (event) => {
        const result = event.target.value.replace(/[^a-zA-Z]/g, '');
        setValue({...value,firstname:result});
    }
        const secondchange = (event) => {
            const result = event.target.value.replace(/[^a-zA-Z]/g, '');
            setValue({...value,secondname:result});

      };
   
  return (
    <div className='bg-secondary d-flex  justify-content-center align-items-center'style={{height:"100vh"}}>
        <div className='bg-light rounded-3 d-flex flex-column p-3 gap-2 '>
            <h2 className='d-flex justify-content-center'>{Heading}</h2>
            <div className='d-flex gap-3 w-100 mb-2'>

            <label className='w-50 fw-semibold'>{firstname}</label>
            <input type={firstnametype} 
            className='w-50 p-1 rounded-1 border border-none'style={{outline:"none"}}
            value={value.firstname} onChange={handleChange}/>
 
            <label className='w-50 fw-semibold'>{secondname}</label>
            <input type={secondnametype} 
            className='w-50 p-1 rounded-1 border border-none'style={{outline:"none"}}
            value={value.secondname} onChange={secondchange}/>
            </div>

            <div className='d-flex gap-3 w-100 mb-2'>
         
            <label className='w-50 fw-semibold'>{Email}</label>
            <input type={Emailtype} 
            className='w-50 p-1 rounded-1 border border-none'style={{outline:"none"}}
            value={value.email} />

            <label className='w-50 fw-semibold'>{Dob}</label>
            <input type={DOBtype} 
            className='w-50 p-1 rounded-1 border border-none'style={{outline:"none"}}/>
            
            </div>

            <div className='w-100 d-flex gap-3 mb-2'>

            <label className='w-50 fw-semibold'>{password}</label>
            <input type={security} 
            className='w-50 p-1 rounded-1 border border-none'style={{outline:"none"}}/>

            <label className='w-50 fw-semibold'>{color}</label>
            <input type={colortype} 
            className='w-50 p-1 rounded-1 border border-none'style={{outline:"none"}}/>
            </div>
            <div className='d-flex justify-content-end'>
            <button onClick={()=>setValue("")}>{button}</button>
            </div>
      </div>
    </div>
  )
}

export default Button
