import { Component } from '@angular/core';

class Film {
  constructor(public id: number, public name: string, public genre: string) {}
}

@Component({
  selector: 'app-search',
  templateUrl: './addFilm.component.html',
  styleUrls: ['./addFilm.component.scss'],
})
export class AddFilmComponent {
  genres = ['Horror', 'Comedy', 'Documentary', 'Action'];
  model = new Film(1, 'Nobody', this.genres[3]);
  submited = false;

  onSubmit() {
    this.submited = true;
  }
}
