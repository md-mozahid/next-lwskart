const CommonInput = ({
  label = '',
  required = false,
  onChange,
  value = '',
  disabled = false,
}) => {
  return (
    <div>
      <label for="company" className="text-gray-600">
        {label}
      </label>
      <input
        required={required}
        onChange={onChange}
        disabled={disabled}
        value={value}
        type="text"
        name="company"
        id="company"
        className="input-box"
      />
    </div>
  )
}

export default CommonInput
