import { useEffect, useState } from "react";

export default function useDebounce(value: string, delay: number) {
    const [debounceState, setDebounceState] = useState(value);

    useEffect(() => {
        const handler = setTimeout(() => {
            setDebounceState(value)
        }, delay)

        return () => {
            clearTimeout(handler)
        }
    }, [value])

    return debounceState
}