-- Registros para la tabla Usuarios
INSERT INTO Usuarios (UsuarioID, Nombre, CorreoElectronico, Contraseña, Rol)
VALUES
  (1, 'Juan Pérez', 'juan@example.com', 'contraseña123', 'cliente'),
  (2, 'Ana García', 'ana@example.com', 'clave456', 'chef'),
  (3, 'Carlos López', 'carlos@example.com', 'miPass789', 'mesero'),
  (4, 'María Rodríguez', 'maria@example.com', 'password456', 'cliente'),
  (5, 'Pedro Martínez', 'pedro@example.com', 'securePass789', 'chef'),
  (6, 'Laura González', 'laura@example.com', 'pass1234', 'mesero'),
  (7, 'Sofía Ramírez', 'sofia@example.com', 'secretPass', 'cliente'),
  (8, 'Miguel Sánchez', 'miguel@example.com', 'mypassword', 'chef'),
  (9, 'Elena Vargas', 'elena@example.com', 'pass123', 'mesero'),
  (10, 'Diego Fernández', 'diego@example.com', 'securePassword', 'cliente'),
  (11, 'Isabel Castro', 'isabel@example.com', 'password789', 'chef'),
  (12, 'Fernando Herrera', 'fernando@example.com', 'mysecretPass', 'mesero'),
  (13, 'Natalia Ríos', 'natalia@example.com', 'password1234', 'cliente'),
  (14, 'Roberto Guzmán', 'roberto@example.com', 'securePass456', 'chef'),
  (15, 'Gabriela Mendoza', 'gabriela@example.com', 'mypassword789', 'mesero'),
  (16, 'Andrés Silva', 'andres@example.com', 'pass5678', 'cliente'),
  (17, 'Valeria Gómez', 'valeria@example.com', 'securePassword789', 'chef'),
  (18, 'Héctor Torres', 'hector@example.com', 'mypassword123', 'mesero'),
  (19, 'Luisa Ortega', 'luisa@example.com', 'securePass5678', 'cliente'),
  (20, 'Javier Navarro', 'javier@example.com', 'password5678', 'chef');

-- Registros para la tabla Ingredientes
INSERT INTO Ingredientes (IngredienteID, NombreIngrediente, Descripcion, CantidadEnStock, UnidadDeMedida)
VALUES
  (1, 'Queso Mozzarella', 'Queso suave y cremoso', 20, 'gramos'),
  (2, 'Tomate', 'Tomate fresco', 20, 'unidades'),
  (3, 'Harina', 'Harina de trigo', 20, 'gramos'),
  (4, 'Pepperoni', 'Salchicha de cerdo y ternera', 20, 'gramos'),
  (5, 'Aceitunas', 'Aceitunas negras', 20, 'gramos'),
  (6, 'Champiñones', 'Champiñones frescos', 20, 'gramos'),
  (7, 'Jamón', 'Jamón cocido', 20, 'gramos'),
  (8, 'Pimiento', 'Pimiento rojo', 20, 'gramos'),
  (9, 'Cebolla', 'Cebolla picada', 20, 'gramos'),
  (10, 'Ajo', 'Ajo fresco picado', 20, 'gramos'),
  (11, 'Aceite de oliva', 'Aceite de oliva virgen extra', 20, 'mililitros'),
  (12, 'Albahaca', 'Albahaca fresca', 20, 'gramos'),
  (13, 'Orégano', 'Orégano seco', 20, 'gramos'),
  (14, 'Pimiento Jalapeño', 'Pimiento Jalapeño en rodajas', 20, 'gramos'),
  (15, 'Sal', 'Sal de mesa', 20, 'gramos'),
  (16, 'Pimienta', 'Pimienta negra molida', 20, 'gramos'),
  (17, 'Queso Parmesano', 'Queso Parmesano rallado', 20, 'gramos'),
  (18, 'Tomate cherry', 'Tomate cherry cortado a la mitad', 20, 'gramos'),
  (19, 'Berenjena', 'Berenjena en rodajas', 20, 'gramos'),
  (20, 'Pollo', 'Pollo a la parrilla desmenuzado', 20, 'gramos');
