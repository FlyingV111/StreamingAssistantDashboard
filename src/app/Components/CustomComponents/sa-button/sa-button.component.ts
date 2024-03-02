import {Component, Input} from '@angular/core';
import {Sa_button_types} from "./sa_button_types";
import {NgClass} from "@angular/common";

@Component({
  selector: 'sa-button',
  templateUrl: './sa-button.component.html',
  styleUrl: './sa-button.component.css',
  imports: [
    NgClass
  ],
  standalone: true
})
export class SaButtonComponent {
  @Input()
  Type: Sa_button_types = Sa_button_types.primary;
  protected readonly Sa_button_types = Sa_button_types;
}
