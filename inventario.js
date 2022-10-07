class Inventario{
    constructor(){
        this.catalogo = [];
        this.aux;
        this.elim;
    }
    agregar(producto){
        this.catalogo.push(producto);
        for(var i = 0; i < this.catalogo.length; i++){
            for(var j = 0; j < (this.catalogo.length - i - 1); j++){
                if(this.catalogo[j].codigo > this.catalogo[j+1].codigo){
                    let aux = this.catalogo[j]
                    this.catalogo[j] = this.catalogo[j + 1]
                    this.catalogo[j+1] = aux
                }
            }
        }     
    }
    eliminar(codigo){
        for (let i = 0; i < this.catalogo.length; i++) {
            if (this.catalogo[i].codigo == codigo) {
              this.elim = this.catalogo[i];
              this.aux = this.catalogo[this.catalogo.length - 1];
              this.catalogo[i] = this.aux;
              this.catalogo[this.catalogo.length - 1] = this.elim;
              return this.catalogo.pop();
            }
          }
          return null;
    }
    listado(i){
        return this.catalogo[i];
    }
    listadoinverso(i){
        return this.catalogo[i];
    }
    buscar(codigo){ 
        let inicio=0;
        let fin=this.catalogo.length-1;
        while (inicio<=fin){
            let mitad=Math.floor((inicio + fin)/2);
            if (this.catalogo[mitad].codigo === codigo)
            return this.catalogo[mitad];      
            else if (this.catalogo[mitad].codigo < codigo)
            inicio = mitad + 1;
            else
            fin = mitad - 1;
        }
        return null;
    }
}
