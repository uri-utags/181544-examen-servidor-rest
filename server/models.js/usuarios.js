const mongoose = require ('mongoose');

let Schema = mongoose.Schema;

let usuariosSchema = new Schema({
    nombre: {
        type: String,
        required: [true, 'El nombre es necesario']
    },
    primer_apellido: {
        type: String,
        required: true,
    },
    segundo_apellido: {
        type: String,
        required: true,
    },
    edad: {
        type: Number,
        required: [true, 'El nombre es necesario']
    },
    curp: {
        type: String,
        required: true,
        unique: true
    },
    telefono: {
        type: Number,
        required: [true, 'El telefono es necesario']
    },
    mail: {
        type: String,
        required: [true, 'El correo es necesario'],
        unique: true
    },
    activo: {
        type: Boolean,
        default: true
    }
});

module.exports = mongoose.model('Usuarios', usuariosSchema);