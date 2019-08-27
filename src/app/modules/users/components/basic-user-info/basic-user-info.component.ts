import { Component, OnInit } from "@angular/core";
import {
  FormBuilder,
  FormGroup,
  FormControl,
  Validators
} from "@angular/forms";

@Component({
  selector: "app-basic-user-info",
  templateUrl: "./basic-user-info.component.html",
  styleUrls: ["./basic-user-info.component.css"]
})
export class BasicUserInfoComponent implements OnInit {
  constructor(private fb: FormBuilder) {}
  basicUserForm: FormGroup;
  basicUserInfoData: any = {
    formControlNames: [
      "userName",
      "email",
      "hideRequired",
      "externalAuth",
      "password1",
      "password2",
      "surname",
      "firstName",
      "openId",
      "ldapIdentifier",
      "phoneNumber",
      "whatsapp",
      "facebook",
      "skype",
      "telegram",
      "twitter",
      "interfaceLanguage",
      "databaseLanguage"
    ]
  };

  ngOnInit() {
    this.basicUserForm = this.fb.group({});
    this.basicUserInfoData.formControlNames.forEach(controlName => {
      this.basicUserForm.addControl(controlName, new FormControl(""));
    });
  }
}
