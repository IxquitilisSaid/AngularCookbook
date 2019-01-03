import { Recipe } from './recipe.model';
import { EventEmitter, Injectable } from '@angular/core';
import { Ingredient } from '../shared/ingredient.model';
import { ShoppingListService } from '../shopping-list/shopping-list.service';

@Injectable()
export class RecipeService {
  recipeSelected = new EventEmitter<Recipe>();

  private recipes: Recipe[] = [
    new Recipe(
      'The Very-a Spicy-a Pizza!!!',
      'Mamma Mia! A tasty pizza!',
      // tslint:disable-next-line:max-line-length
      'https://www.bbcgoodfood.com/sites/default/files/recipe-collections/collection-image/2013/05/frying-pan-pizza-easy-recipe-collection.jpg',
      [
        new Ingredient('Tomatoe', 420),
        new Ingredient('The good kush', 4200)
      ]),
    new Recipe(
      'Very-a gut Schnitzel',
      'Ohh Ein Schnitzel!!',
      // tslint:disable-next-line:max-line-length
      'https://ichef.bbci.co.uk/images/ic/640x360/p01j2qmy.jpg',
      [
        new Ingredient('Meat', 2),
        new Ingredient('Schnitzel', 1),
        new Ingredient('Love', 10),
        new Ingredient('Inno, do I look like a cook??', 1)
      ])
  ];

  constructor(private slService: ShoppingListService) { }

  getRecipes() {
    // making an exact copy bc im paranoid
    return this.recipes.slice();
  }

  addIngredientsToShoppingList(ingredients: Ingredient[]) {
    this.slService.addIngredients(ingredients);
  }
}
