export interface Item {
  name: string;
  recette: Composant[];
}

export interface Composant {
  item: Item;
  number: number;
}
