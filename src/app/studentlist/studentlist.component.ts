import { Component, OnInit } from '@angular/core';
import { AppService } from '../app.service';
@Component({
  selector: 'app-studentlist',
  templateUrl: './studentlist.component.html',
  styleUrls: ['./studentlist.component.css'],
  providers:[AppService]
})
export class StudentlistComponent implements OnInit {


  constructor(public _studentService :AppService){}
  title :string="List of Books";
  studentList :any;

  ngOnInit() {
    this.studentList = this._studentService.getContacts().subscribe(data =>{
      this.studentList = data;
    })
  }

  deleteBook(bookid: number){
    this._studentService.deletebook(bookid).subscribe(data =>{
      console.log(data);
      window.alert("deleted Successfully");
      window.location.reload();
    });

    
  }
}
