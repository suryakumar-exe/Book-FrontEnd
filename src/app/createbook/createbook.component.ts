import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { AppService } from '../app.service';
@Component({
  selector: 'app-createbook',
  templateUrl: './createbook.component.html',
  styleUrls: ['./createbook.component.css']
})
export class CreatebookComponent{
  msgTrue = false;
  title = 'Create Book Details';
  constructor(public _studentService :AppService){}
  
  addBook(form: any){
      //const newData = {id:10,title:"New Tech",author:"Google",description:"Techo"};
      console.log(form.value.id);
      console.log(form.value.title);
      console.log(form.value.author);
      console.log(form.value.description);
      const newData = {id:form.value.id,title:form.value.title,author:form.value.author,description:form.value.description};
      this._studentService.createbook(newData).subscribe(data=>{
        console.log(data);
        this.msgTrue =true;
      window.alert("Book Created Successfully");
      window.location.reload();
      });
   }


  //  onSubmit(formData: { [x: string]: any; }) {
  
  //   console.log("This is form log");
  // }
}
