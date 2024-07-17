"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.router = void 0;
const express_1 = require("express");
const express_validator_1 = require("express-validator");
const validateCamps_1 = require("../middlewares/validateCamps");
const pageIdValidation_1 = require("../helpers/pageIdValidation");
const pageInfo_1 = require("../controllers/pageInfo");
const router = (0, express_1.Router)();
exports.router = router;
router.get("/", ((req, res) => {
    res.send('Hola Mundo');
    console.log('hola mundo');
}));
//Get a specific page info
router.get('/:id', [
    (0, express_validator_1.check)('id', 'the id is not valid').isMongoId(),
    (0, express_validator_1.check)('id').custom(pageIdValidation_1.pageIdValidation),
    validateCamps_1.validateCamps
], pageInfo_1.getPageInfo);
router.patch('/:id', [
    (0, express_validator_1.check)('id', 'the id is not valid').isMongoId(),
    (0, express_validator_1.check)('id').custom(pageIdValidation_1.pageIdValidation),
    (0, express_validator_1.checkSchema)({
        instructions: { isString: true, errorMessage: 'Page instructions are required' },
        pageTitle: { isString: true, errorMessage: 'Page title is required' },
        concepts: { isArray: true, isEmpty: false, errorMessage: 'The Concepts field must not be empty' }
    }),
    validateCamps_1.validateCamps
], pageInfo_1.patchPageInfo);
