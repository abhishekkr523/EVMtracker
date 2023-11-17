import { Component, OnInit } from '@angular/core';
import axios from 'axios';

@Component({
  selector: 'app-admin-dashboard-trac',
  templateUrl: './admin-dashboard-trac.component.html',
  styleUrls: ['./admin-dashboard-trac.component.scss']
})
export class AdminDashboardTracComponent implements OnInit{
  panelOpenState = false;
  ngOnInit(): void {
    axios.get('https://web.grootspace.live/api/voters').then((response) => {
      console.log(response.data);
    }).catch((error) => {
      console.log(error);
    });
    // const sidebar = document.querySelector(".sidebar") as HTMLElement;
    // const closeBtn = document.querySelector("#btn") as HTMLElement;
    // const searchBtn = document.querySelector(".bx-search") as HTMLElement;

    // closeBtn.addEventListener("click", () => {
    //   sidebar.classList.toggle("open");
    //   this.menuBtnChange(closeBtn, sidebar);
    // });

    // searchBtn.addEventListener("click", () => {
    //   sidebar.classList.toggle("open");
    //   this.menuBtnChange(closeBtn, sidebar);
    // });
  }

  // private menuBtnChange(closeBtn: HTMLElement, sidebar: HTMLElement): void {
  //   if (sidebar.classList.contains("open")) {
  //     closeBtn.classList.replace("bx-menu", "bx-menu-alt-right");
  //   } else {
  //     closeBtn.classList.replace("bx-menu-alt-right", "bx-menu");
  //   }
  // }

  ToggleDropdown() {
    const dropdown = document.querySelector('.dropdown-content') as HTMLElement;
    dropdown.style.display = dropdown.style.display === 'none' ? 'block' : 'none';
  }

  toggleDropdown(dropdownType: string) {
    const dropdown = document.querySelector(`.${dropdownType}-dropdown`) as HTMLElement;
    dropdown.style.display = dropdown.style.display === 'none' ? 'block' : 'none';
  }
}
