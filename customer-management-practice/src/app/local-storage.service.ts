import { Injectable, Inject } from '@angular/core';
import { LOCAL_STORAGE, StorageService } from 'ngx-webstorage-service';

const STORAGE_KEY = 'local_todolist';
@Injectable()
export class LocalStorageService {
  anotherTodolist = [];
  constructor(@Inject(LOCAL_STORAGE) private storage: StorageService) { }

  public storeOnLocalStorage(taskTitle: string): void {
       const currentTodoList = this.storage.get(STORAGE_KEY) || [];
       currentTodoList.push({
           title: taskTitle,
           isChecked: false
       });
       this.storage.set(STORAGE_KEY, currentTodoList);
       console.log(this.storage.get(STORAGE_KEY) || 'LocaL storage is empty');
  }
}
