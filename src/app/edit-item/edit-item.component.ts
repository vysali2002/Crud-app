import { Component, OnInit } from '@angular/core';
import { fruitModel } from '../fruits.model';
import { ApiService } from '../services/api.service';
import { ActivatedRoute, Router } from '@angular/router';
import { ResourceLoader } from '@angular/compiler';

@Component({
  selector: 'app-edit-item',
  templateUrl: './edit-item.component.html',
  styleUrls: ['./edit-item.component.css']
})
export class EditItemComponent implements OnInit {
  fruit:fruitModel={}
  constructor(private api:ApiService,private route:ActivatedRoute,private router:Router){}
  ngOnInit(): void {
    this.route.params.subscribe((result:any)=>{
      const {id}=result
      this.getItemDetails(id)
          })
}

getItemDetails(id:any){
  this.api.getAItemAPI(id).subscribe((result:any)=>{
    this.fruit=result
  })
}
updateItem(){
  this.api.updateItemAPI(this.fruit).subscribe((result:any)=>{
    console.log(result);
    this.router.navigateByUrl('/dashboard')
    
  })
}

}
