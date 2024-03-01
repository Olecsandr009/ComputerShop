export function getStorageData(storage:string): string[] {
    try {
        const result = localStorage[storage]
        console.log(result, "result")
        const storageData: string[] = JSON.parse(result)
        return storageData
    } catch(e) {
        console.log("bla")
        return []
    }
}