const productsService = require('./services/products');
const configService = require('./services/config');

function main() {
    // console.log("Itens Listados:");

    // productsService.getFullName(1, 'Product A');
    // productsService.getFullName(2, 'Product B');
    // productsService.getFullName(3, 'Product C');

    // productsService.getProductLabel('Product A');
    // productsService.getProductLabel('Product B');
    // productsService.getProductLabel('Product C');

    console.log(configService.devArea);
    console.log(configService.client);
    console.log(productsService.productType);
};

main();