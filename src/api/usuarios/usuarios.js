// pages/api/usuarios.js

import {
    getUsuarios,
    getUsuarioById,
    createUsuario,
    updateUsuario,
    deleteUsuario,
  } from './querys';
  
  export default async function handler(req, res) {
    const { method, query } = req;
    const usuarioId = query.id;
  
    switch (method) {
      case 'GET':
        if (usuarioId) {
          const usuario = await getUsuarioById(usuarioId);
          res.status(200).json(usuario);
        } else {
          const usuarios = await getUsuarios();
          res.status(200).json(usuarios);
        }
        break;
  
      case 'POST':
        const { nombre, correoElectronico, contraseña, rol } = req.body;
        const nuevoUsuarioId = await createUsuario(nombre, correoElectronico, contraseña, rol);
        res.status(201).json({ id: nuevoUsuarioId });
        break;
  
      case 'PUT':
        const { nombre: updatedNombre, correoElectronico: updatedCorreoElectronico, contraseña: updatedContraseña, rol: updatedRol } = req.body;
        const updated = await updateUsuario(usuarioId, updatedNombre, updatedCorreoElectronico, updatedContraseña, updatedRol);
        if (updated) {
          res.status(200).json({ success: true });
        } else {
          res.status(404).json({ success: false, error: 'Usuario no encontrado' });
        }
        break;
  
      case 'DELETE':
        const deleted = await deleteUsuario(usuarioId);
        if (deleted) {
          res.status(200).json({ success: true });
        } else {
          res.status(404).json({ success: false, error: 'Usuario no encontrado' });
        }
        break;
  
      default:
        res.status(405).end(); 
        break;
    }
  }
  