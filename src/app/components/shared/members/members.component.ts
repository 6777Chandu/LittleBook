import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { members } from 'src/app/models/app.models';
import { ApiService } from 'src/app/services/api/api.service';
import { ColorThemesService } from 'src/app/services/color-themes/color-themes.service';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-members',
  templateUrl: './members.component.html',
  styleUrls: ['./members.component.scss'],
})
export class MembersComponent implements OnInit, OnDestroy {
  constructor(
    private apiService: ApiService,
    private colorTheme: ColorThemesService
  ) {}
  members: members[] = [];
  themeColor: string;
  colorThemeSubscription: Subscription;

  ngOnInit(): void {
    this.apiService
      .fetchAPI(environment.HOST_MEMBERS)
      .toPromise()
      .then((data) => {
        this.members = data;
        console.log(this.members);
      });

    this.colorThemeSubscription = this.colorTheme.colorTheme.subscribe(
      (data) => (this.themeColor = data)
    );
  }

  ngOnDestroy() {
    this.colorThemeSubscription.unsubscribe();
  }
}
