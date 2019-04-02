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

export interface IExam {
  id: string;
  date: string;
  qualificationTitle: string;
  qualificationLevel: string;
  occupationalStandardTitle: string;
  examinationCenterName: string;
  address: string;
  city: string;
  status: string;
  statusChangeTime: string;
  duration: number;
}

export interface IExams {
  exams: IExam[];
  currentPage: number;
  pageSize: number;
  total: number;
}

export interface IAlert {
  message: string;
  messageType: 'error' | 'alert' | '';
}

export interface ILogin {
  loggingIn: boolean;
  token: string;
}

export type ITheme = 'light' | 'dark';

export interface IGlobalState {
  login: ILogin;
  profile: IProfile;
  exams: IExams;
  alert: IAlert;
  theme: {
    theme: ITheme;
  };
}
