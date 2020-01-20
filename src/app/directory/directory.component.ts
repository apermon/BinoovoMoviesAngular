import { Component, OnInit } from '@angular/core';
import { MoviesService}  from './../movies.service';

@Component({
  selector: 'app-directory',
  templateUrl: './directory.component.html',
  styleUrls: ['./directory.component.css']
})
export class DirectoryComponent implements OnInit {

  movies:any[] = [];

  constructor(private _servicio:MoviesService) {
    this.movies = _servicio.obtenerPeliculas();
  }

  ngOnInit() {
  }

}
