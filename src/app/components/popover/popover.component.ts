import { Component, OnInit } from '@angular/core';
import { PopoverController } from '@ionic/angular';
import { Router } from '@angular/router';

@Component({
  selector: 'app-popover',
  templateUrl: './popover.component.html',
  styleUrls: ['./popover.component.scss'],
})
export class PopoverComponent implements OnInit {

  constructor(
    public popoverCtrl: PopoverController,
    private router: Router
  ) { }

  ngOnInit() {}

  close(url) {
    if (url !== '')
      this.router.navigate([url]);

    this.popoverCtrl.dismiss();
  }

}
