import { Component, OnInit } from '@angular/core';

import { ButtonVerber } from './button-verber';
import { JobTitler } from './job-titler';


@Component({
  selector: 'app-title-generator',
  templateUrl: './title-generator.component.html',
  styleUrls: ['./title-generator.component.css']
})

export class TitleGeneratorComponent implements OnInit {
  jobTitle: string;
  commandName: string;

  private jobTitler: JobTitler;
  private buttonVerber: ButtonVerber;

  constructor() {
    this.jobTitler = new JobTitler();
    this.buttonVerber = new ButtonVerber();
  }

  ngOnInit() {
    this.regenerate();
  }

  regenerate = function() {
    this.jobTitle = this.jobTitler.getRandom();
    console.log(this.jobTitle);
    this.commandName = this.buttonVerber.getRandom();
  }
}
