import { Component, OnInit } from '@angular/core';
import { Post } from '../../models/post.model';
import { ActivatedRoute } from '@angular/router';
import { FirebaseService } from '../../services/firebase.service';
import { User } from '../../models/user.model';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.page.html',
  styleUrls: ['./profile.page.scss'],
})
export class ProfilePage implements OnInit {
  posts: Post[] = [];
  profile: User;

  constructor( private route: ActivatedRoute ) { }

  ngOnInit() {
    if (this.route && this.route.data) {
      this.route.data.subscribe(pageData => {
        this.posts = pageData.data.posts;
        this.profile = pageData.data.profile;
      });
    }
  }
}
