export interface IUser {
  profile: IProfile;
  token: string;
}

export interface IProfile {
  id: string;
  firstName: string;
  lastName: string;
  sex: 'male' | 'female';
  birthDate: string;
  email: string;
  emailConfirmed: boolean;
  phone: string;
}
