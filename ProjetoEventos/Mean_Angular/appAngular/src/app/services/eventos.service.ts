import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Evento } from '../models/Evento';

@Injectable({
    providedIn: 'root'
})
export class EventosService {

    constructor(private http: HttpClient) { }

    findAll() {
        return this.http.get<Evento[]>('http://localhost:3200/eventos');
    }

    create(evento: Evento) {
        return this.http.post<Evento[]>('http://localhost:3200/eventos', evento);
    }

    update(evento: Evento) {
        return this.http.put<Evento[]>(`http://localhost:3200/eventos/${evento._id}`, evento);
    }

    delete(id: string) {
        return this.http.delete<Evento[]>(`http://localhost:3200/eventos/${id}`);        
    }
}
