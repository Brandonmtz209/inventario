class Inventario{
    constructor(value, next, previous){
        this.value=value;
        this.next=next;
        this.previous=previous;
        this.primero=null;
    }
    agregar(producto){
        var actual;
        if(this.primero == null){
            this.primero = producto;
            this.next=null;
            this.previous=null;
            //console.log("if donde se agrego el primero producto");
        }else if((this.primero).codigo >= producto.codigo){
            producto.next = this.primero;
            producto.next.previous = producto;
            this.primero = producto;
            //console.log("else if donde el primero es mayor o igual que el producto que se quiere agregar");
        }else{
            actual = this.primero;
            while (actual.next!=null && actual.next.codigo < producto.codigo)
                actual = actual.next;
                producto.next = actual.next;
            //console.log("else while para recorrer todos los productos y el codigo del siguiente de su actual es menor que es codigo de producto");
            if(actual.next!=null)
                producto.next.previous = producto;
                actual.next = producto;
                producto.previous = actual;
                //console.log("if si en actual ya no hay siguiente");
            }
            //console.log("afuera");
            return this.primero;
    }
    listar(){
        let res='';
        let temp=this.primero;
        while(temp!=null){
            res+='Codigo: '+temp.codigo+', Nombre: '+temp.nombre +', Precio: '+temp.costo+', Cantidad: '+temp.cantidad+'<br>';
            temp=temp.next;
        }
        return res;
    }
    buscar(codigo) {
        let actual = this.primero;
        while (actual) {
            if (actual.codigo === codigo) {
                return 'Codigo: '+actual.codigo+', Nombre: '+actual.nombre +', Precio: '+actual.costo+', Cantidad: '+actual.cantidad;
            }
            actual = actual.next;
        }
        return null;
    }
    eliminar(codigo){
        if (this.primero.codigo === codigo) {
            this.primero = this.primero.next;
            return codigo;
        } else {
            let actual = this.primero;
            while (actual.next) {
                if (actual.next.codigo === codigo) {
                    let aux = actual.next;
                    actual.next = actual.next.next;
                    return aux;
                }
                actual = actual.next;
            }
            return null;
        }
    }
    listado(){
        let res='';
        let temp=this.primero;
        while (temp!=null) {
            res+='Codigo: '+temp.codigo+', Nombre: '+temp.nombre +', Precio: '+temp.costo+', Cantidad: '+temp.cantidad+'<br>';
            temp=temp.next;
        }                  
        return res;
    }
    listadoinverso(){
        let res='';
        let temp=this.primero;
        while (temp!=null) {
            res ='Codigo: '+temp.codigo+', Nombre: '+temp.nombre +', Precio: '+temp.costo+', Cantidad: '+temp.cantidad+'<br>' +res;
            temp=temp.next;
        }                  
        return res;
    }
}
