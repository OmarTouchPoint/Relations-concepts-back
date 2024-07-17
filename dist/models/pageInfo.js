"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PageInfo = void 0;
const mongoose_1 = require("mongoose");
// Definición del esquema de Concepts
const ConceptsSchema = new mongoose_1.Schema({
    concept1: {
        type: String,
        required: true
    },
    concept2: {
        type: String,
        required: true
    }
});
// Definición del esquema de PageInfo, que incluye el subesquema ConceptsSchema
const PageInfoSchema = new mongoose_1.Schema({
    concepts: [ConceptsSchema], // Aquí se utiliza ConceptsSchema como un array de subdocumentos
    instructions: {
        type: String,
        required: true
    },
    pageTitle: {
        type: String,
        required: true
    }
});
// Creación del modelo PageInfo basado en PageInfoSchema
const PageInfo = (0, mongoose_1.model)('PageInfo', PageInfoSchema);
exports.PageInfo = PageInfo;
