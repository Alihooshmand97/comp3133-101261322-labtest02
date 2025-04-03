import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms'; // 👈 Add this
import { HttpClient } from '@angular/common/http';
import { Character } from '../../models/character.model'; // 👈 Add this
import { MatSelectModule } from '@angular/material/select'; // 👈 NEW
import { MatCardModule } from '@angular/material/card';     // 👈 NEW


@Component({
  selector: 'app-characterfilter',
  standalone: true,
  imports: [CommonModule, FormsModule, MatSelectModule, MatCardModule], // 👈 Add FormsModule here
  templateUrl: './characterfilter.component.html',
  styleUrl: './characterfilter.component.css'
})
export class CharacterfilterComponent {
  houses = ['Gryffindor', 'Slytherin', 'Hufflepuff', 'Ravenclaw'];
  selectedHouse: string = '';
  characters: Character[] = [];

  constructor(private http: HttpClient) {}

  onHouseChange() {
    if (this.selectedHouse) {
      const url = `https://hp-api.onrender.com/api/characters/house/${this.selectedHouse.toLowerCase()}`;
      this.http.get<any[]>(url).subscribe(data => {
        this.characters = data;
      });
    } else {
      this.characters = [];
    }
  }
}
