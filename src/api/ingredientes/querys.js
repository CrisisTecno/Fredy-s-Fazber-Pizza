// ingredientes.js

import { query } from '../bd';

export async function getIngredientes() {
  const ingredientes = await query('SELECT * FROM Ingredientes');
  return ingredientes;
}

export async function getIngredienteById(id) {
  const [ingrediente] = await query('SELECT * FROM Ingredientes WHERE IngredienteID = ?', [id]);
  return ingrediente;
}

export async function createIngrediente(nombre, descripcion, cantidadEnStock, unidadDeMedida) {
  const result = await query(
    'INSERT INTO Ingredientes (NombreIngrediente, Descripcion, CantidadEnStock, UnidadDeMedida) VALUES (?, ?, ?, ?)',
    [nombre, descripcion, cantidadEnStock, unidadDeMedida]
  );

  return result.insertId;
}

export async function updateIngrediente(id, nombre, descripcion, cantidadEnStock, unidadDeMedida) {
  const result = await query(
    'UPDATE Ingredientes SET NombreIngrediente = ?, Descripcion = ?, CantidadEnStock = ?, UnidadDeMedida = ? WHERE IngredienteID = ?',
    [nombre, descripcion, cantidadEnStock, unidadDeMedida, id]
  );

  return result.affectedRows > 0;
}

export async function deleteIngrediente(id) {
  const result = await query('DELETE FROM Ingredientes WHERE IngredienteID = ?', [id]);
  return result.affectedRows > 0;
}
