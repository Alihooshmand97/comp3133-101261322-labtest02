import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router'; // 👈 Add this
import { CharacterService } from '../../services/character.service';
import { Character } from '../../models/character.model';
import { MatCardModule } from '@angular/material/card'; // 👈 Add this

@Component({
  selector: 'app-characterlist',
  standalone: true,
  imports: [CommonModule, RouterModule, MatCardModule],
  templateUrl: './characterlist.component.html',
  styleUrl: './characterlist.component.css',
  providers: [CharacterService] // 👈 Add this line
})

export class CharacterlistComponent implements OnInit {

  characters: Character[] = []; // 👈 Change from any[]

  constructor(private characterService: CharacterService) {}

  ngOnInit(): void {
    this.characterService.getCharacters().subscribe((data: any[]) => {
      this.characters = data;
    });
  }
  
}
