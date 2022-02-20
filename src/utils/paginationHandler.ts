export const paginationHandler = (inputArray: any[], perChunk: number) => {

    return inputArray.reduce((resultArray, item, index) => { 
        const chunkIndex = Math.floor(index/perChunk)
        
        if(!resultArray[chunkIndex]) {
            resultArray[chunkIndex] = [] // start a new chunk
        }
        
        resultArray[chunkIndex].push(item)
        
        return resultArray
        }, [])
      
}

export const pageHandler = (activePage: number, direction: string, length: number) => {

    switch(direction) {
        case 'next':
            if (activePage !== length) {
               return  activePage + 1
            }
        return activePage
        case 'prev':
            if (activePage !== 1) {
                return activePage -1
            }
        return activePage
        default:
            return activePage
    }

}