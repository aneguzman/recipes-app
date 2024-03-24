import { EventEmitter } from '@angular/core';
import { Recipe } from './recipe.model';

export class RecipeService {
    onSelectedRecipe: EventEmitter<Recipe> = new EventEmitter<Recipe>();

    private recipes: Recipe[] = [
        new Recipe('A Rest Recipe', 'This is a simple test', 
        'https://www.foodandwine.com/thmb/YlgBj_G9a_psYSzA3gfU6gx9A3w=/750x0/filters:no_upscale():max_bytes(150000):strip_icc():format(webp)/bucatini-with-mushroom-ragu-dandelion-greens-and-tarragon-FT-RECIPE0421-3a5f0d29f7264f5e9952d4a3a51f5f58.jpg'),
        
        new Recipe('Another Rest Recipe', 'This is a simple test', 
        'https://www.foodandwine.com/thmb/YlgBj_G9a_psYSzA3gfU6gx9A3w=/750x0/filters:no_upscale():max_bytes(150000):strip_icc():format(webp)/bucatini-with-mushroom-ragu-dandelion-greens-and-tarragon-FT-RECIPE0421-3a5f0d29f7264f5e9952d4a3a51f5f58.jpg')
      
    ];

    getRecipes(): Recipe[] {
        return this.recipes.slice();
    }
}