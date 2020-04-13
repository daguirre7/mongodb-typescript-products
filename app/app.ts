import {CreateProveedor,DeleteProveedor, DeleteProveedorByType} from "./Proveedores"
import {CreateProduct, deleteProduct,updateProduct} from "./products"

/*
CreateProveedor("P1","Colonia","Direccion de XX","1")
CreateProveedor("P2","Pronto","Direccion de Pronto","1")
CreateProveedor("P3","WallMart","Direccion de WallMArt","1")
*/

//CreateProduct("A","Mi super producto",20,30,100);


//DeleteProveedorByType({tipo:1});

/*
const ProductNames: string[]=["POO","UNAH","Goku","Super","Tamales","Tomates","Detergentes","Chocolates"];


for(let i=1;i <=100;i++){
    let precioCosto:number = Math.floor(Math.random()*1000) + 30;
    let precioVenta:number = Math.floor(Math.random()*1100) + 35;
    let cantidad:number = Math.floor(Math.random()*100) + 1;
    let name:string="Producto"+ProductNames[Math.floor(Math.random()*ProductNames.length)] + " de " +ProductNames[Math.floor(Math.random()*ProductNames.length)];
    let n:number = Math.floor(Math.random() * 3) + 1;
    let prov:string = "P"+n    
    CreateProduct({_id:prov},name,precioCosto,precioVenta,cantidad);
}    

*/

//deleteProduct({cantidad:{$gt:0}});
// operador $gt MAYORES A $lt MENORES A

updateProduct({precio_venta:{$gt:500}},{$set:{precio_compra:0}});
