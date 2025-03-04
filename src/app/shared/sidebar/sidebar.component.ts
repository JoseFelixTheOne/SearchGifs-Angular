import { Component } from '@angular/core';
import { GifsService } from './../../gifs/services/gifs.service';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent {

  constructor(private gifsService: GifsService){}

  get history() {
    return this.gifsService.history;
  }

  search(title: string) {
    this.gifsService.searchGifs(title);
  }

}
