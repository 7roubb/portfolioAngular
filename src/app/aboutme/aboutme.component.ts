import { Component } from '@angular/core';

@Component({
  selector: 'app-aboutme',
  templateUrl: './aboutme.component.html',
  styleUrls: ['./aboutme.component.css','../../mediaquareis.css']
})
export class AboutmeComponent {
  textToType: string = "Get To Know More";
  typedText: string = "|";
  constructor() { }
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
    }, 50); 
  }
}
