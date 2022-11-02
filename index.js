const Container = require("./clase.js")
const productos = new Container("./productos.json")

async function ejecutar(){

    const objeto3={
        nombre:"empanada de j y q",
        precio:320,
        thumbnail:"url"
    }
    const objeto2={
        nombre:"empanada carne",
        precio:330,
        thumbnail:"url"
    }
    const objeto1={
        nombre:"pizza",
        precio:310,
        thumbnail:"url"
    }

    await productos.deleteById(2).then(id=>console.log(id))
    
}
ejecutar()