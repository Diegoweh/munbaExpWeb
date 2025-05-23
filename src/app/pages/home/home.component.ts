import { Component } from '@angular/core';
import { HomeHeaderComponent } from "../../components/home-header/home-header.component";
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-home',
  imports: [HomeHeaderComponent, RouterLink],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {

}
