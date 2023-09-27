import {useCallback, useEffect, useState} from "react";

export const useThrottle = (fn: () => void, delay: number) => {
    const [canCall, setCanCall] = useState(true);

    const throttledFn = useCallback(() => {
        if (canCall) {
            setCanCall(false);
            fn();
            setTimeout(() => {
                setCanCall(true);
            }, delay);
        }
    }, [canCall, fn, delay]);

    useEffect(() => {
        return () => {
            setCanCall(true);
        };
    }, []);

    return {throttledFn, canCall};
}