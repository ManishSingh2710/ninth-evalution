import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent implements OnInit {

  previousId = 1;
  name = "";
  sublist = false;
  sublistname ="";
  listData: ListType[] = [
    {
      listId: 1,
      data: false,
      title: "Cube",
      sublist: [
        {
          name: "Apps",
          qty: 0,
          next: [],
          iconurl: "fa fa-mobile"
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
          ],
          iconurl: "fa fa-mobile",
          subqty: true,
          li: [
            "Product Grid",
            "Product List",
            "Product Details",
            "Invoice",
            "Orders"
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
          ],
          iconurl: "fa fa-opencart"
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
          ],
          iconurl: "fa fa-th-large"
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
          ],
          iconurl: "fa fa-bold"
        },
        {
          name: "Plugins",
          qty: 6,
          next: [
            "List",
            "Dark",
            "Mini Sidebar",
            "Sidebar"
          ],
          iconurl: "fa fa-plug"
        },
        {
          name: "Widget",
          qty: 0,
          next: [],
          iconurl: "fa fa-tag"
        },
        {
          name: "SVG Icon",
          qty: 0,
          next: [],
          iconurl: "fa fa-contao"
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
          ],
          iconurl: "fa fa-wpforms",

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
          next: [],
          iconurl: "fa fa-bold"
        },
        {
          name: "Datatable",
          qty: 0,
          next: [],
          iconurl: "fa fa-table"
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
          next: [],
          iconurl: "fa fa-registered"
        },
        {
          name: "Login",
          qty: 0,
          next: [],
          iconurl: "fa fa-sign-in"
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
          ],
          iconurl: "fa fa-exclamation-circle"
        },
        {
          name: "Lock Screen",
          qty: 0,
          next: [],
          iconurl: "fa fa-lock"
        },
      ],
    },

  ]
  selectedData: ListType;

  constructor() {
    this.selectedData = this.listData[0];
  }

  ngOnInit(): void {

  }

  changeTab(value) {
    const previousElement = document.getElementById(this.previousId.toString());
    previousElement.classList.remove('active');

    const selectedElement = document.getElementById(value);
    selectedElement.classList.add('active');

    this.previousId = value;
    this.selectedData = this.listData[value - 1];
  }

  openlist(value) {
    if (this.name == value)
      this.name = "";
    else
      this.name = value;
  }

  opensublist(value){
    if (this.sublistname == value)
      this.sublistname = "";
    else
      this.sublistname = value;
    this.sublist = true;
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
  next: string[],
  iconurl?: string,
  subqty?: boolean;
  li?: string[]
}