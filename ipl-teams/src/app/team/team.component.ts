import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-team',
  templateUrl: './team.component.html',
  styleUrls: ['./team.component.css'],
})
export class TeamComponent implements OnInit {
  teams = [
    {
      name: 'Chennai Super Kings',
      website: 'https://www/chennaisuperkings.com/',
      phoneno: '965-144-6018',
      image: '../../assets/csk.png',
    },
    {
      name: 'Mumbai Indians',
      website: 'https://www/mumbaiindians.com/',
      phoneno: '1-522-714-2648-44811',
      image: '../../assets/MI.png',
    },
    {
      name: 'Rajisthan Royals',
      website: 'https://www/rajasthanroyals.com/',
      phoneno: '(038)-3245-4523-23454',
      image: '../../assets/RR.png',
    },
    {
      name: 'Delhi Capitals',
      website: 'https://www/delhicapitals.com/',
      phoneno: '005-851-7095-72027',
      image: '../../assets/Delhi.png',
    },
    {
      name: 'Royal Challengers Banglore',
      website: 'https://www/royalchallengers.com/',
      phoneno: '1-471-836-5871-5841',
      image: '../../assets/RCB.png',
    },
    {
      name: 'Kolkata Knight riders',
      website: 'https://wwww/kkr.com/',
      phoneno: '(247)305-7427',
      image: '../../assets/KKR.png',
    },
    {
      name: 'Sunriser Hyderabad',
      website: 'https://wwww/sunrisers.com/',
      phoneno: '011-323-3454-7427',
      image: '../../assets/SRH.png',
    },
  ];
  constructor() {}

  ngOnInit(): void {}
}
