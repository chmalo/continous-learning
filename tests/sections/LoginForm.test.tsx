import {render, screen, fireEvent} from "@testing-library/react";
import {LoginForm} from "../../src/sections/LoginForm";

describe("Login form component", () => {
    test("Should render the correct input field", () => {
        // Renderizar el componente Login
        render(<LoginForm />);

        // Obtener los elementos de input por su etiqueta
        const emailInput = screen.findByLabelText('Email');
        const passwordInput = screen.findByLabelText('Password');

        // Asegurar que los elementos de input esten definidos
        expect(emailInput).toBeDefined();
        expect(passwordInput).toBeDefined();
    })

    test("Should update email and password when typing", () => {
        // Renderizar el componente Login
        render(<LoginForm />);

        // Obtener los elementos de input por su etiqueta
        const emailInput = screen.getByLabelText('Email') as HTMLInputElement;
        const passwordInput = screen.getByLabelText('Password') as HTMLInputElement;

        // Simulamos la entrada de datos en los campos del formulario
        fireEvent.change(emailInput, {target: {value: 'example@example.com'}});
        fireEvent.change(passwordInput, {target: {value: 'password123'}});

        // Asegurar que los valores de correo y contraseña se han actualizado correctamente
        expect(emailInput.value).toBe('example@example.com');
        expect(passwordInput.value).toBe('password123');
    });
})