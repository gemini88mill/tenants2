import { useCallback, useEffect, useState } from "react";

export const useValidity = (value: string, pattern: RegExp) => {
  const [isInvalid, setIsInvalid] = useState(false);

  const checkValidity = useCallback((value: string) => {
    return value.match(pattern) || value === "" 
      ? setIsInvalid(false)
      : setIsInvalid(true);
  }, [pattern]);

  // checks the validity of the email after 500ms of inactivity
  useEffect(() => {
    if (!value || value === "") return setIsInvalid(false);

    const timeoutid = setTimeout(() => {
      checkValidity(value);
    }, 500);

    return () => clearTimeout(timeoutid);
  }, [checkValidity, value]);

  return isInvalid;
};