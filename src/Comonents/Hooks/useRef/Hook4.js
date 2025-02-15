import React, { useRef } from 'react'

function Hook4() {

    const inputRef = useRef('')

    const handlefocus =()=>{
        inputRef.current.focus()
    }
  return (
    <div>
      <input ref={inputRef}type='text' />
      <button onClick={handlefocus}>Click to focus</button>
    </div>
  )
}

export default Hook4
