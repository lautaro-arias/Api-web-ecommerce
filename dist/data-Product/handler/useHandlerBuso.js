"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.useHandlerBuso = void 0;
const buso_1 = require("../buso");
const react_1 = require("react");
const useHandlerBuso = () => {
    const [products, setProducts] = (0, react_1.useState)(buso_1.busoProducts);
    const handleRemoveProduct = (id) => {
        const updatedProducts = products.filter((product) => product.id !== id);
        setProducts(updatedProducts);
    };
    return {
        products,
        setProducts,
        handleRemoveProduct
    };
};
exports.useHandlerBuso = useHandlerBuso;
