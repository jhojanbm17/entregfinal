//console.log(producto);
const Stock=[];
let contenedor = document.getElementById("misproductos");

function entregaProdcutos(){
    for(const producto of productos){
        contenedor.innerHTML +=`
        <div class="card" style="width: 18rem;">
            <div class="card-body">
                <h5 class="card-title">${producto.id}</h5>
                <p class="card-text">${producto.Referencia}</p>
                <p class="card-text">${producto.nombre}</p>
                <p class="card-text">${producto.precio}</p>
                <button id="btn${producto.id}" type="button" class="btn btn-primary">Anadir Stock</button>
            </div>
        </div>
        `;
        
    }
    //eventos

    productos.forEach(producto =>{
        document.getElementById(`btn${producto.id}`).addEventListener("click",function(){
            anadirAlStock(producto);
        });
    })
}

entregaProdcutos();

function anadirAlStock(productoAnadir){
    Stock.push(productoAnadir);
    console.log(Stock);
    alert("producto:"+productoAnadir.nombre+"en Stock");
    document.getElementById("tablabody").innerHTML +=`
        <tr>
            <td>${productoAnadir.id}</td>
            <td>${productoAnadir.Referencia}</td>
            <td>${productoAnadir.nombre}</td>
            <td>${productoAnadir.precio}</td>
            <td><button id="btn${producto.eliminar}" type="button" onclick="eliminar(event)" class="btn btn-warning">Eliminar</button></td>
        </tr>
    `;
}
//funcion eliminar boton productos
 function eliminar(ev){
    console.log(ev);
    let fila=ev.target.parentElement.parentElement;
    console.log(fila);
    let id=fila.children[0].innerText;
    console.log(id);
    let indice = Stock.findIndex(producto=>producto.id==id);
    console.log(indice)
    //elimina producto
    Stock.splice(indice,1);
    console.table(Stock);
    //remueve filas
    fila.remove();
 }

//Almacenar producto por producto
for (const producto of Stock) {
    guardarLocal(producto.id, JSON.stringify(producto));
}

const guardarProductos = () => {
    return new Promise( (resolve, reject) => {
        setTimeout(() => {
            resolve(productos)
        }, 2500)
    })
}
let producto = []
