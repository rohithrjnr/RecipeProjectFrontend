import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { RecipeService } from '../recipe.service';

@Component({
  selector: 'app-recipe-detail',
  templateUrl: './recipe-detail.component.html',
  styleUrls: ['./recipe-detail.component.css']
})
export class RecipeDetailComponent implements OnInit {
  recipe: any;
  newComment: string = '';
  newRating: number = 0;

  constructor(
    private route: ActivatedRoute,
    private recipeService: RecipeService
  ) {}

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id');
    this.loadRecipe(id);
  }

  loadRecipe(id: string | null) {
    if (id) {
      this.recipeService.getRecipe(id).subscribe((data) => {
        this.recipe = data;
      });
    }
  }

  addComment() {
    if (this.newComment.trim()) {
      this.recipeService.addComment(this.recipe.id, this.newComment).subscribe(() => {
        this.loadRecipe(this.recipe.id); // Reload the recipe to show new comment
        this.newComment = '';
      });
    }
  }

  addRating() {
    if (this.newRating > 0) {
      this.recipeService.addRating(this.recipe.id, this.newRating).subscribe(() => {
        this.loadRecipe(this.recipe.id); // Reload the recipe to show new rating
        this.newRating = 0;
      });
    }
  }
}
