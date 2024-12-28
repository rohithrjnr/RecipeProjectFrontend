import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class RecipeService {
  private apiUrl = 'http://127.0.0.1:5000/recipes';

  constructor(private http: HttpClient) {}

  getRecipes(): Observable<any[]> {
    return this.http.get<any[]>(this.apiUrl);
  }

  getRecipe(id: string): Observable<any> {
    return this.http.get<any>(`${this.apiUrl}/${id}`);
  }

  addRecipe(recipe: any): Observable<any> {
    return this.http.post<any>(this.apiUrl, recipe);
  }

  addComment(recipeId: string, comment: string): Observable<any> {
    return this.http.post<any>(`${this.apiUrl}/${recipeId}/comments`, { content: comment });
  }

  addRating(recipeId: string, rating: number): Observable<any> {
    return this.http.post<any>(`${this.apiUrl}/${recipeId}/ratings`, { rating });
  }
}
