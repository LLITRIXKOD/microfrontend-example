import { Component, ViewEncapsulation } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-nx-welcome',
  imports: [CommonModule],
  template: `Dashboard component`,
  styles: [],
  encapsulation: ViewEncapsulation.None,
  standalone: true,
})
export class NxWelcome {}
