"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = require("react");
const useHandlers = () => {
    const id = (0, react_1.useId)();
    return {
        id
    };
};
exports.default = useHandlers;
