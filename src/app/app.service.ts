import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class AppService {

  constructor(private httpClient :HttpClient) { }

  getContacts(){
    return this.httpClient.get('https://localhost:44394/api/Books/FetchAllBooks');
  }
 
  createbook(newData: { id: number; title: string; author: string; description: string; }){
    const httpHeaders = new HttpHeaders();
    httpHeaders.append('content-type','application/json');
    return this.httpClient.post('https://localhost:44394/api/Books/CreateBook',newData,{headers:httpHeaders});
  }

  deletebook(bookid: number){
    const del = 'https://localhost:44394/api/Books/Delete/'+bookid;
    return this.httpClient.delete(del);
  }

  updatebook(bookid: number, updateData: { id: number; title: string; author: string; description: string; }){
      const upd= 'https://localhost:44394/api/Books/UpdateBook/'+bookid;
      return this.httpClient.put(upd,updateData);
  }
}
