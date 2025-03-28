import '@fontsource-variable/josefin-sans';
import styles from "./todoitem.module.css";
import { useEffect, useState } from 'react';
import { CiTrash } from "react-icons/ci";

export const TodoItem = () => {
    const [tareas, setTareas] = useState([]);
    const [tarea, setTarea] = useState('');

    const agregarTarea = () => {
        const nuevaFecha = new Date().toLocaleString();

        if (tarea.trim() === "") {
            alert("Por favor, ingrese un nombre válido para su tarea");
            return;
        }
        setTareas([...tareas, { name: tarea, fecha: nuevaFecha, status: false }]);
        setTarea('');
    };

    const eliminarTarea = (index) => {
        if (tareas[index].status) {
            setTareas(tareas.filter((_, i) => i !== index));
        }
        else {
            alert("No se puede eliminar una tarea pendiente. Primero, márcala como completada.");
        }
        
    };

    const cambiarStatus = (index) => {
        setTareas(tareas.map((item, i) => i === index ? { ...item, status: !item.status } : item));
    };

    useEffect(() => {
        console.log(tareas);
    }, [tareas]);

    return (
        <div className={styles.app}>
            <h1>Todo List 📩</h1>
            <div className={styles.inputContainer}>
                <input
                    value={tarea}
                    onChange={(e) => setTarea(e.target.value)}
                    type="text"
                    placeholder="Ingrese el nombre de su tarea"
                />
                <button onClick={agregarTarea}>Agregar tarea</button>
            </div>

            {tareas.length > 0 && (
                <ul className={styles.tareas}>
                    {tareas.map((item, index) => (
                        <li key={index} className={styles.tareaItem}>
                            <p className={styles.fecha}>Fecha: {item.fecha}</p>
                            <div className={styles.cont}>
                                <input
                                    type="checkbox"
                                    checked={item.status}
                                    onChange={() => cambiarStatus(index)}
                                />
                                <h3 className={styles.tareaTexto}>{item.name}</h3>
                                <i className={styles.icono} onClick={() => eliminarTarea(index)}>
                                    <CiTrash />
                                </i>
                            </div>
                            {item.status ? <p className={styles.completed}>Completada</p> : <p className={styles.pendiente}>Pendiente</p>}
                        </li>
                    ))}
                </ul>
            )}
        </div>
    );
}