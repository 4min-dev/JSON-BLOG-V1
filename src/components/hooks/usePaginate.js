import { useMemo } from 'react'

export const usePaginate = (totalPages) => {
    const result = new Array()
    const resultMath = useMemo(() => {
        for(let i = 0; i<totalPages; i++) {
            result.push(i+1)
        
        }
        return result
    },[totalPages])
return resultMath
}
