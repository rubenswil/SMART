use [vksbgxbd_encuesta]
GO
/* Drop Foreign Key Constraints */

IF EXISTS (SELECT 1 FROM dbo.sysobjects WHERE id = object_id(N'[PERFILES_ACCION_PERFILES_FK]') AND OBJECTPROPERTY(id, N'IsForeignKey') = 1) 
ALTER TABLE [ENB_PERFILES_ACCION] DROP CONSTRAINT [PERFILES_ACCION_PERFILES_FK]
GO

IF EXISTS (SELECT 1 FROM dbo.sysobjects WHERE id = object_id(N'[FK_PPB_PERFILES_ACCION_PPB_ACC]') AND OBJECTPROPERTY(id, N'IsForeignKey') = 1) 
ALTER TABLE [ENB_PERFILES_ACCION] DROP CONSTRAINT [FK_PPB_PERFILES_ACCION_PPB_ACC]
GO

IF EXISTS (SELECT 1 FROM dbo.sysobjects WHERE id = object_id(N'[PERFILES_USUARIO_PERFILES_FK]') AND OBJECTPROPERTY(id, N'IsForeignKey') = 1) 
ALTER TABLE [ENB_PERFILES_USUARIO] DROP CONSTRAINT [PERFILES_USUARIO_PERFILES_FK]
GO

IF EXISTS (SELECT 1 FROM dbo.sysobjects WHERE id = object_id(N'[PERFILES_USUARIO_USUARIOS_FK]') AND OBJECTPROPERTY(id, N'IsForeignKey') = 1) 
ALTER TABLE [ENB_PERFILES_USUARIO] DROP CONSTRAINT [PERFILES_USUARIO_USUARIOS_FK]
GO

/* Drop Tables */

IF EXISTS (SELECT 1 FROM dbo.sysobjects WHERE id = object_id(N'[ENB_ACCION]') AND OBJECTPROPERTY(id, N'IsUserTable') = 1) 
DROP TABLE [ENB_ACCION]
GO

IF EXISTS (SELECT 1 FROM dbo.sysobjects WHERE id = object_id(N'[ENB_PARAMETRO_SISTEMA]') AND OBJECTPROPERTY(id, N'IsUserTable') = 1) 
DROP TABLE [ENB_PARAMETRO_SISTEMA]
GO

IF EXISTS (SELECT 1 FROM dbo.sysobjects WHERE id = object_id(N'[ENB_PERFIL]') AND OBJECTPROPERTY(id, N'IsUserTable') = 1) 
DROP TABLE [ENB_PERFIL]
GO

IF EXISTS (SELECT 1 FROM dbo.sysobjects WHERE id = object_id(N'[ENB_PERFILES_ACCION]') AND OBJECTPROPERTY(id, N'IsUserTable') = 1) 
DROP TABLE [ENB_PERFILES_ACCION]
GO

IF EXISTS (SELECT 1 FROM dbo.sysobjects WHERE id = object_id(N'[ENB_PERFILES_USUARIO]') AND OBJECTPROPERTY(id, N'IsUserTable') = 1) 
DROP TABLE [ENB_PERFILES_USUARIO]
GO

IF EXISTS (SELECT 1 FROM dbo.sysobjects WHERE id = object_id(N'[ENB_USUARIO]') AND OBJECTPROPERTY(id, N'IsUserTable') = 1) 
DROP TABLE [ENB_USUARIO]
GO

/* Create Tables */

CREATE TABLE [ENB_ACCION]
(
	[ID_ACCION] int NOT NULL,    -- Id del registro generado por la identidad.
	[NOMBRE] varchar(100) NOT NULL,    -- Nombre.
	[DESCRIPCION] varchar(4000) NOT NULL,    -- Descripcion.
	[ESTADO] bit NOT NULL    -- Indicador de Activo/Inactivo.
)
GO

CREATE TABLE [ENB_PARAMETRO_SISTEMA]
(
	[ID_PARAMETRO] int NOT NULL,    -- Identificación única del parametro del sistema
	[DESCRIPCION] nvarchar(350) NOT NULL,    -- Descripción del parámetro del sistema
	[VALOR] nvarchar(100) NOT NULL    -- Valor asignado al parámetro del sistema
)
GO

