export const Login = () => {
    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await fetch('/api/users/login', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(formData), // formData contiene { email, password }
            });

            const data = await response.json();
            if (!response.ok) throw new Error(data.message);

            console.log('Login exitoso, token:', data.token);


        } catch (error) {
            alert(`Error en el login: ${error.message}`);
        }
    };

    return (
        <div className="container" style={{ paddingTop: '100px', minHeight: '100vh'}}>
            <h2> Iniciar sesión </h2>
            <form onSubmit={handleSubmit}>
                <label htmlFor="email">Email *</label>
                <input type="email" id="email" name="email" required />
                <label htmlFor="password">Contraseña *</label>
                <input type="password" id="password" name="password" required />
                <button type="submit"> Logearse </button>
            </form>
        </div>
    );
};