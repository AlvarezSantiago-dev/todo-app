# Todo App

## Descripción

Esta es una aplicación básica de lista de tareas (Todo App) desarrollada con React. Permite a los usuarios agregar, marcar como completadas y eliminar tareas.

## Características

- Agregar nuevas tareas con una fecha de creación.
- Marcar tareas como completadas.
- Eliminar tareas completadas.
- Validación para evitar agregar tareas vacías.

## Tecnologías utilizadas

- React
- CSS Modules
- React Icons
- Fontsource

## Instalación y uso

1. Clonar el repositorio:

   ```bash
   git clone https://github.com/AlvarezSantiago-dev/todo-app.git
   cd todo-app
   ```

2. Instalar las dependencias:

   ```bash
   npm install
   ```

3. Ejecutar la aplicación:

   ```bash
   npm run dev
   ```

## Estructura del proyecto

```
.
├── src
│   ├── components
│   │   ├── TodoItem.jsx
│   │   ├── todoitem.module.css
│   ├── App.jsx
│   ├── main.jsx
├── public
├── package.json
└── README.md
```

## Uso

1. Escriba el nombre de la tarea en el campo de entrada.
2. Haga clic en el botón "Agregar tarea" para guardarla.
3. Marque la casilla para marcar una tarea como completada.
4. Solo las tareas completadas pueden ser eliminadas haciendo clic en el icono de basura.

## Mejoras futuras

- Agregar persistencia con LocalStorage.
- Implementar edición de tareas.
- Mejorar la interfaz con animaciones y estilos adicionales.

