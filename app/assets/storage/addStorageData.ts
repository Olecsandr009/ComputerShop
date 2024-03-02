import { getStorageData } from "./getStorageData";

export function addStorageData(data:string, storage:string) {
    try {
        let currentStorage = getStorageData(storage)

        if(!currentStorage) currentStorage = []

        for(let i = 0; i < currentStorage.length; i++) {
            if(currentStorage[i] == data) return true
        }

        currentStorage.push(data)
        localStorage[storage] = JSON.stringify(currentStorage)
        return true
    } catch(e) {
        console.log(e)
        return false
    }
}