import React from 'react'

export const FormField = ({ labelName, type, name, value, placeholder, handleChange, isSurpriseMe, handleSurpriseMe }) => {



  return (
    <div>
      <div className='flex items-center gap-2 mb-2'>
        <label htmlFor={name} className="block text-sm font-medium text-gray-900">
          {labelName}
        </label>
        {isSurpriseMe && (
          <button type='button' className='font-semibold text-xs bg-[#ececf1] py-1 px-2 rounded-[5px] text-black' onClick={handleSurpriseMe}>Surprise me</button>
        )}
      </div>
      <input type={type} value={value} id={name} name={name} placeholder={placeholder} onChange={handleChange} className='bg-gray-50 border border-gray-300 text-gray-900 rounded-lg focus:ring-[#4649ff] focus:border-[#4649ff] outline-none block w-full p-3' />
    </div>
  )
}
