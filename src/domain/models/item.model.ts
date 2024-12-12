export class Item {
  id: number;
  name: string;
  completed: boolean;

  constructor(id: number, name: string, completed: boolean = false) {
    this.id = id;
    this.name = name;
    this.completed = completed;
  }
}
