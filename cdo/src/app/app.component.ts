import { Component, Inject, inject, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { DataService } from 'clm-shared';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet],
  templateUrl: './app.component.html',
  standalone: true,
})
export class AppComponent implements OnInit {
  title = 'cdo';
  data = '';
  protected dataService = inject(DataService);


  ngOnInit(): void {
    this.dataService.fetchData().subscribe((data) => {
      this.data = data;
    });
  }
}
