import { Injectable } from '@angular/core';

import { Observable } from 'rxjs';
import { sample_foods, sample_tags } from 'src/data';
import { FOODS_BY_SEARCH_URL, FOODS_BY_TAG_URL, FOODS_TAGS_URL, FOODS_URL, FOOD_BY_ID_URL } from '../shared/constants/urls';
import { Food } from '../shared/models/Food';
import { Tag } from '../shared/models/Tag';
import axios from 'axios';

@Injectable({
  providedIn: 'root'
})
// export class FoodService {
  // getAll(): Food[] {
  //   throw new Error('Method not implemented.');
  // }

  // constructor(private http:HttpClient) { }

  // getAll(): Observable<Food[]> {
  //   return this.http.get<Food[]>(FOODS_URL);
  // }

  // getAllFoodsBySearchTerm(searchTerm: string) {
  //   return this.http.get<Food[]>(FOODS_BY_SEARCH_URL + searchTerm);
  // }

  // getAllTags(): Observable<Tag[]> {
  //   return this.http.get<Tag[]>(FOODS_TAGS_URL);
  // }

  // getAllFoodsByTag(tag: string): Observable<Food[]> {
  //   return tag === "All" ?
  //     this.getAll() :
  //     this.http.get<Food[]>(FOODS_BY_TAG_URL + tag);
  // }

  // getFoodById(foodId:string):Observable<Food>{
  //   return this.http.get<Food>(FOOD_BY_ID_URL + foodId);
  // }

    // getAll(): Food[]{
  //   return sample_foods;
  // }
  export class FoodService {
  constructor (){}

  
  getall =async () => {

    const {data} = await axios.get('/api/foods');
    console.log(" calling data " , data);
    return data;
    
  };

}

export const getall =async () => {

  const {data} = await axios.get('/api/foods');
  console.log(" calling data " , data);
  return data;
  
};

