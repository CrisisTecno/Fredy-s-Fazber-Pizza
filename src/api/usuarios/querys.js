// usuarios.js

import { query } from '../bd';

export async function getUsuarios() {
  const usuarios = await query('SELECT * FROM Usuarios');
  return usuarios;
}

export async function getUsuarioById(id) {
  const [usuario] = await query('SELECT * FROM Usuarios WHERE UsuarioID = ?', [id]);
  return usuario;
}

export async function createUsuario(nombre, correoElectronico, contraseña, rol) {
  const result = await query(
    'INSERT INTO Usuarios (Nombre, CorreoElectronico, Contraseña, Rol) VALUES (?, ?, ?, ?)',
    [nombre, correoElectronico, contraseña, rol]
  );

  return result.insertId;
}

export async function updateUsuario(id, nombre, correoElectronico, contraseña, rol) {
  const result = await query(
    'UPDATE Usuarios SET Nombre = ?, CorreoElectronico = ?, Contraseña = ?, Rol = ? WHERE UsuarioID = ?',
    [nombre, correoElectronico, contraseña, rol, id]
  );

  return result.affectedRows > 0;
}

export async function deleteUsuario(id) {
  const result = await query('DELETE FROM Usuarios WHERE UsuarioID = ?', [id]);
  return result.affectedRows > 0;
}
