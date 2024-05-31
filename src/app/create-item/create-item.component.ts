import { Component, OnInit } from '@angular/core';
import { fruitModel } from '../fruits.model';
import { ApiService } from '../services/api.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-create-item',
  templateUrl: './create-item.component.html',
  styleUrls: ['./create-item.component.css']
})
export class CreateItemComponent implements OnInit {
  constructor(private api:ApiService, private router:Router){}
  fruit:fruitModel={}
  allitems:any=[]
  ngOnInit(): void {
      this.api.getItemAPI().subscribe((result:any)=>{
       this.allitems=result
      })
  }

  AddItem(){
    const existingUser = this.allitems.find((item:any)=>item.id==this.fruit.id)
     if(existingUser){
      alert("Id is already exist!! use unique id to add item")
     }
     else{
      this.api.saveItemAPI(this.fruit).subscribe({
        next: (result: any) => {
          console.log(result);
          alert("Successfully added!!")
          this.router.navigateByUrl('')

        }
      
      })
     }
  }

}
