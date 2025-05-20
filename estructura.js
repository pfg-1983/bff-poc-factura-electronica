const fs = require('fs')
const path = require('path')

function listarEstructura(dir, nivel = 0) {
  const indent = '  '.repeat(nivel)
  const archivos = fs.readdirSync(dir)

  archivos.forEach(archivo => {
    const rutaCompleta = path.join(dir, archivo)
    const stat = fs.statSync(rutaCompleta)

    if (stat.isDirectory()) {
      console.log(`${indent}📁 ${archivo}/`)
      listarEstructura(rutaCompleta, nivel + 1)
    } else {
      console.log(`${indent}📄 ${archivo}`)
    }
  })
}

const raiz = path.resolve(__dirname)
console.log(`🔍 Explorando estructura desde: ${raiz}`)
listarEstructura(raiz)
