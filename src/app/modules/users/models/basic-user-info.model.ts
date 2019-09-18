export interface BasicUserInfo {
  email: string;
  surname: string;
  firstName: string;
  userCredentials: {
    openId: string;
    ldapId: string;
    username: string;
    externalAuth: string;
  };
  interfaceLanguage: string;
  databaseLanguage: string;
  skype: string;
  telegram: string;
  phoneNumber: string;
  whatsApp: string;
  facebookMessenger: string;
  twitter: string;
}
