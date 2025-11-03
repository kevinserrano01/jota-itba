import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

export function CrearProducto() {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    nombre: '',
    precio: '',
    imagenURL: '',
    descripcion: '',
    medidas: '',
    materiales: '',
    acabado: '',
    peso: ''
  });
  

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const datosParaEnviar = {
      ...formData
    };

    try {
      const response = await fetch('http://localhost:3001/api/productos', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(datosParaEnviar),
      });

      if (!response.ok) {
        const errorData = await response.json();
        throw new Error(errorData.error || 'Error al crear el producto');
      }

      const productoCreado = await response.json();
      console.log('✅ Producto creado:', productoCreado);

      alert("Producto creado exitosamente")
      navigate(`/productos`);
    } catch (error) {
      console.error('❌ Error:', error);
      alert('Error: ' + error.message);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="max-w-lg mx-auto p-6 bg-white rounded shadow">
      <h2 className="text-xl font-bold mb-4">Crear nuevo producto</h2>

      <div className="mb-3">
        <label className="block text-sm font-medium mb-1">Nombre *</label>
        <input
          type="text"
          name="nombre"
          value={formData.nombre}
          onChange={handleChange}
          required
          className="w-full p-2 border border-gray-300 rounded"
        />
      </div>

      <div className="mb-3">
        <label className="block text-sm font-medium mb-1">Precio *</label>
        <input
          type="number"
          name="precio"
          value={formData.precio}
          onChange={handleChange}
          required
          min="0"
          step="0.01"
          className="w-full p-2 border border-gray-300 rounded"
        />
      </div>

      <div className="mb-3">
        <label className="block text-sm font-medium mb-1">Imagen (URL)</label>
        <input
          type="url"
          name="imagenURL"
          value={formData.imagenURL}
          onChange={handleChange}
          className="w-full p-2 border border-gray-300 rounded"
        />
      </div>

      <div className="mb-3">
        <label className="block text-sm font-medium mb-1">Descripción</label>
        <textarea
          name="descripcion"
          value={formData.descripcion}
          onChange={handleChange}
          rows="3"
          className="w-full p-2 border border-gray-300 rounded"
        />
      </div>

      <div className="grid grid-cols-2 gap-3 mb-3">
        <div>
          <label className="block text-sm font-medium mb-1">Medidas</label>
          <input
            type="text"
            name="medidas"
            value={formData.medidas}
            onChange={handleChange}
            placeholder="Ej: 50x50x80 cm"
            className="w-full p-2 border border-gray-300 rounded"
          />
        </div>

        <div>
          <label className="block text-sm font-medium mb-1">Peso (kg)</label>
          <input
            type="number"
            name="peso"
            value={formData.peso}
            onChange={handleChange}
            step="0.1"
            className="w-full p-2 border border-gray-300 rounded"
          />
        </div>
      </div>

      <div className="mb-3">
        <label className="block text-sm font-medium mb-1">Materiales</label>
        <input
          type="text"
          name="materiales"
          value={formData.materiales}
          onChange={handleChange}
          className="w-full p-2 border border-gray-300 rounded"
        />
      </div>

      <div className="mb-4">
        <label className="block text-sm font-medium mb-1">Acabado</label>
        <input
          type="text"
          name="acabado"
          value={formData.acabado}
          onChange={handleChange}
          className="w-full p-2 border border-gray-300 rounded"
        />
      </div>

      <button
        type="submit"
        className="w-full bg-blue-600 text-black py-2 px-4 rounded hover:bg-blue-700 transition"
      >
        Crear Producto
      </button>
    </form>
  );
}