import { UserGroup } from 'src/app/modules/users/models/user-group.model';
import { UserRoles } from 'src/app/modules/users/models/user-roles.model';

export interface User {
  /**
   * User ID
   */
  id: string;

  /**
   * User full name
   */
  name: string;

  /**
   * User full name for display
   */
  displayName: string;

  /**
   * User email address
   */
  email: string;

  /**
   * Date user was created
   */
  created: string;

  /**
   * Date user information was last updated
   */
  lastUpdated: string;

  /**
   * Organisation Units the user is assigned to view reports and visualizations
   */
  // dataViewOrganisationUnits: any[];

  /**
   * Organisation Units user is assigned for data entry
   */
  // organisationUnits: any[];

  /**
   * User credential information
   */
  // userCredentials: any;

  /**
   * User authorities
   */
  authorities: string[];

  surname?: string;
  firstName?: string;
  userCredentials?: {
    openId?: string;
    ldapId?: string;
    username?: string;
    userRoles?: UserRoles[];
    externalAuth?: string;
  };
  interfaceLanguage?: string;
  databaseLanguage?: string;
  skype?: string;
  telegram?: string;
  phoneNumber?: string;
  whatsApp?: string;
  facebookMessenger?: string;
  twitter?: string;
  userGroups?: UserGroup[];
  organisationUnits?: {
    id?: string;
  };
  dataViewOrganisationUnits?: {
    id?: string;
  };
}
