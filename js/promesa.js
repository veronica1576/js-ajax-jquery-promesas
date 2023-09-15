



let usuarios = [{
    idU: 1, 
    nombreU: 'Andres'
},
{
    idU: 2,
    nombreU: 'Laura'
},
{
    idU: 3,
    nombreU: 'Sandra'
},
{
    idU: 4,
    nombreU: 'Esteban'
}];

let telefonos = [{
    idU: 1,
    telefono: 11111
}, 
{
    idU:2, 
    telefono: 22222

},
{
    idU:3, 
    telefono: 33333

},{
    idU:4, 
    telefono: 44444

}];

 

const obtenerUsuarios = id =>{
    return new Promise((resolve, reject) =>{
       if(usuarios.find(usuario=>usuario.idU===id)){
           resolve(obtenerUsuarios(id));
       }else{
           reject('El usuario no existe');
       }
   
   });
   
   };
   
   const obtenerTelefono = id =>{
       return new Promise((resolve, reject) =>{
          if(telefonos.find(telefono=>telefono.idU===id)){
              resolve('El usuario no existe');
          }else{
              reject('El usuario no existe');
          }
      
      });
      
      };
   
      obtenerUsuarios()
      .then(res=>{
       return res;
      })
      .catch(mensaje =>{
          console.log(mensaje);
      })
      .catch(error =>{
       console.log(error);
   
      });
   
   