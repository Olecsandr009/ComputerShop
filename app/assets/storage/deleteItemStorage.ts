export function deleteItemStorage(item:string, storage:string): boolean {
    try {
        const json = localStorage[storage]
        const storageData:string[] = JSON.parse(json)

        storageData.splice(storageData.indexOf(item))

        localStorage[storage] = JSON.stringify(storageData)
        return true
    } catch(e) {
        console.log(e)
        return false
    }
}