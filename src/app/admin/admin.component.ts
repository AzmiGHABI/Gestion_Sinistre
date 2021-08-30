import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { AdminService } from 'app/admin.service';
import { Admin } from './admin';

@Component({
  selector: 'admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit {

  admins : Admin[] = [];
  constructor(private AdminService :AdminService) { }

  ngOnInit(): void {
    this.getAdmins();
  }

  public getAdmins():void
  {
    this.AdminService.getAdmins().subscribe((response:Admin[])=>
    {
      console.log("res",response);
      this.admins = response;

    },
    (error: HttpErrorResponse) => {alert(error.message);}
    )
    ;
  }
  
  public onAddAdmin(addForm: NgForm): void {
    document.getElementById('add-admin-form').click();
    this.AdminService.addAdmin(addForm.value).subscribe(
      (response: Admin) => {
        console.log(response);
        this.getAdmins();
        addForm.reset();
      },
      (error: HttpErrorResponse) => {
        alert(error.message);
        addForm.reset();
      }
    );
  }

  public onUpdateEmloyee(admin: Admin): void {
    this.AdminService.updateAdmin(admin).subscribe(
      (response: Admin) => {
        console.log(response);
        this.getAdmins();
      },
      (error: HttpErrorResponse) => {
        alert(error.message);
      }
    );
    }


  public onDeleteAdmin(id: number): void {
    this.AdminService.deleteAdmin(id).subscribe(
      (response: void) => {
        console.log(response);
        this.getAdmins();
      },
      (error: HttpErrorResponse) => {
        alert(error.message);
      }
    );}
  
  public onOpenModal (admin :Admin , mode: string):void
  { 
    const container =document.getElementById('main-container');
    const button = document.createElement('button');
    button.type='button';
    button.style.display='none';
   button.setAttribute('data-toggle','modal');
    if(mode === 'add')
    {
      button.setAttribute('data-target','#addAdminModal');
    }
    if(mode === 'edit')
    {
      button.setAttribute('data-target','#updateAdminModal');
    }
    if(mode === 'delete')
    {
      button.setAttribute('data-target','#deleteAdminModal');
    }
    container.appendChild(button);
    button.click();
  }



}
