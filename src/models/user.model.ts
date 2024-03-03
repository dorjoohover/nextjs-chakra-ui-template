import {
  PointSendType,
  PointTitle,
  Socials,
  UserStatus,
  UserType,
} from "@/config/enum";


export interface UserModel {
  _id?: string;
  username: string;
  profileImg?: string;
  ads: string[];

  phone: string;

  userType: UserType;

  socials: Social[];
  email: string;
  point: number;
  birthday?: string;
  bookmarks: number[];
  agentAddition: AgentAdditionModel;
  organizationAddition: OrganizationAdditionModel;
  pointHistory: PointHistory[];
  code: string;
  status: UserStatus;
  message: string;
}

export interface UserLocationModel {
  lat: string;
  lng: string;
}

export interface AgentAdditionModel {
  organizationName?: string;

  organizationContract?: string;

  identityCardFront?: string;

  identityCardBack?: string;

  location?: UserLocationModel;

  firstName?: string;

  lastName?: string;

  registerNumber?: string;
}
export interface OrganizationAdditionModel {
  organizationName: string;

  organizationCertificationCopy: string;

  location: UserLocationModel;

  organizationRegisterNumber: string;
}

export interface Social {
  url: string;
  name: Socials;
}
export interface PointHistory {
  point: number;

  sender: string;

  receiver: string;
  type: PointSendType;

  title: PointTitle | undefined;

  message: string;
}
