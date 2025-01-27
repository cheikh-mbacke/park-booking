import * as React from "react";
import { useState } from "react";
import { StyleSheet } from "react-nativescript";
import { FrameNavigationProp } from "react-nativescript-navigation";
import { MainStackParamList } from "../NavigationParamList";

type TodoListProps = {
    navigation: FrameNavigationProp<MainStackParamList, "TodoList">,
};

export function TodoList({ navigation }: TodoListProps) {
    const [todos, setTodos] = useState([
        { id: 1, text: "Acheter du lait", completed: false },
        { id: 2, text: "Appeler le médecin", completed: true },
    ]);

    const toggleTodo = (id: number) => {
        setTodos(todos.map(todo => 
            todo.id === id ? { ...todo, completed: !todo.completed } : todo
        ));
    };

    return (
        <flexboxLayout style={styles.container}>
            <button 
                className="btn btn-primary" 
                onTap={() => navigation.navigate("Add Todo")}
                style={styles.addButton}
            >
                + Ajouter une tâche
            </button>
            
            <listView
                items={todos}
                style={styles.list}
                itemTemplate={(item) => (
                    <gridLayout columns="*, auto" className={`list-item ${item.completed ? 'completed' : ''}`}>
                        <label col="0" text={item.text} style={styles.todoText} />
                        <button 
                            col="1" 
                            text={item.completed ? "✓" : "○"}
                            onTap={() => toggleTodo(item.id)}
                            style={styles.checkButton}
                        />
                    </gridLayout>
                )}
            />
        </flexboxLayout>
    );
}

const styles = StyleSheet.create({
    container: {
        height: "100%",
        backgroundColor: "#f0f0f0",
        flexDirection: "column",
        padding: 16
    },
    list: {
        flex: 1,
        backgroundColor: "white",
        borderRadius: 8
    },
    addButton: {
        backgroundColor: "#007AFF",
        color: "white",
        padding: 12,
        borderRadius: 8,
        marginBottom: 16,
        fontSize: 16
    },
    todoText: {
        fontSize: 16,
        padding: 12
    },
    checkButton: {
        width: 40,
        height: 40,
        margin: 6,
        borderRadius: 20,
        backgroundColor: "#007AFF",
        color: "white"
    }
});