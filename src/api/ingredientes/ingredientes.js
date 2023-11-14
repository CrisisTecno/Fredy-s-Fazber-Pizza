// pages/api/ingredientes.js

import {
    getIngredientes,
    getIngredienteById,
    createIngrediente,
    updateIngrediente,
    deleteIngrediente,
  } from './querys';
  
  export default async function handler(req, res) {
    const { method, query } = req;
    const ingredienteId = query.id;
  
    switch (method) {
      case 'GET':
        if (ingredienteId) {
          const ingrediente = await getIngredienteById(ingredienteId);
          res.status(200).json(ingrediente);
        } else {
          const ingredientes = await getIngredientes();
          res.status(200).json(ingredientes);
        }
        break;
  
      case 'POST':
        const { nombre, descripcion, cantidadEnStock, unidadDeMedida } = req.body;
        const nuevoIngredienteId = await createIngrediente(nombre, descripcion, cantidadEnStock, unidadDeMedida);
        res.status(201).json({ id: nuevoIngredienteId });
        break;
  
      case 'PUT':
        const { nombre: updatedNombre, descripcion: updatedDescripcion, cantidadEnStock: updatedCantidadEnStock, unidadDeMedida: updatedUnidadDeMedida } = req.body;
        const updated = await updateIngrediente(ingredienteId, updatedNombre, updatedDescripcion, updatedCantidadEnStock, updatedUnidadDeMedida);
        if (updated) {
          res.status(200).json({ success: true });
        } else {
          res.status(404).json({ success: false, error: 'Ingrediente no encontrado' });
        }
        break;
  
      case 'DELETE':
        const deleted = await deleteIngrediente(ingredienteId);
        if (deleted) {
          res.status(200).json({ success: true });
        } else {
          res.status(404).json({ success: false, error: 'Ingrediente no encontrado' });
        }
        break;
  
      default:
        res.status(405).end(); 
        break;
    }
  }
  