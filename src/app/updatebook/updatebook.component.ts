import { HttpErrorResponse } from '@angular/common/http';
import { error } from '@angular/compiler/src/util';
import { Component, ErrorHandler, OnInit } from '@angular/core';
import { throwError } from 'rxjs';
import { AppService } from '../app.service';

@Component({
  selector: 'app-updatebook',
  templateUrl: './updatebook.component.html',
  styleUrls: ['./updatebook.component.css']
})
export class UpdatebookComponent implements OnInit {

  constructor(public _studentService :AppService) { }
  title : string="Update Book Details";
  msgTrue = false;
  ngOnInit(): void {
  }
  updatebook(form: any){
    console.log(form.value.id);
    console.log(form.value.title);
    console.log(form.value.author);
    console.log(form.value.description);
    const newData = {id:form.value.id,title:form.value.title,author:form.value.author,description:form.value.description};
    this._studentService.updatebook(form.value.id,newData).subscribe(data =>{
        console.log(data);
        window.alert("Book updated Successfully");
        window.location.reload();
      });

   }

}
