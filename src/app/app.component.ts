import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, FormsModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'ejemplo3';


  //Propiedades

  producto = {

    id: 0,
    descripcion: '',
    precio: 0

  };

  productos = [

    {id: 1, descripcion: 'Gansito Marinela', precio: 15.50},
    {id: 2, descripcion: 'Sabritas Amarillas', precio: 18.75},
    {id: 3, descripcion: 'Coca-Cola 600', precio: 20.00},
    {id: 4, descripcion: 'Galletas Chokis', precio: 25.50},
    {id: 5, descripcion: 'Sidral Mundet', precio: 18.50},

  ];

  //Función para agregar un producto al arreglo

  agregarProducto(){

    //Validamos que el ID no sea 0

    if (this.producto.id == 0) {
      alert('El ID debe ser diferente de CERO');
      return;
    }

    //Verificamos que el ID no sea repetido

    for(let i=0; i < this.productos.length; i++){
      if(this.producto.id == this.productos[i].id){
        alert('Ya existe un producto con ese ID');
        return;
      }
    }

    //Agregamos el producto al arreglo

    this.productos.push({
      id: this.producto.id,
      descripcion: this.producto.descripcion,
      precio: this.producto.precio
    });

    //Reiniciamos el objeto producto a sus valores iniciales

    this.producto.id = 0;
    this.producto.descripcion = '';
    this.producto.precio = 0;

  }

  //Función para seleccionar un producto existente

  seleccionarProducto(productoSeleccionado: {id: number; descripcion: string; precio: number}){

    this.producto.id = productoSeleccionado.id;
    this.producto.descripcion = productoSeleccionado.descripcion;
    this.producto.precio = productoSeleccionado.precio;

  }

  //Función para modificar el producto

  modificarProducto(){

    for(let i=0; i < this.productos.length; i++){
      if(this.producto.id == this.productos[i].id){
        this.productos[i].descripcion = this.producto.descripcion;
        this.productos[i].precio = this.producto.precio;

        //Reseteamos el objeto producto

        this.producto.id = 0;
        this.producto.descripcion = '';
        this.producto.precio = 0;
        return;

      }
    }
    alert('No existe ese ID');
  }

  //Función para elminar un producto del arreglo

  eliminarProducto(id:number){
    for(let i=0; i < this.productos.length; i++){
      if(id == this.productos[i].id){
        this.productos.splice(i, 1);
      }
    }
  }
}
