class Inventario{
    constructor(){
        this.catalogo = [];
        this.aux;
        this.elim;
    }
    agregar(producto){
        this.catalogo.push(producto);
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
    listadoinverso(){
        for (let j = 0, k = this.catalogo.length - 1; j < this.catalogo.length / 2; j++, k--) {
            this.aux = this.catalogo[j];
            this.catalogo[j] = this.catalogo[k];
            this.catalogo[k] = this.aux;
        }
    }
    buscar(codigo){
        for (let i = 0; i < this.catalogo.length; i++) {
            if (this.catalogo[i].codigo == codigo) {
                return this.catalogo[i];
            }
        }
        return null;
    }
}
