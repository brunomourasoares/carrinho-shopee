
import * as cartService from "./services/cart.js";
import { createItem } from "./services/item.js";

// Inicializando carrinho e lista de desejos
const myCart = [];
const myWhishList = [];

console.log("🛒 Welcome to the shopping cart!");

// Criando itens
const item1 = await createItem("HotWheels Ferrari", 20.99, 2);
const item2 = await createItem("HotWheels Lamborghini", 39.99, 3);

// Adicionando itens ao carrinho
await cartService.addItem(myCart, item1);
await cartService.addItem(myCart, item2);

// Removendo o item do carrinho
await cartService.removeItem(myCart, item1);
await cartService.removeItem(myCart, item2);

// Deletando item do carrinho
//await cartService.deleteItem(myCart, item1);

// Listando itens do carrinho
await cartService.listItems(myCart);

// Calculando total do carrinho
await cartService.calculateTotal(myCart);