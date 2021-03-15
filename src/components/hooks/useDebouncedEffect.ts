import { DependencyList, useCallback, useEffect } from 'react'

const useDebouncedEffect = (
    effect: (...args: any[]) => any,
    delay: number,
    deps: DependencyList
) => {
    const callback = useCallback(effect, deps)

    useEffect(() => {
        const handler = setTimeout(() => {
            callback()
        }, delay)

        return () => {
            clearTimeout(handler)
        }
    }, [callback, delay])
}

export default useDebouncedEffect
