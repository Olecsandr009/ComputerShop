export function clearStorageData(storage:string): boolean {
    try {
        localStorage.removeItem(storage)
        return true
    } catch(e) {
        console.log(e)
        return false
    }
}