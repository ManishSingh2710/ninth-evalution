import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent implements OnInit {

  previousId = 1;

  constructor() {
    this.selectedData = this.listData[0];
    console.log("selected ", this.selectedData);
  }

  ngOnInit(): void {

  }


  listData: ListType[] = [
    {
      listId: 1,
      data: false,
      title: "Cube",
      sublist: [
        {
          name: "Apps",
          qty: 10,
          next: [
            "Profile",
            "Email",
            "Calender",
            "Shop"
          ]
        },
      ]
    },
    {
      listId: 2,
      data: true,
      title: "Apps",
      sublist: [
        {
          name: "Apps",
          qty: 10,
          next: [
            "Profile",
            "Email",
            "Calender",
            "Shop"
          ]
        },
        {
          name: "Charts",
          qty: 6,
          next: [
            "Flot",
            "Morris",
            "Chartjs",
            "Chartlist",
            "Peity"
          ]
        }
      ],
    },
    {
      listId: 3,
      data: true,
      title: "Dashboard",
      sublist: [
        {
          name: "Dashboard",
          qty: 4,
          next: [
            "List",
            "Dark",
            "Mini Sidebar",
            "Sidebar"
          ]
        },
      ],
    },
    {
      listId: 4,
      data: true,
      title: "Components",
      sublist: [
        {
          name: "Bootstrap",
          qty: 17,
          next: [
            "List",
            "Dark",
            "Mini Sidebar",
            "Sidebar"
          ]
        },
        {
          name: "Plugins",
          qty: 6,
          next: [
            "List",
            "Dark",
            "Mini Sidebar",
            "Sidebar"
          ]
        },
        {
          name: "Widget",
          qty: 0,
          next: []
        },
        {
          name: "SVG Icon",
          qty: 0,
          next: []
        },
      ],
    },
    {
      listId: 5,
      data: true,
      title: "Forms",
      sublist: [
        {
          name: "Form Element",
          qty: 0,
          next: [
            "Form Elements",
            "Wizard",
            "Summernote",
            "Pickers",
            "Jquey Validate"
          ]
        },
      ],
    },
    {
      listId: 6,
      data: true,
      title: "Table",
      sublist: [
        {
          name: "Bootstrap",
          qty: 0,
          next: []
        },
        {
          name: "Datatable",
          qty: 0,
          next: []
        },
      ],
    },
    {
      listId: 7,
      data: true,
      title: "Extra",
      sublist: [
        {
          name: "Register",
          qty: 0,
          next: []
        },
        {
          name: "Login",
          qty: 0,
          next: []
        },
        {
          name: "Error",
          qty: 5,
          next: [
            "Error 400",
            "Error 403",
            "Error 404",
            "Error 500",
            "Error 503",
          ]
        },
        {
          name: "Lock Screen",
          qty: 0,
          next: []
        },
      ],
    },

  ]

  selectedData: ListType;

  changeTab(value) {
    let previousElement = document.getElementById(this.previousId.toString());
    previousElement.classList.remove('active');

    let selectedElement = document.getElementById(value);
    selectedElement.classList.add('active');
    this.previousId = value;

    this.selectedData = this.listData[value - 1];
    console.log("selected Data", this.selectedData, value)
  }
}


export type ListType = {
  listId: number,
  data: boolean,
  title: string,
  sublist: SubListType[]
}

export type SubListType = {
  name: string,
  qty: number,
  next: string[]
}