-- Creación de la tabla Usuarios
CREATE TABLE Usuarios (
    UsuarioID INT PRIMARY KEY,
    Nombre VARCHAR(255),
    CorreoElectronico VARCHAR(255),
    Contraseña VARCHAR(255),
    Rol VARCHAR(50)
);

-- Creación de la tabla Ingredientes
CREATE TABLE Ingredientes (
    IngredienteID INT PRIMARY KEY,
    NombreIngrediente VARCHAR(255),
    Descripcion VARCHAR(255),
    CantidadEnStock INT,
    UnidadDeMedida VARCHAR(50)
);

-- Creación de la tabla Categorías de Pizzas
CREATE TABLE CategoriasDePizzas (
    CategoriaPizzaID INT PRIMARY KEY,
    NombreCategoriaPizza VARCHAR(255)
);

-- Creación de la tabla Pizzas
CREATE TABLE Pizzas (
    PizzaID INT PRIMARY KEY,
    NombrePizza VARCHAR(255),
    Descripcion VARCHAR(255),
    Precio DECIMAL(10, 2),
    ImagenPizza VARCHAR(255),
    CategoriaPizzaID INT,
    FOREIGN KEY (CategoriaPizzaID) REFERENCES CategoriasDePizzas(CategoriaPizzaID)
);

-- Creación de la tabla Pizzas_Ingredientes
CREATE TABLE Pizzas_Ingredientes (
    PizzaID INT,
    IngredienteID INT,
    Cantidad INT,
    PRIMARY KEY (PizzaID, IngredienteID),
    FOREIGN KEY (PizzaID) REFERENCES Pizzas(PizzaID),
    FOREIGN KEY (IngredienteID) REFERENCES Ingredientes(IngredienteID)
);

-- Creación de la tabla Menús
CREATE TABLE Menus (
    MenuID INT PRIMARY KEY,
    UsuarioID INT,
    NombreMenu VARCHAR(255),
    Descripcion VARCHAR(255),
    PrecioMenu DECIMAL(10, 2),
    FOREIGN KEY (UsuarioID) REFERENCES Usuarios(UsuarioID)
);

-- Creación de la tabla Detalles del Menú
CREATE TABLE DetallesMenu (
    DetalleMenuID INT PRIMARY KEY,
    MenuID INT,
    PizzaID INT,
    FOREIGN KEY (MenuID) REFERENCES Menus(MenuID),
    FOREIGN KEY (PizzaID) REFERENCES Pizzas(PizzaID)
);

-- Creación de la tabla Pedidos
CREATE TABLE Pedidos (
    PedidoID INT PRIMARY KEY,
    UsuarioID INT,
    FechaHoraPedido DATETIME,
    EstadoPedido VARCHAR(50),
    FOREIGN KEY (UsuarioID) REFERENCES Usuarios(UsuarioID)
);

-- Creación de la tabla Detalles del Pedido
CREATE TABLE DetallesPedido (
    DetalleID INT PRIMARY KEY,
    PedidoID INT,
    PizzaID INT,
    Cantidad INT,
    PrecioUnitario DECIMAL(10, 2),
    FOREIGN KEY (PedidoID) REFERENCES Pedidos(PedidoID),
    FOREIGN KEY (PizzaID) REFERENCES Pizzas(PizzaID)
);

-- Creación de la tabla Reservas
CREATE TABLE Reservas (
    ReservaID INT PRIMARY KEY,
    UsuarioID INT,
    FechaHoraReserva DATETIME,
    NumeroPersonas INT,
    EstadoReserva VARCHAR(50),
    FOREIGN KEY (UsuarioID) REFERENCES Usuarios(UsuarioID)
);

-- Creación de la tabla Comentarios
CREATE TABLE Comentarios (
    ComentarioID INT PRIMARY KEY,
    UsuarioID INT,
    PizzaID INT,
    TextoComentario TEXT,
    Calificacion INT,
    FOREIGN KEY (UsuarioID) REFERENCES Usuarios(UsuarioID),
    FOREIGN KEY (PizzaID) REFERENCES Pizzas(PizzaID)
);
