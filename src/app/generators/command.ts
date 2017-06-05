import { Component } from '@angular/core';

export class CommandGenerator {
  commands = [
    'again',
    'another plz',
    'cat /dev/random',
    'fizz buzz it',
    'give it to a script kiddie',
    'jquery that shit in',
    'make it so',
    'needs more jpeg',
    'new title',
    'one more',
    'punch it',
    'reticulate splines',
    'something else',
    'that\'s not good enough',
    'this time with emphasis',
    'titleGenerator.getRandom()',
    'yet another',
    '{{buttonTitle}}'
  ]

  getRandom = function() {
    return this.commands[Math.floor(Math.random() * this.commands.length)];
  }
}
