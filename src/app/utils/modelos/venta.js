import mongoose, { Schema } from "mongoose";

const ventaSchema = new Schema({


    cuenta:{type: String,
    
    },  
    producto1:{type: String,
    
    }, 
    producto2:{type: String,
    
    }, 
    producto3:{type: String,
    
    },  
    precio:{type: String,
    
    }, 
    enganche:{type: String,
    
    },
    abono1:{type: String,
    
    },
    abono2:{type: String,
    
    },  
    abono3:{type: String,
    
    },  
    fechaventa:{type: String,
    
    }, 
        
    fechacobro1:{type: String,
    
    },  
    fechacobro2:{type: String,
    
    },  
    vendedor:{type: String,
    
    },  
    cobrador:{type: String,
    
    },  
    estado:{type: String,
    
    }, 
        
    nombre:{type: String,
    
    },  
    telefono:{type: String,
    
    },  
    refnombre:{type: String,
    
    },  
    refdomicilio:{type: String,
    
    },  
    reftelefono:{type: String,
    
    }, 
    refparentesco:{type: String,
    
    }, 
    municipio:{type: String,
    
    },  
    poblacion:{type: String,
    
    },  
        
    detpoblacion:{type: String,
    
    }, 
});

export default mongoose.model.Venta || mongoose.model("Venta", ventaSchema);

