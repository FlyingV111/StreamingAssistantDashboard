import { Component } from '@angular/core';
import {Router} from "@angular/router";
import {Sa_button_types} from "../CustomComponents/sa-button/sa_button_types";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {
    protected readonly Sa_button_types = Sa_button_types;
}
