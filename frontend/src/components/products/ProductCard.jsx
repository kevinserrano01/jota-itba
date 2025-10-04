import { Link } from 'react-router-dom';

export const ProductCard = ({ product }) => {
    return (
        <div className="card h-100" style={{ width: '18rem' }}>
            <img 
                src={product.imagenURL?.trim()} 
                className="card-img-top" 
                alt={product.nombre}
                style={{
                    height: '250px',
                    objectFit: 'cover',
                    objectPosition: 'center'
                }}
            />
            <div className="card-body d-flex flex-column">
                <h5 className="card-title">{product.nombre}</h5>
                <p className="card-text flex-grow-1">
                    {product.descripcion.length > 100 
                        ? `${product.descripcion.substring(0, 100)}...` 
                        : product.descripcion
                    }
                </p>
                <p className="card-text">
                    <strong className="text-success fs-5">${product.precio}</strong>
                </p>
                <Link 
                    to={`/productos/${product.id}`} 
                    className="btn btn-primary mt-auto"
                >
                    Ver Detalles
                </Link>
            </div>
        </div>
    );
}