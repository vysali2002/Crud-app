import { HttpClient } from '@angular/common/http';
import { Injectable, OnInit } from '@angular/core';
import { fruitModel } from '../fruits.model';
import { ActivatedRoute, Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class ApiService  {

  fruit:fruitModel={}

  server_url="https://crud-app-server-1-ml8y.onrender.com"

  constructor(private http:HttpClient ,private router:Router) { }

  //login admin
  loginAPI(email:string,password:string){
    this.http.get(`${this.server_url}/fruits/1`).subscribe((result:any)=>{
      if(result.email==email&&result.password==password){
        sessionStorage.setItem("adminDetails",JSON.stringify(result))
        alert("Login Success")
        this.router.navigateByUrl('dashboard')

      }
    })
  }
  //create-item store
  saveItemAPI(fruit:fruitModel){
    return this.http.post(`${this.server_url}/fruits`,fruit)
  }
  //get item
  getItemAPI(){
    return this.http.get(`${this.server_url}/fruits`)
  }
  DeleteItem(id:any){
    return this.http.delete(`${this.server_url}/fruits/${id}`)
  }
  getAItemAPI(id:any){
    return this.http.get(`${this.server_url}/fruits/${id}`)
  }
  updateItemAPI(fruit:fruitModel){
    return this.http.put(`${this.server_url}/fruits/${fruit.id}`,fruit)
  }
  
}
