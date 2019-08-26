import { Component } from "@angular/core";
import { TranslateService } from "@ngx-translate/core";
import { Title } from "@angular/platform-browser";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"]
})
export class AppComponent {
  constructor(
    private translate: TranslateService,
    private titleService: Title
  ) {
    this.translate.setDefaultLang("en");

    this.translate.use("en");

    this.setTitle("Interactive User App");
  }

  public setTitle(newTitle: string) {
    this.titleService.setTitle(newTitle);
  }
}
