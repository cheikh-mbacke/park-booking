import * as React from "react";
import { useState } from "react";
import { StyleSheet } from "react-nativescript";
import { FrameNavigationProp } from "react-nativescript-navigation";
import { MainStackParamList } from "../NavigationParamList";

type AddTodoProps = {
    navigation: FrameNavigationProp<MainStackParamList, "AddTodo">,
};

export function AddTodo({ navigation }: AddTodoProps) {
    const [text, setText] = useState("");

    const handleAdd = () => {
        if (text.trim()) {
            // Ici nous pourrions ajouter la tâche à une liste globale
            navigation.goBack();
        }
    };

    return (
        <flexboxLayout style={styles.container}>
            <textField
                hint="Entrez une nouvelle tâche"
                text={text}
                onTextChange={(args) => setText(args.value)}
                style={styles.input}
                returnKeyType="done"
                autocorrect={false}
            />
            <button
                text="Ajouter"
                onTap={handleAdd}
                style={styles.addButton}
                isEnabled={text.trim().length > 0}
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
    input: {
        fontSize: 16,
        padding: 12,
        backgroundColor: "white",
        borderRadius: 8,
        marginBottom: 16
    },
    addButton: {
        backgroundColor: "#007AFF",
        color: "white",
        padding: 12,
        borderRadius: 8,
        fontSize: 16
    }
});