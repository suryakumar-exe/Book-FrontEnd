import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class AppService {

  constructor(private httpClient :HttpClient) { }

  getContacts(){
    return this.httpClient.get('https://bookslibrary.azurewebsites.net/api/Books/FetchAllBooks');
  }
 
  createbook(newData: { id: number; title: string; author: string; description: string; }){
    const httpHeaders = new HttpHeaders();
    httpHeaders.append('content-type','application/json');
    return this.httpClient.post('https://bookslibrary.azurewebsites.net/api/Books/CreateBook',newData,{headers:httpHeaders});
  }

  deletebook(bookid: number){
    const del = 'https://bookslibrary.azurewebsites.net/api/Books/Delete/'+bookid;
    return this.httpClient.delete(del);
  }

  updatebook(bookid: number, updateData: { id: number; title: string; author: string; description: string; }){
      const upd= 'https://bookslibrary.azurewebsites.net/api/Books/UpdateBook/'+bookid;
      return this.httpClient.put(upd,updateData);
  }
}
