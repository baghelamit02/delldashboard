import { Component, OnInit } from '@angular/core';
import {NgbModal, ModalDismissReasons}  from '@ng-bootstrap/ng-bootstrap'; 

@Component({
  selector: 'app-head-map',
  templateUrl: './head-map.component.html',
  styleUrls: ['./head-map.component.css']
})
export class HeadMapComponent implements OnInit {

  constructor(private modalService: NgbModal) {} 
  
  activeTodayWeek :boolean = true;
  activeToday :boolean;
  activeLastMonth :boolean;
  filterType :string = 'Week';
  closeResult = ''; 

  ngOnInit(): void {
    //alert(this.filterType);
  }

  onLastWeek()
  {
    this.filterType = "Week";
    this.activateLastWeek();
  }

  onActiveLastMonth()
  {
    this.filterType = "Month"; 
    this.activeTodayWeek = false; 
    this.activeToday =false;
    this.activeLastMonth =!this.activeLastMonth;
  }

  onActiveToday()
  {
    this.filterType = "Today";
    this.activeTodayWeek = false; 
    this.activeToday =!this.activeToday;;
    this.activeLastMonth =false;
    
  }
  activateLastWeek(){
    this.activeTodayWeek = !this.activeTodayWeek; 
    this.activeToday =false;
    this.activeLastMonth =false;
      
  }

  open(content) {
    this.modalService.open(content, {windowClass: 'modal-holder', centered: true}).result.then((result) => {
      this.closeResult = `Closed with: ${result}`;
    }, (reason) => {
      this.closeResult = `Dismissed ${this.getDismissReason(reason)}`;
    });
  }
  
  private getDismissReason(reason: any): string {
    if (reason === ModalDismissReasons.ESC) {
      return 'by pressing ESC';
    } else if (reason === ModalDismissReasons.BACKDROP_CLICK) {
      return 'by clicking on a backdrop';
    } else {
      return  `with: ${reason}`;
    }  }

 

}
