import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit {

  @Input() bgColor: string = '#FFFFFF';
  @Input() iconEnd: string = '';
  @Input() color: string = 'light';
  @Input() back: boolean = false;

  constructor() { }

  ngOnInit() {}

}