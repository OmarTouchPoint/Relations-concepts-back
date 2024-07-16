import { Schema, model } from "mongoose";

// Definición del esquema de Concepts
const ConceptsSchema = new Schema({
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
const PageInfoSchema = new Schema({
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
const PageInfo = model('PageInfo', PageInfoSchema);

// Exportación del modelo PageInfo
export {
    PageInfo
};
