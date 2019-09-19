import { Component, OnInit, Input } from '@angular/core';
import { MustMatch } from 'match-password';
import {
  FormBuilder,
  FormGroup,
  FormControl,
  Validators
} from '@angular/forms';
import { BasicUserInfo } from '../../models/basic-user-info.model';
@Component({
  selector: 'app-basic-user-info',
  templateUrl: './basic-user-info.component.html',
  styleUrls: ['./basic-user-info.component.css']
})
export class BasicUserInfoComponent implements OnInit {
  @Input() basicUserInfo: BasicUserInfo = null;

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
      'username',
      'email',
      'externalAuth',
      'password',
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
    if (this.basicUserInfo) {
      this.getEditingForm();
    } else {
      this.getNewForm();
    }
  }

  getEditingForm() {
    console.log(this.basicUserInfo.whatsApp);
    this.basicUserForm = new FormGroup({
      email: new FormControl(this.basicUserInfo.email, Validators.required),
      surname: new FormControl(this.basicUserInfo.surname, Validators.required),
      firstName: new FormControl(
        this.basicUserInfo.firstName,
        Validators.required
      ),
      externalAuth: new FormControl(
        this.basicUserInfo.userCredentials.externalAuth
      ),
      username: new FormControl(this.basicUserInfo.userCredentials.username),
      openId: new FormControl(this.basicUserInfo.userCredentials.openId),
      databaseLanguage: new FormControl(this.basicUserInfo.databaseLanguage),
      interfaceLanguage: new FormControl(this.basicUserInfo.interfaceLanguage),
      ldapIdentifier: new FormControl(
        this.basicUserInfo.userCredentials.ldapId
      ),
      skype: new FormControl(this.basicUserInfo.skype),
      telegram: new FormControl(this.basicUserInfo.telegram),
      phoneNumber: new FormControl(this.basicUserInfo.phoneNumber),
      whatsapp: new FormControl(this.basicUserInfo.whatsApp),
      facebook: new FormControl(this.basicUserInfo.facebookMessenger),
      twitter: new FormControl(this.basicUserInfo.twitter),
      password: new FormControl(''),
      password2: new FormControl('')
    });
  }

  getNewForm() {
    this.basicUserForm = this.fb.group(
      {
        // tslint:disable-next-line: quotemark
        email: [
          '',
          Validators.pattern('^[a-z0-9._%+-]+@[a-z0-9.-]+.[a-z]{2,4}$')
        ],
        password: [
          '',
          Validators.pattern(
            '^(?=[^A-Z]*[A-Z])(?=[^a-z]*[a-z])(?=\\D*\\d)[A-Za-z\\d!$%@#£€*?&]{8,}$'
          )
        ],
        password2: [
          '',
          Validators.pattern(
            '^(?=[^A-Z]*[A-Z])(?=[^a-z]*[a-z])(?=\\D*\\d)[A-Za-z\\d!$%@#£€*?&]{8,}$'
          )
        ]
      },
      { validators: MustMatch('password', 'password2') }
    );
    // get();: { return this.basicUserForm.controls; }
    this.basicUserInfoData.formControlNames.forEach(controlName => {
      this.basicUserForm.addControl(controlName, new FormControl());
    });
  }
}
