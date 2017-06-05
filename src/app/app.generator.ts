import { Component } from '@angular/core';

import { TitleGenerator } from './generators/title';
import { CommandGenerator } from './generators/command';


@Component({
  selector: 'app-root',
  templateUrl: './app.generator.html',
  styleUrls: ['./app.generator.css']
})

export class AppTitleGenerator {
  jobTitle: string;
  commandName: string;

  private titleGenerator = new TitleGenerator();
  private commandGenerator = new CommandGenerator();

  regenerate = function() {
      this.jobTitle = this.titleGenerator.getRandom();
      this.commandName = this.commandGenerator.getRandom();
  };

  constructor() {
    this.regenerate();
  };
}
