import { Component, OnInit } from '@angular/core';

import { TitleGenerator } from './generators/title';
import { CommandGenerator } from './generators/command';


@Component({
  selector: 'app-root',
  templateUrl: './app.generator.html',
  styleUrls: ['./app.generator.css']
})

export class AppTitleGenerator implements OnInit {
  jobTitle: string;
  commandName: string;

  private titleGenerator: TitleGenerator;
  private commandGenerator: CommandGenerator;

  constructor() {
    this.titleGenerator = new TitleGenerator();
    this.commandGenerator = new CommandGenerator();
  }

  ngOnInit() {
    this.regenerate();
  }

  regenerate = function() {
    this.jobTitle = this.titleGenerator.getRandom();
    this.commandName = this.commandGenerator.getRandom();
  }
}
