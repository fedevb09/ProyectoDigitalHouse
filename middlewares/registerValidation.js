const { check } =require ('express-validator');
// Validaciones básicas, no valida las imágenes //
const errors =[
    check('fullName').notEmpty().withMessage('Tienes que ingresar tu nombre'),
    check('email')
        .notEmpty().withMessage('Tienes que ingresar tu correo electrónico').bail()
        .isEmail().withMessage('Tienes que ingresar un correo válido'),
    check('password')
        .notEmpty().withMessage('Ingresa una contraseña').bail()
        .isLength({min:6}).withMessage('La contraseña debe tener al menos 6 caractéres'),
    check('birthDate').notEmpty().withMessage('Seleccionan tu fecha de nacimiento')
]

module.exports = errors;