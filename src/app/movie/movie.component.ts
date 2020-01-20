import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { MoviesService}  from './../movies.service';

@Component({
  selector: 'app-movie',
  templateUrl: './movie.component.html',
  styleUrls: ['./movie.component.css']
})
export class MovieComponent implements OnInit {

  movie:any[] = [];

  constructor(
    private ruta:ActivatedRoute,
    private _servicio:MoviesService
  ) {
    this.ruta.params.subscribe(params=>{
      console.log(params['id']);
      this.movie = this._servicio.obtenerMovie(params['id']);
    })
  }

  ngOnInit() {
  }

}
