class Inventario{
    constructor(value, next){
        this.value = value;
        this.next = next;
        this.primero=null;
    }
    agregar(producto){
        if (this.primero==null)
        this.primero=producto;
        else{
            let temp=this.primero;
            while (temp.next!=null)
            temp=temp.next;
            temp.next=producto;
        }
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
                return actual;
            }
            actual = actual.next;
        }
        return null;
    }
    eliminar(codigo){
        if (this.primero.codigo === codigo) {
            this.primero = this.primero.next;
            return 'el producto '+codigo;
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
    Insertar(posicion,producto){
        let temp=this.primero;
        let anterior=temp;
        let lugar = 0;
        while (temp!=null){
            lugar++;
            if(posicion==1){
                producto.next = this.primero;
                this.primero = producto;
                return true;
            }
            else if(lugar==posicion){
                producto.next=temp;
                anterior.next=producto;
                return true;
            }else if (temp.next==null){
                temp.next=producto;
                return true;
            }
            anterior=temp;
            temp=temp.next;
        }
    }
}
