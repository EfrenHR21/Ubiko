import express from 'express'
import {body} from 'express-validator'
import { 
    admin, 
    crear,
    guardar, 
    agregarImagen, 
    almacenarImagen,
    editar, guardarCambios, 
    eliminar, mostrarPropiedad, 
    enviarMensaje, verMensajes, cambiarEstado } from '../controllers/propiedadController.js'
import protegerRuta from '../middleware/protegerRuta.js'
import upload from '../middleware/subirImagen.js'
import usuarioAutenticado from '../middleware/usuarioAutenticado.js'

const router = express.Router()

router.get('/mis-propiedades', protegerRuta ,admin )
router.get('/propiedades/crear', protegerRuta, crear )
router.post('/propiedades/crear', protegerRuta,
    body('titulo').notEmpty().withMessage('El Título del Anuncio es Obligatorio'),
    body('descripcion').notEmpty().withMessage('La descripcion no puede ir vacía')
    .isLength({max:150}).withMessage('La descripción es muy larga, max 150 caracteres'),
    body('categoria').isNumeric().withMessage('Selecciona una categoria'),
    body('precio').notEmpty().withMessage('Indique un precio')
        .isNumeric().withMessage('El precio debe ser un valor numérico'),
    body('habitaciones').isNumeric().withMessage('Selecciona la cantidad de habitaciones'),
    body('estacionamiento').isNumeric().withMessage('Selecciona la cantidad de estacionamientos'),
    body('wc').isNumeric().withMessage('Selecciona la cantidad de baños'),
    body('ciudad').isNumeric().withMessage('Selecciona la ciudad del inmueble'),
    body('lat').notEmpty().withMessage('Ubica la propiedad en el mapa'),
    guardar )

router.get('/propiedades/agregar-imagen/:id', protegerRuta, agregarImagen)

router.post('/propiedades/agregar-imagen/:id', 
    protegerRuta,
    upload.single('imagen'),
    almacenarImagen
)

router.get('/propiedades/editar/:id', protegerRuta, editar)

router.post('/propiedades/editar/:id', protegerRuta,
    body('titulo').notEmpty().withMessage('El Título del Anuncio es Obligatorio'),
    body('descripcion').notEmpty().withMessage('La descripcion no puede ir vacía')
    .isLength({max:150}).withMessage('La descripción es muy larga, max 150 caracteres'),
    body('categoria').isNumeric().withMessage('Selecciona una categoria'),
    body('precio').notEmpty().withMessage('Indique un precio')
        .isNumeric().withMessage('El precio debe ser un valor numérico'),
    body('habitaciones').isNumeric().withMessage('Selecciona la cantidad de habitaciones'),
    body('estacionamiento').isNumeric().withMessage('Selecciona la cantidad de estacionamientos'),
    body('wc').isNumeric().withMessage('Selecciona la cantidad de baños'),
    body('lat').notEmpty().withMessage('Ubica la propiedad en el mapa'),
    guardarCambios )

// Ruta para eliminar
router.post('/propiedades/eliminar/:id', protegerRuta, eliminar)

//
router.put('/propiedades/:id', protegerRuta, cambiarEstado)

// Aréa Publica
router.get('/propiedad/:id', usuarioAutenticado, mostrarPropiedad)

// Almacenar los mensajes
router.post('/propiedad/:id',
    usuarioAutenticado,
    body('mensaje')
        .trim()
        .notEmpty().withMessage('El mensaje no puede estar vacío')
        .isLength({min: 20}).withMessage('El mensaje debe tener al menos 20 caracteres'),
    enviarMensaje
);
router.get('/mensajes/:id', protegerRuta, verMensajes)




export default router

