<<<<<<< HEAD
import React from 'react'

function Button({text,onClick,className="",type='button'}) {
  return (
    <button type={type} onClick={onClick} className={`bg-pink-500 hover:bg-pink-600 text-white px-4 py-2 rounded ${className}`}>
        {text}
    </button>
  )
}

=======
import React from 'react'

function Button({text,onClick,className="",type='button'}) {
  return (
    <button type={type} onClick={onClick} className={`bg-pink-500 hover:bg-pink-600 text-white px-4 py-2 rounded ${className}`}>
        {text}
    </button>
  )
}

>>>>>>> 397bf7e0ff0d106e5d3c0f654ea24a3df1e6a119
export default Button