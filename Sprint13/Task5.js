const pizzaMenu = {
    SIZE_S: { param: "SIZE_S", price: 60, calorie: 300 },
    SIZE_M: { param: "SIZE_M", price: 90, calorie: 450 },
    SIZE_L: { param: "SIZE_L", price: 110, calorie: 600 },
    KIND_MEAT: { param: "KIND_MEAT", price: 55, calorie: 230 },
    KIND_FISH: { param: "KIND_FISH", price: 70, calorie: 150 },
    KIND_CHEESE: { param: "KIND_CHEESE", price: 50, calorie: 200 },
    KIND_VEGETARIAN: { param: "KIND_VEGETARIAN", price: 35, calorie: 50 },
    INGREDIENT_TOMATOES: { param: "INGREDIENT_TOMATOES", price: 15, calorie: 5 },
    INGREDIENT_PEPPER: { param: "INGREDIENT_PEPPER", price: 18, calorie: 5 },
    INGREDIENT_BACON: { param: "INGREDIENT_BACON", price: 25, calorie: 40 },
    INGREDIENT_OLIVES: { param: "INGREDIENT_OLIVES", price: 20, calorie: 0 }
  };
  
  class PizzaMaker {
    constructor(size, type) {
      this.type = type;
      this.size = size;
      this.ingredients = [this.size, this.type];
    }
  
    addIngredient(ingredient) {
      if (this.ingredients.includes(ingredient)) {
        console.log(`Such an ingredient already exists!`);
      } else {
        this.ingredients.push(ingredient);
        console.log(`${ingredient.param} has been added`);
      }
    }
  
    deleteIngredient(ingredient) {
      if (this.ingredients.includes(ingredient)) {
        this.ingredients.splice(this.ingredients.indexOf(ingredient), 1);
        console.log(`${ingredient.param} has been deleted`);
      }
    }
    getIngredients() {
      return this.ingredients.slice().splice(2);
    }
  
    getSize() {
      return this.size.param;
    }
  
    getKind() {
      return this.type.param;
    }
  
    calculatePrice() {
      return this.ingredients.reduce(
        (total, ingredient) => total + ingredient.price,
        0
      );
    }
  
    calculateCalories() {
      return this.ingredients.reduce(
        (total, ingredient) => total + ingredient.calorie,
        0
      );
    }
  }