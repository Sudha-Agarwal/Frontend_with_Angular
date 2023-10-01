import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-mobile-detail',
  templateUrl: './mobile-detail.component.html',
  styleUrls: ['./mobile-detail.component.css']
})
export class MobileDetailComponent implements OnInit{
  constructor(private route:ActivatedRoute, private router: Router){}
productId!:string | null;

  ngOnInit(): void {
    this.productId = this.route.snapshot.paramMap.get('id');
    //you can get data from backend for the particular selected product

  }

  navigateToMenu(){
    //Manual Navigation
    const queryParams = {category:'Mobiles'};
    this.router.navigate(['/products/Mobiles'],{queryParams});

  }

  

}
