import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute } from '@angular/router';
import { CharacterService } from '../../services/character.service';
import { Character } from '../../models/character.model';
import { MatCardModule } from '@angular/material/card'; // 👈 Add this


@Component({
  selector: 'app-characterdetails',
  standalone: true,
  imports: [CommonModule,MatCardModule],
  templateUrl: './characterdetails.component.html',
  styleUrl: './characterdetails.component.css',
  providers: [CharacterService]
})
export class CharacterdetailsComponent implements OnInit {
  character!: Character; // 

  constructor(
    private route: ActivatedRoute,
    private characterService: CharacterService
  ) {}

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id');
    if (id) {
      this.characterService.getCharacterById(id).subscribe(data => {
        this.character = data;
      });
    }
  }
}
