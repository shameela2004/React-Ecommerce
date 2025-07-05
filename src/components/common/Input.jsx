<<<<<<< HEAD
import React from 'react'

function Input({label,type="text",value,onChange,className="" ,placeholder=""}) {
  return (
    <div className='mb-4'>
        {label && <label className='text-sm block mb-1'>{label}</label>}
        <input type={type} onChange={onChange} value={value} placeholder={placeholder} className={`px-3 py-2 w-full border focus:outline-pink-500 rounded ${className}`}/>
    </div>
  )
}

=======
import React from 'react'

function Input({label,type="text",value,onChange,className="" ,placeholder=""}) {
  return (
    <div className='mb-4'>
        {label && <label className='text-sm block mb-1'>{label}</label>}
        <input type={type} onChange={onChange} value={value} placeholder={placeholder} className={`px-3 py-2 w-full border focus:outline-pink-500 rounded ${className}`}/>
    </div>
  )
}

>>>>>>> 397bf7e0ff0d106e5d3c0f654ea24a3df1e6a119
export default Input