CREATE TABLE [ENB_PERFIL]
(
	[ID_PERFILE] int NOT NULL,    -- Identificador del registro 
	[NOMBRE] varchar(100) NOT NULL,    -- Nombre.
	[DESCRIPCION] varchar(4000) NULL,    -- Descripcion.
	[ESTADO] bit NOT NULL    -- Indicador de Activo/Inactivo.
)
GO

CREATE TABLE [ENB_PERFILES_ACCION]
(
	[ID_PERFILES_ACCION] int NOT NULL,    -- Id del registro generado por la secuencia.
	[ID_PERFIL] int NOT NULL,    -- Id del perfil.
	[ID_ACCION] decimal(9) NOT NULL,    -- Id de la accion.
	[ESTADO] bit NOT NULL    -- Indicador de Activo/Inactivo.
)
GO

CREATE TABLE [ENB_PERFILES_USUARIO]
(
	[ID_PERFILES_USUARIO] int NOT NULL,    -- Id del registro generado por la secuencia.
	[ID_PERFIL] int NOT NULL,    -- Id del perfil.
	[ID_USUARIO] int NOT NULL,    -- Id del usuario.
	[ESTADO] bit NOT NULL    -- Indicador de Activo/Inactivo.
)
GO

CREATE TABLE [ENB_USUARIO]
(
	[ID_USUARIO] decimal(9) NOT NULL,    -- Id del registro generado por la secuencia.
	[NOMBRE] varchar(100) NOT NULL,    -- Nombre.
	[LOGIN] varchar(100) NOT NULL,    -- Login.
	[ULTIMO_LOGIN] datetime2 NULL,    -- Calculado: Ultima fecha de ingreso.
	[ESTADO] bit NOT NULL,    -- Indicador de Activo/Inactivo.
	[CORREO_ELECTRONICO] varchar(30) NOT NULL
)
GO

/* Create Primary Keys, Indexes, Uniques, Checks */

ALTER TABLE [ENB_ACCION] 
 ADD CONSTRAINT [ACCIONES_PK]
	PRIMARY KEY CLUSTERED ([ID_ACCION] ASC)
GO

ALTER TABLE [ENB_PARAMETRO_SISTEMA] 
 ADD CONSTRAINT [PK_RTB_PARAMETRO_SISTEMA]
	PRIMARY KEY CLUSTERED ([ID_PARAMETRO] ASC)
GO

ALTER TABLE [ENB_PERFIL] 
 ADD CONSTRAINT [PERFILES_PK]
	PRIMARY KEY CLUSTERED ([ID_PERFILE] ASC)
GO

ALTER TABLE [ENB_PERFIL] 
 ADD CONSTRAINT [PERFILES_CK1] CHECK (ESTADO IN ('A', 'I'))
GO

CREATE NONCLUSTERED INDEX [PERFILES_IN1] 
 ON [ENB_PERFIL] ([ESTADO] ASC)
GO

ALTER TABLE [ENB_PERFILES_ACCION] 
 ADD CONSTRAINT [PERFILES_ACCION_PK]
	PRIMARY KEY CLUSTERED ([ID_PERFILES_ACCION] ASC)
GO

CREATE NONCLUSTERED INDEX [PERFILES_ACCION_IN1] 
 ON [ENB_PERFILES_ACCION] ([ID_PERFIL] ASC,[ESTADO] ASC)
GO

CREATE UNIQUE NONCLUSTERED INDEX [PERFILES_ACCION_IN2] 
 ON [ENB_PERFILES_ACCION] ([ID_PERFIL] ASC,[ID_ACCION] ASC)
GO

ALTER TABLE [ENB_PERFILES_USUARIO] 
 ADD CONSTRAINT [PERFILES_USUARIO_PK]
	PRIMARY KEY CLUSTERED ([ID_PERFILES_USUARIO] ASC)
GO

CREATE NONCLUSTERED INDEX [PERFILES_USUARIO_IN1] 
 ON [ENB_PERFILES_USUARIO] ([ID_PERFIL] ASC,[ESTADO] ASC)
GO

