const productType = {
    type: "digital",
    tax: 0.05,
};

function doBreakLine() {
    console.log("\n");
};

function getFullName(codeId, productName) {
    console.log("Product: " + codeId + " - " + productName);
    doBreakLine();
};

function getProductLabel(productName) {
    console.log("Product: " + productName);
    doBreakLine();
};

module.exports = { getFullName, getProductLabel, productType };