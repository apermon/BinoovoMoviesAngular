import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MoviesService {

  movies:any[] = [
    {
      name: 'Star wars',
      category: 'Ficcion',
      description: 'aaaaaaaaaaaaaaaa',
      image: './assets/img/starwars.jpg'
    },
    {
      name: 'Joker',
      category: 'Drama',
      description: 'bbbbbbbbbbbbbb',
      image: './assets/img/joker.jpg'
    }
  ]

  constructor() {
    console.log('funcionando servicio');
  }

  obtenerPeliculas(){
    return this.movies;
  }

  obtenerMovie(i){
    return this.movies[i];
  }
}
