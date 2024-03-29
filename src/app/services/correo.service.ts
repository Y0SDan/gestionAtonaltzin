import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';



@Injectable({
  providedIn: 'root'
})
export class CorreoService
{
constructor(private http: HttpClient) { }
enviarCorreoRecuperarContrasenya(body:any)
{
return this.http.post(`${environment.API_URL_CORREOS}/enviarCorreoRecuperarContrasenya/`,body);
}
decodificarMail(token:any)
{
let dato={"token":token};
return this.http.post(`${environment.API_URL_CORREOS}/decodificarMail`, dato);
}
}
