import { Component } from '@angular/core';
import { FoodService } from 'src/app/service/food.service';
import { Food } from 'src/app/shared/models/Food';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  foods: Food[] = [];

  constructor(private foodservice: FoodService) {}

  async ngOnInit(): Promise<void> {
    try {
      this.foods = await this.foodservice.getall();
    } catch (error) {
      console.error("Error fetching data", error);
    }
  }
}

