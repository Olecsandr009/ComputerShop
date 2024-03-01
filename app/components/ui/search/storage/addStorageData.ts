import { getStorageData } from "./getStorageData";

export function addStorageData(data:string):boolean {
    try {
        let searchStorage = getStorageData('searchHistory')
        
        if(!searchStorage) searchStorage = []
        
        for(let item in searchStorage) {
            if(item == data) return true
        }
        
        searchStorage.push(data)
        localStorage.searchHistory = JSON.stringify(searchStorage)
        return true
        
    } catch(e) {
        console.log(e)
        return false
    }
}