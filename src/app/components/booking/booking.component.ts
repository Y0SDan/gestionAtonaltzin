import { Component, OnInit } from '@angular/core';
import { Reservacion4 } from 'src/app/Models/Reservacion4';
import { ReservaService } from './../../services/reserva.service';
declare var $: any;

@Component({
  selector: 'app-booking',
  templateUrl: './booking.component.html',
  styleUrls: ['./booking.component.css']
})
export class BookingComponent implements OnInit {
  reservas :  [] = [];
  reserva: Reservacion4 = new Reservacion4();
  nuevaReserva: Reservacion4 = new Reservacion4();
FechaInicio:string;
FechaFin:string;

  constructor(private reservaService: ReservaService) {
    this.FechaInicio=""
this.FechaFin=""
   }

  ngOnInit(): void {
    {
      this.initDatepickerIni();
      this.initDatepickerFin();
      }
}
initDatepickerIni()
{
$("#fechaIni").datepicker({
format: 'yyyy-mm-dd',
defaultDate: this.FechaInicio
})
}
initDatepickerFin()
{
$("#fechaFin").datepicker({
format: 'yyyy-mm-dd',
defaultDate: this.FechaFin
})
}
actualizarFechaIni(date?: any)
{
if(date){
this.FechaInicio = date;
}
console.log(this.FechaInicio);
}
actualizarFechaFin(date?: any)
{
if(date){
this.FechaFin = date;
}
}
  addReserva() {
    this.nuevaReserva = new Reservacion4();
    this.nuevaReserva.ID_Cliente = parseInt(localStorage.getItem('ID_Cliente') ?? '-1'); // Usar parseInt para convertir el string en número, o proporcionar un valor predeterminado si es null
    console.log("Cliente Nuevo")
    $('#modalCrearReservacion').modal();
    $("#modalCrearReservacion").modal("open");
}

guardarNuevaReserva(){
  this.nuevaReserva.FechaInicio = this.FechaInicio;
  this.nuevaReserva.FechaFin = this.FechaFin;
  console.log("GuardandoUsuario")
  this.reservaService.addReserva(this.nuevaReserva).subscribe((res) => {
    $('#modalCrearReservacion').modal('close');
    this.reservaService.list().subscribe(
      (resusuarios: any) => {
        this.reserva = resusuarios;
        console.log(resusuarios);
      },
      (err: any) => {
        console.error(err);
        this.showAlert('Something went wrong!', 'error');
      }
    );
});

}
updateFechaInicio(event: any) {
  this.nuevaReserva.FechaInicio = event.target.value;
}

updateFechaFinal(event: any) {
  this.nuevaReserva.FechaFin = event.target.value;
}
showAlert(message: string, type: 'success' | 'error' | 'warning' = 'success') {
  // Define el estilo del mensaje de alerta
  const alertStyle = {
    success: {
      backgroundColor: '#4CAF50', // Verde para éxito
      color: '#FFF',
    },
    error: {
      backgroundColor: '#f44336', // Rojo para error
      color: '#FFF',
    },
    warning: {
      backgroundColor: '#ff9800', // Naranja para advertencia
      color: '#FFF',
    },
  };
}
submitForm() {
  // Ejecuta la función para guardar el nuevo usuario
  this.guardarNuevaReserva();

  // Redirige a la página principal
  window.location.href = '/principal';
}
}


