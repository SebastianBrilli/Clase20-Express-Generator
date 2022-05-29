let fs = require('fs');
const path = require('path');

const indexController= {
    
filePath: path.join(__dirname, '../data/menu.json'),
    
readFile: () => { 
    return JSON.parse(fs.readFileSync(indexController.filePath, 'utf-8'))  
},

index: function(req, res) {
    let platos = indexController.readFile();
    res.render('index', {platos});
},

detail: function (req,res){
    let idSelected=req.params.id
    let platos = indexController.readFile();
    let selected = platos.find(elemento => elemento.id == idSelected);                                                       //Selecciono el evento del array

    res.render('detalleMenu', {selected})
}
}
module.exports = indexController