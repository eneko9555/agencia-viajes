import { Opinion } from "../models/Opiniones.js";

const guardarOpinion = async (req, res) => {

    // Validar form
    const { nombre, correo, mensaje } = req.body;

    const errores = [];

    if(nombre.trim() === ''){
        errores.push( { mensaje : 'El campo Nombre esta vacio' })
    }
    if(correo.trim() === ''){
        errores.push( { mensaje : 'El campo Correo esta vacio' })
    }
    if(mensaje.trim() === ''){
        errores.push( { mensaje : 'El campo Mensaje esta vacio' })
    }

    if(errores.length > 0){

        const opiniones = await Opinion.findAll();
        // Mostrar vista 
        res.render('opiniones', {
            pagina : 'Opiniones',
            errores,
            nombre,
            correo,
            mensaje,
            opiniones
        })
    }else {
        // Guardar en base de datos 
        try {
            await Opinion.create({
                nombre,
                correo,
                mensaje
            })

            res.redirect('/opiniones')

        } catch (error) {
            console.log(error);
        }
    }
}



export {
    guardarOpinion
}