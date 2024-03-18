import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'template-forms';
  uname: string = '';
  firstname:string='';
  lastname:string='';
  date:string='';
  gmail:string='';
  street:string='';
  state:string='';
  town:string='';
  pinCode:string='';
  form_data(form: NgForm) {
    this.firstname=form.value.fname;
    this.lastname=form.value.lname;
    this.gmail=form.value.email;
    this.date=form.value.dob;
    this.uname=form.value.username;
    this.street=form.value.address.street1;
    this.town=form.value.address.city;
    this.pinCode=form.value.address.pin;
    this.state=form.value.address.country;
    form.reset();
  }
  generateUserName(form: NgForm) {
    let username: string = '';
    username += form.value.fname.slice(0, 5);
    username += form.value.lname.slice(0, 3);
    username += new Date(form.value.dob).getFullYear();
    /*form.setValue({
      fname:'Radha',
      lname:'Yadav',
      email:'radha@gmail.com',
      phone:'6207166176',
      dob:'2022-02-20',
      gender:'female',
      username:username,
      address:
      {
      street1:'mumbai',
      street2:'',
      country:'India',
      city:'maharastra',
      region:'sea',
      pin:'824001',
    }
    });*/
    form.control.patchValue({
      username: username,
    });
  }
}
