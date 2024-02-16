import { Component ,ElementRef, ViewChild, AfterViewInit} from '@angular/core';
import Typed from 'typed.js';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css','../../mediaquareis.css']
})
export class HomeComponent implements AfterViewInit {
  @ViewChild('typedElement') typedElement: ElementRef;
  textToType: string = "Osama Hroub";
  typedText: string = "";
  constructor() { }

  ngAfterViewInit() {
    const options = {
      strings: ['Web Designer', 'Backend Developer','Frontend Developer'], 
      typeSpeed: 70, 
      backSpeed: 70, 
      showCursor: true,
      cursorChar: '',

      loop: true 
    };

    new Typed(this.typedElement.nativeElement, options);
  }
  ngOnInit(): void {
    this.typeText();
  }

  typeText() {
    let currentIndex = 0;
    const typingInterval = setInterval(() => {
      this.typedText = this.textToType.slice(0, currentIndex);
      currentIndex++;
      if (currentIndex > this.textToType.length) {
        clearInterval(typingInterval);
      }
    }, 100); 
  }

}