CREATE UNIQUE NONCLUSTERED INDEX [PERFILES_USUARIO_IN2] 
 ON [ENB_PERFILES_USUARIO] ([ID_PERFIL] ASC,[ID_USUARIO] ASC)
GO

ALTER TABLE [ENB_USUARIO] 
 ADD CONSTRAINT [USUARIOS_PK]
	PRIMARY KEY CLUSTERED ([ID_USUARIO] ASC)
GO

CREATE NONCLUSTERED INDEX [USUARIOS_IN1] 
 ON [ENB_USUARIO] ([ESTADO] ASC)
GO

/* Create Foreign Key Constraints */

ALTER TABLE [ENB_PERFILES_ACCION] ADD CONSTRAINT [PERFILES_ACCION_PERFILES_FK]
	FOREIGN KEY ([ID_PERFIL]) REFERENCES [ENB_PERFIL] ([ID_PERFILE]) ON DELETE No Action ON UPDATE No Action
GO

ALTER TABLE [ENB_PERFILES_ACCION] ADD CONSTRAINT [FK_PPB_PERFILES_ACCION_PPB_ACC]
	FOREIGN KEY ([ID_ACCION]) REFERENCES  () ON DELETE No Action ON UPDATE No Action
GO

ALTER TABLE [ENB_PERFILES_USUARIO] ADD CONSTRAINT [PERFILES_USUARIO_PERFILES_FK]
	FOREIGN KEY ([ID_PERFIL]) REFERENCES [ENB_PERFIL] ([ID_PERFILE]) ON DELETE No Action ON UPDATE No Action
GO

ALTER TABLE [ENB_PERFILES_USUARIO] ADD CONSTRAINT [PERFILES_USUARIO_USUARIOS_FK]
	FOREIGN KEY ([ID_USUARIO]) REFERENCES [ENB_USUARIO] ([ID_USUARIO]) ON DELETE No Action ON UPDATE No Action
GO

/* Create Table Comments */

EXEC sp_addextendedproperty 'MS_Description', 'Tabla con las acciones de seguridad a las que responde el sistema.', 'Schema', [dbo], 'table', [ENB_ACCION]
GO

EXEC sp_addextendedproperty 'MS_Description', 'Id del registro generado por la identidad.', 'Schema', [dbo], 'table', [ENB_ACCION], 'column', [ID_ACCION]
GO

EXEC sp_addextendedproperty 'MS_Description', 'Nombre.', 'Schema', [dbo], 'table', [ENB_ACCION], 'column', [NOMBRE]
GO

EXEC sp_addextendedproperty 'MS_Description', 'Descripcion.', 'Schema', [dbo], 'table', [ENB_ACCION], 'column', [DESCRIPCION]
GO

EXEC sp_addextendedproperty 'MS_Description', 'Indicador de Activo/Inactivo.', 'Schema', [dbo], 'table', [ENB_ACCION], 'column', [ESTADO]
GO

EXEC sp_addextendedproperty 'MS_Description', 'Entidad que almacena los parámetros generales del sistema', 'Schema', [dbo], 'table', [ENB_PARAMETRO_SISTEMA]
GO

EXEC sp_addextendedproperty 'MS_Description', 'Identificación única del parametro del sistema', 'Schema', [dbo], 'table', [ENB_PARAMETRO_SISTEMA], 'column', [ID_PARAMETRO]
GO

EXEC sp_addextendedproperty 'MS_Description', 'Descripción del parámetro del sistema', 'Schema', [dbo], 'table', [ENB_PARAMETRO_SISTEMA], 'column', [DESCRIPCION]
GO

EXEC sp_addextendedproperty 'MS_Description', 'Valor asignado al parámetro del sistema', 'Schema', [dbo], 'table', [ENB_PARAMETRO_SISTEMA], 'column', [VALOR]
GO

EXEC sp_addextendedproperty 'MS_Description', 'Llave primaria de la entidad parametros del sistema', 'Schema', [dbo], 'table', [ENB_PARAMETRO_SISTEMA], 'constraint', [PK_RTB_PARAMETRO_SISTEMA]
GO

EXEC sp_addextendedproperty 'MS_Description', 'Perfiles de Seguridad.', 'Schema', [dbo], 'table', [ENB_PERFIL]
GO

