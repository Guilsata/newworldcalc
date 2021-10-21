import { Component } from '@angular/core';
import { Item, Composant } from './interfaces/item.interface';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  listitems: Item[] = [
    {
      name: 'lingot de fer',
      recette: [],
    },
    {
      name: 'charbon',
      recette: [],
    },
  ];
}
