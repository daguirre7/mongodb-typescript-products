import mongoose = require("mongoose");
import {connectMongoDB} from "./helpers"

export interface IProveedor extends mongoose.Document { 
    name: string;
    direccion: string;
    tipo: string;
}

const ProveedorSchema = new mongoose.Schema({
    _id: {type:String, required: true},
    name: { type: String, required: true },
    tipo: {type: String, required: true},
    direccion: { type: String, required: false }
});

export const Proveedor = mongoose.model<IProveedor>("Proveedor", ProveedorSchema);

export const CreateProveedor = async function(id:string,name: string, direccion: string, tipo: string){
    await connectMongoDB;

    const newOne = new Proveedor();
    newOne._id = id;
    newOne.name = name;
    newOne.direccion = direccion;
    newOne.tipo = tipo;

    newOne.save( (err:any) =>{
        if(err){
            console.log(err.message);
        }else{
            console.log(newOne);
        }
    } );
}
/*
export function getProveedor(_name: string):Promise<any>{
    return new Promise<any>( resolve => {
        Proveedor.findOne({ name: _name}, (err:any,data:any) => {
            if(err){
                resolve({});
            }else{
                resolve(data);
            }
        } );
    });
}
*/

export function getProveedor(filtro: any):Promise<any>{
    return new Promise<any>( resolve => {
        Proveedor.findOne(filtro, (err:any,data:any) => {
            if(err){
                resolve({});
            }else{
                resolve(data);
            }
        } );
    });
}
export const DeleteProveedor = async function(_name:string){
    await connectMongoDB;
    Proveedor.deleteOne({name:_name}, (err:any,result:any) => {
        if(err){
            console.log(err.message);
        }else{
            console.log(result);
        }
    });
} 

export const DeleteProveedorByType = async function(filter:any){
    await connectMongoDB;
    Proveedor.deleteMany(filter, (err:any,result:any) => {
        if(err){
            console.log(err.message);
        }else{
            console.log(result);
        }
    });
} 
