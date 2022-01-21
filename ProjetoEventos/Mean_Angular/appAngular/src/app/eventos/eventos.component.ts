import { Component, OnInit } from '@angular/core';
import { Evento } from '../models/Evento';
import { EventosService } from '../services/eventos.service';

@Component({
    selector: 'app-eventos',
    templateUrl: './eventos.component.html',
    styleUrls: ['./eventos.component.less']
})
export class EventosComponent implements OnInit {

    public eventos: Evento[] = [];
    //public eventos: Evento[] = new Array();

    constructor(private service: EventosService) { }

    ngOnInit(): void {
        this.service.findAll().subscribe( (resposta) => {
            console.log(resposta);
            this.eventos = resposta;
            //alert(this.eventos.length);
        });
    }
}
