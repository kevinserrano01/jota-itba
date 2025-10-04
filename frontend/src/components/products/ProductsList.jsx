import { ProductCard } from './ProductCard';
import { useEffect } from 'react';
import { useAuth } from '../../contexts/AuthContext';
import { CgMathPlus } from "react-icons/cg";
import { useLocation, useNavigate } from 'react-router-dom';

export const ProductsList = () => {


    // if (isLoading || isLoadingProfile ) return <div className='container text-center'>Cargando...</div>;
    // if (errors || errorsProfile) return <div className='container text-center'>Error al cargar los productos.</div>;
    // if (!data || !profileData) return <div className='container text-center'>La Sesion ha expirado, vuelva a iniciar sesion.</div>;

    return (
        <div style={{ 
            paddingTop: '100px', 
            paddingLeft: '20px', 
            paddingRight: '20px',
            minHeight: '100vh' 
        }}>
            <h1>Lista de Productos</h1>
        </div>
    );
};