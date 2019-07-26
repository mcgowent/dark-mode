import useLocalStorage from "./useLocalStorage"
import { useEffect } from 'react'

const useDarkMode = () => {
    const [someValue, setSomeValue] = useLocalStorage('key')
    useEffect(() => {
        someValue ? document.body.classList.add("dark-mode") : document.body.classList.remove("dark-mode")
    }, [someValue]);
    return [someValue, setSomeValue]
}

export default useDarkMode