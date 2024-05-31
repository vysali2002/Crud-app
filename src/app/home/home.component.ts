import { Component, OnInit } from '@angular/core';
import { ApiService } from '../services/api.service';
import { fruitModel } from '../fruits.model';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  p:number =1
  allitems:fruitModel[]=[]
ngOnInit(): void {
    this.getItem()
}
constructor(private api:ApiService){}
getItem(){
  this.api.getItemAPI().subscribe((result:any)=>{
   this.allitems=result.filter((fruit:any)=>fruit.id!=1)
  })
}
Delete(id:any){
 this.api.DeleteItem(id).subscribe((result:any)=>{
  this.getItem()
 })

}





}
