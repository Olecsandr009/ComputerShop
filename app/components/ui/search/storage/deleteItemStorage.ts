export function deleteItemStorage(item:string, storage:string): boolean {
    try {
        const json = localStorage[storage]
        const storageData:string[] = JSON.parse(json)

        for(let i = 0; i < storageData.length; i++) {
            if(storageData[i] == item) {
                storageData.splice(i)
            }
        }

        localStorage[storage] = storageData
        return true
    } catch(e) {
        console.log(e)
        return false
    }
}