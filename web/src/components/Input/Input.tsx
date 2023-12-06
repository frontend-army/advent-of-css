import { useState } from 'react'
import Icon from '../Icon/Icon'

const Input = ({
  name,
  label,
  type = 'text',
  required = false,
  placeholder = '',
  value,
  ...rest
}) => {
  const [showPassword, setShowPassword] = useState(false)
  return (
    <div className="relative mb-6 bg-white">
      <input
        type={showPassword ? 'text' : type}
        id="floating-input"
        placeholder=" "
        className="peer block w-full p-4 invalid:bg-red-400"
        value={value}
        {...rest}
      />
      <label
        htmlFor="floating-input"
        className="absolute left-4 top-4 font-semibold text-gray-700 transition-all peer-invalid:text-white peer-focus:top-0  peer-focus:text-sm peer-focus:peer-valid:text-green-500"
      >
        {label}
      </label>
      {type === 'password' && (
        <button
          type="button"
          className="absolute right-4 top-4 bg-green-500 text-gray-700"
          onClick={() => setShowPassword((prev) => !prev)}
        >
          <Icon id={showPassword ? 'eyeOpened' : 'eyeClosed'} />
        </button>
      )}
    </div>
  )
}

export default Input
