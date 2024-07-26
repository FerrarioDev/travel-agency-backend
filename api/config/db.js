import mongoose from 'mongoose';
import 'dotenv/config';

const MONGODB_URI = process.env.MONGODB_URI;
let cached = global.mongoose || {conn: null, promise: null};

// coneccion a la base de datos
export const connectDB = async () => {
    if(cached.conn) return cached.conn;
    if(!MONGODB_URI) throw new Error('MONGODB_URI is missing');
    
    // si la coneccion no ha sido inicializada, inicializa la coneccion
    cached.promise = cached.promise || mongoose.connect(MONGODB_URI, {
        dbName: 'travelSystemFinal_web2',
        bufferCommands: false
    });
    
    cached.conn = await cached.promise;

    return cached.conn
}

export default connectDB