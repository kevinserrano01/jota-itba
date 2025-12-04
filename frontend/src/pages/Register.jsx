import { toast } from "react-toastify";

export const Register = () => {
    const handleSubmit = async (e) => {
        e.preventDefault();

        const formData = new FormData(e.target);
        const userData = {
            email: formData.get("email"),
            password: formData.get("password"),
        };

        try {
            const response = await fetch(userapi, {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(userData),
            });
            if (response.ok) {
                const newUser = await response.json();
                console.log("Usuario Creado:", newUser);
                e.target.reset();
                toast.success("Usuario registrado exitosamente");
            } else {
                const error = await response.json();
                console.error("Error al crear usuario", error);
                toast.error("Error al crear usuario" + error.error);
            }
        }
        catch (error) {
            console.error("Error:", error);
            toast.error("Error de conexion");
        }
    }

    return (
        <div>
            <h2>Crear cuenta</h2>
            <form onSubmit={handleSubmit}>
                <label htmlFor="email">Email *</label>
                <input type="email" id="email" name="email" required />
                <label htmlFor="password">Contraseña *</label>
                <input type="password" id="password" name="password" required />
                <button type="submit"> Registrarse </button>
            </form>
        </div>
    );
};
