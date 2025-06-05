import { useState } from "react";

export default function useInput(initalValue, validationFn) {
  const [value, setValue] = useState(initalValue);
  const [isEdited, setIsEdited] = useState(false);

  const IsValid = validationFn(value);

  function handleInputBlur() {
    setIsEdited(true);
  }

  function handleInputChange(e) {
    setValue(e.target.value);
    setIsEdited(false);
  }

  return {
    value,
    handleInputChange,
    handleInputBlur,
    hasError: isEdited && !IsValid,
  };
}
