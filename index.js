const product = [
    {
        id: 001,
        nombre: "Auriculares",
        precio: 20,
        descripcion: "Auriculares Originales Apple originales importadas de EEUU",
        categoria: "Tecnologia",
        oferta: true
    },
    {
        id: 002,
        nombre: "Parlante Philips",
        precio: 40,
        descripcion: "Parlates Originales Apple",
        categoria: "Tecnologia",
        oferta: false
    },
    {
        id: 003,
        nombre: "Dron",
        precio: 100,
        descripcion: "Dron conm Camara HD para excurciones",
        categoria: "Tecnologia",
        oferta: false
    },
    {
        id: 004,
        nombre: "Mouse Radeon",
        precio: 40,
        descripcion: "Mouse Originales Radeon con configuracion led incorporada",
        categoria: "Tecnologia",
        oferta: true
    },
    {
        id: 005,
        nombre: "Teclado",
        precio: 60,
        descripcion: "Teclado Originales Mercos con configuracion led incorporada",
        categoria: "Tecnologia",
        oferta: false
    },
    {
        id: 006,
        nombre: "Luces Led",
        precio: 20,
        descripcion: "Luces Led Omega 13 originales de China",
        categoria: "Tecnologia",
        oferta: true
    },
    {
        id: 007,
        nombre: "Cargador Looper",
        precio: 50,
        descripcion: "Cargador Originales Looper",
        categoria: "Tecnologia",
        oferta: false
    }
]

const productSave = [...product].filter((elemento) => {
    let res = ""
    if (elemento.oferta === true) {
        res = console.log(`El Producto ${elemento.nombre} tiene un 20% de dscto`)
    }
    return res
})
console.log(productSave)

const nombreArray = [...product].map((elemento) => {
    return elemento.nombre
})

console.log(nombreArray)

const ordenarNombre = nombreArray.sort((a, b) => {
    if (a < b) {
        return -1
    } else if (a > b) {
        return 1
    } else {
        return 0
    }
})
console.log(ordenarNombre)



if (window.confirm("Quiere ver las ofertas de la tienda?") === true) {
    const descuentos = [...product].filter((elemento) => {
        let ress = ""
        if (elemento.oferta === true) {
            ress = window.alert(` Los Siguientes productos tiene un 15% de dscto :\n
--> Nombre: ${elemento.nombre}\n 
--> Descripción: ${elemento.descripcion}\n`)
        }
        return ress
    })
} else {
    window.alert("No hay ofertas disponibles")
}

const buscarProducto = [...product].find((elemento) => {
    return elemento.nombre, elemento.precio
})

console.log(buscarProducto)

let dato = prompt(`Que producto esta buscando ... `)
let res = ""
if (buscarProducto.nombre == dato) {
    res=window.alert(`El producto ${buscarProducto.nombre} esta disponible y cuesta ${buscarProducto.precio} dolares`)
} else {
    res= window.alert("El producto no existe")
}