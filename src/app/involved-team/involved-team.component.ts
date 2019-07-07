import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';

@Component({
  selector: 'app-involved-team',
  templateUrl: './involved-team.component.html',
  styleUrls: ['./involved-team.component.css']
})
export class InvolvedTeamComponent implements OnInit {

  teamMembers :any
  constructor(private dataService:DataService) { }

  ngOnInit() {
    this.dataService.getInvolvedTeam().subscribe(data=>{
      this.teamMembers = data;
    })
    
  }

}
