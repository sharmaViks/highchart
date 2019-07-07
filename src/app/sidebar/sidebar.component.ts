import { Component } from '@angular/core';
import { DataService } from '../data.service';

@Component({
  selector: 'sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent {
  name: string;
  imgPath: string;
  sidebarData: any;
  isSidebarExpanded: boolean;
  constructor(private dataService: DataService) {
     this.isSidebarExpanded = false;
   }
  ngOnInit() {
    this.name = "Jack Wiiliams";
    this.imgPath = "../assets/images/jack.jfif";
    this.dataService.getSidebarData().subscribe(data => {
      this.sidebarData = data;
    });

  }
  myFunction() {
    document.getElementById("myDropdown").classList.toggle("show");
  }
  toggleSidebar() {
    this.isSidebarExpanded = !this.isSidebarExpanded;
  }
}