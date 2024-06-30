import { Component } from '@angular/core';

@Component({
  selector: 'app-certification',
  templateUrl: './certification.component.html',
  styleUrl: './certification.component.css'
})
export class CertificationComponent {
  certifications: any[] = [
    {
      imgPath:'../../assets/HtmlCertifcate.jpeg',
      name: 'HTML and CSS in Depth',
      description: 'an online course authorized by Meta and offered through coursera',
      issuer: 'Coursera',
      date: 'January 23, 2024'
    },
    {
      imgPath:'../../assets/metajs.jpeg',
      name: 'Programming with JS',
      description: 'This certification covers fundamental concepts of JavaScript.',
      issuer: 'Coursera',
      date: 'January 12 2024'
    }, {
      imgPath:'../../assets/DataEng.jpeg',
      name: 'Data Engineer Associate Certification',
      description: 'This certification validates my knowledge, skills, and abilities required for an entry-level data engineer role',
      issuer: 'Datacamp',
      date: 'June 20 2024'
    },
    {
      imgPath:'../../assets/SQLCert.png',
      name: 'SQL Associate Certification',
      description: 'Associate SQL Certificate program is designed to provide you with a comprehensive understanding of SQL',
      issuer: 'Datacamp',
      date: 'April 22 2024'
    },
    // Add more certifications as needed
  ];

  constructor() { }

  ngOnInit(): void {
  }
}
