// quais ações meu carrinho pode fazer?
// 1. Adicionar um item no carrinho
async function addItem(userCart, item) {
    userCart.push(item);
}
// 2. Remover um item no carrinho (diminuir a quantidade)
async function removeItem(userCart, item) {
    const index = userCart.findIndex((p) => p.name === item.name);
    if (index !== -1) {
        userCart[index].quantity -= 1;
        // Se a quantidade for 0, deletar o item
        if (userCart[index].quantity === 0) {
            deleteItem(userCart, item);
        }
    } else {
        console.log("Item not found in the cart.");
    }
}
// 3. Deletar um item no carrinho (remover completamente)
async function deleteItem(userCart, item) {
    const index = userCart.findIndex((p) => p.name === item.name);
    if (index !== -1) {
        userCart.splice(index, 1);
    }
}
// 4. Calcular o total do carrinho
async function calculateTotal(userCart) {
    console.log("\n💳 Total of your cart:")
    const result = userCart.reduce((total, item) => total + item.subtotal(), 0);
    return console.log("R$ " + result.toFixed(2));
}
// 5. Listar os itens do carrinho
async function listItems(userCart) {
    console.log("\n🎁 Items in your cart:");
    userCart.forEach((item, index) => {
        console.log(`${index + 1}. ${item.name} - R$ ${item.price} | ${item.quantity}x | Subtotal: R$ ${item.subtotal()}`);
    });
}

export {
    addItem,
    removeItem,
    deleteItem,
    calculateTotal,
    listItems,
}