import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LocalStorageService<T> {

  constructor() { }

  getItem(itemName: string): T | null{
    let storageValue = localStorage.getItem(itemName) ?? ''
    if(storageValue.length) return JSON.parse(storageValue)
    return null
  }

  setItem(name: string, item: T | null){
    localStorage.setItem(name, JSON.stringify(item))
  }
}
