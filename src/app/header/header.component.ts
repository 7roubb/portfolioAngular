import { Component,ElementRef, HostListener } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css','../../mediaquareis.css']
})
export class HeaderComponent {
  isOpen: boolean = false;

  toggleBtnIconClass: string = 'fa-solid fa-bars';

  

  toggleDropDown(){
    console.log('toggleDropDown');
    this.isOpen = !this.isOpen;
    this.toggleBtnIconClass = this.isOpen ? 'fa-solid fa-xmark' : 'fa-solid fa-bars';
}



  constructor(private elementRef: ElementRef) {}


  @HostListener('document:click', ['$event'])
  onClick(event: Event) {
    if (!this.elementRef.nativeElement.contains(event.target)) {
      this.isOpen = false;
      this.toggleBtnIconClass = this.isOpen ? 'fa-solid fa-xmark' : 'fa-solid fa-bars';

    }
  }
}