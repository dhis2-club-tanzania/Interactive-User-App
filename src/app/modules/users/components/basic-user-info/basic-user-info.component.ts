import { Component, OnInit } from '@angular/core';
import {
  FormBuilder,
  FormGroup,
  FormControl,
  Validators
} from '@angular/forms';

@Component({
  selector: 'app-basic-user-info',
  templateUrl: './basic-user-info.component.html',
  styleUrls: ['./basic-user-info.component.css']
})
export class BasicUserInfoComponent implements OnInit {
  languages: string[] = [
    'Arabic',
    'Arabic(Egypt)',
    'Arabic(Iraq)',
    'Arabic(Sudan)',
    'Bengali',
    'Bislama',
    'Burmese',
    'Chinese',
    'Danish',
    'English',
    'French',
    'Indonesian(Indonesia)',
    'Khmer',
    'Kinyarwanda',
    'Lao',
    'Mongolian',
    'Nepali',
    'Portuguese',
    'Portuguese(Brazil)',
    'Pushto',
    'Russian',
    'Spanish',
    'Swedish',
    'Tajik',
    'Tetum',
    'Ukrainian',
    'Urdu',
    'Vietnamese',
    'ckb',
    'prs'
  ];

  dblanguages: string[] = [
    'Afrikaans',
    'Amharic',
    'Arabic',
    'Bislama',
    'Burmese',
    'Chinese',
    'Dutch',
    'Dzongkha',
    'English',
    'English(Botswna)',
    'English(Cambodia)',
    'English(Tanzania)',
    'English(Uganda)',
    'French',
    'French(Senegal)',
    'German',
    'Gujarati',
    'Hindi',
    'Indonesian',
    'Italia',
    'Khmer',
    'Kinyarwanda',
    'Lao',
    'Nepali',
    'Norwegian',
    'Persian',
    'Portuguese',
    'Pushto',
    'Russian',
    'Spanish',
    'Spanish(Guatemala)',
    'Spanish(Mexico)',
    'Swahili',
    'Tajik',
    'Vietnamese'
  ];
  constructor(private fb: FormBuilder) {}
  basicUserForm: FormGroup;
  basicUserInfoData: any = {
    formControlNames: [
      'userName',
      'email',
      'hideRequired',
      'externalAuth',
      'password1',
      'password2',
      'surname',
      'firstName',
      'openId',
      'ldapIdentifier',
      'phoneNumber',
      'whatsapp',
      'facebook',
      'skype',
      'telegram',
      'twitter',
      'interfaceLanguage',
      'databaseLanguage'
    ]
  };

  ngOnInit() {
    this.basicUserForm = this.fb.group({});
    this.basicUserInfoData.formControlNames.forEach(controlName => {
      this.basicUserForm.addControl(controlName, new FormControl(''));
    });
  }

  // ngOnInit() {
  //   this.basicUserForm = this.fb.group({
  //     userName: [''],
  //     email: [''],
  //     hideRequired: [''],
  //     password1: [''],
  //     password2: [''],
  //     surname: [''],
  //     firstName: [''],
  //     openId: [''],
  //     ldapIdentifier: [''],
  //     phoneNumber: [''],
  //     whatsapp: [''],
  //     facebook: [''],
  //     skype: [''],
  //     telegram: [''],
  //     twiter: [''],
  //     interfaceLanguage: [''],
  //     databaseLanguage: ['']
  //   });
  // }
}
