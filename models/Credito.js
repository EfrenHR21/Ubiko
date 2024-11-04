import db from "../config/db.js";
import { DataTypes } from "sequelize";


const Credito = db.define('creditos', {
    montoInmueble: { 
        type: DataTypes.DECIMAL(10,2), 
        allowNull: false 
    },
    cuotaInicialPorcentaje: { 
        type: DataTypes.DECIMAL(10,2), 
        allowNull: false 
    },
    TEA: { 
        type: DataTypes.DECIMAL(10,2),  
        allowNull: false 
    },
    plazoMeses: { 
        type: DataTypes.INTEGER, 
        allowNull: false 
    },
    // Columnas de resultados calculados
    cuotaInicial: { 
        type: DataTypes.DECIMAL(10,2), 
    },
    montoCapital: { 
        type: DataTypes.DECIMAL(10,2),  
    },
    TEM: { 
        type: DataTypes.DECIMAL(10,2), 
    },
    pagoMensual: { 
        type: DataTypes.DECIMAL(10,2),  
    }

})

export default Credito;