EXEC sp_addextendedproperty 'MS_Description', 'Identificador del registro ', 'Schema', [dbo], 'table', [ENB_PERFIL], 'column', [ID_PERFILE]
GO

EXEC sp_addextendedproperty 'MS_Description', 'Nombre.', 'Schema', [dbo], 'table', [ENB_PERFIL], 'column', [NOMBRE]
GO

EXEC sp_addextendedproperty 'MS_Description', 'Descripcion.', 'Schema', [dbo], 'table', [ENB_PERFIL], 'column', [DESCRIPCION]
GO

EXEC sp_addextendedproperty 'MS_Description', 'Indicador de Activo/Inactivo.', 'Schema', [dbo], 'table', [ENB_PERFIL], 'column', [ESTADO]
GO

EXEC sp_addextendedproperty 'MS_Description', 'Acciones permitadas para cada perfil.', 'Schema', [dbo], 'table', [ENB_PERFILES_ACCION]
GO

EXEC sp_addextendedproperty 'MS_Description', 'Id del registro generado por la secuencia.', 'Schema', [dbo], 'table', [ENB_PERFILES_ACCION], 'column', [ID_PERFILES_ACCION]
GO

EXEC sp_addextendedproperty 'MS_Description', 'Id del perfil.', 'Schema', [dbo], 'table', [ENB_PERFILES_ACCION], 'column', [ID_PERFIL]
GO

EXEC sp_addextendedproperty 'MS_Description', 'Id de la accion.', 'Schema', [dbo], 'table', [ENB_PERFILES_ACCION], 'column', [ID_ACCION]
GO

EXEC sp_addextendedproperty 'MS_Description', 'Indicador de Activo/Inactivo.', 'Schema', [dbo], 'table', [ENB_PERFILES_ACCION], 'column', [ESTADO]
GO

EXEC sp_addextendedproperty 'MS_Description', 'Usuarios asociados a cada perfil.', 'Schema', [dbo], 'table', [ENB_PERFILES_USUARIO]
GO

EXEC sp_addextendedproperty 'MS_Description', 'Id del registro generado por la secuencia.', 'Schema', [dbo], 'table', [ENB_PERFILES_USUARIO], 'column', [ID_PERFILES_USUARIO]
GO

EXEC sp_addextendedproperty 'MS_Description', 'Id del perfil.', 'Schema', [dbo], 'table', [ENB_PERFILES_USUARIO], 'column', [ID_PERFIL]
GO

EXEC sp_addextendedproperty 'MS_Description', 'Id del usuario.', 'Schema', [dbo], 'table', [ENB_PERFILES_USUARIO], 'column', [ID_USUARIO]
GO

EXEC sp_addextendedproperty 'MS_Description', 'Indicador de Activo/Inactivo.', 'Schema', [dbo], 'table', [ENB_PERFILES_USUARIO], 'column', [ESTADO]
GO

EXEC sp_addextendedproperty 'MS_Description', 'Copia de la lista de usuarios en el directorio activo. solo aplica los usuario que estén en la unidad organizacional Gestión de Riesgos y el usuario administrador indique', 'Schema', [dbo], 'table', [ENB_USUARIO]
GO

EXEC sp_addextendedproperty 'MS_Description', 'Id del registro generado por la secuencia.', 'Schema', [dbo], 'table', [ENB_USUARIO], 'column', [ID_USUARIO]
GO

EXEC sp_addextendedproperty 'MS_Description', 'Nombre.', 'Schema', [dbo], 'table', [ENB_USUARIO], 'column', [NOMBRE]
GO

EXEC sp_addextendedproperty 'MS_Description', 'Login.', 'Schema', [dbo], 'table', [ENB_USUARIO], 'column', [LOGIN]
GO

EXEC sp_addextendedproperty 'MS_Description', 'Calculado: Ultima fecha de ingreso.', 'Schema', [dbo], 'table', [ENB_USUARIO], 'column', [ULTIMO_LOGIN]
GO

EXEC sp_addextendedproperty 'MS_Description', 'Indicador de Activo/Inactivo.', 'Schema', [dbo], 'table', [ENB_USUARIO], 'column', [ESTADO]
GO
