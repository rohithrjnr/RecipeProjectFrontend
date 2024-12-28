import { Component } from '@angular/core';
import { RecipeService } from '../recipe.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add-recipe',
  templateUrl: './add-recipe.component.html',
  styleUrls: ['./add-recipe.component.css']
})
export class AddRecipeComponent {
  title = '';
  description = '';
  ingredients = '';
  steps = '';
  category = '';
  image_url = '';

  constructor(private recipeService: RecipeService, private router: Router) {}

  addRecipe(): void {
    const newRecipe = {
      title: this.title,
      description: this.description,
      ingredients: this.ingredients,
      steps: this.steps,
      category: this.category,
      image_url: this.image_url
    };

    this.recipeService.addRecipe(newRecipe).subscribe(() => {
      this.router.navigate(['/']);
    });
  }
}
