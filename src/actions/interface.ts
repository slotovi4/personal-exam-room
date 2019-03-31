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
}

export interface IExams {
  exams: IExam[];
  currentPage: number;
  pageSize: number;
  total: number;
}
