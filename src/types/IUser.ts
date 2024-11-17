export interface IUserState {
  user: IUser;
  step: number;
  answers: AnswersLocal;
  needs: NeedsLocal;
  employment: number[];
  employmentTitle: EmploymentTitleLocal;
  selected: SelectedLocal;
  auth: boolean;
}

export interface INeeds {
  id: [number, number];
  title: number;
  value: number;
  count: number;
}
export interface IEmploymentTitle {
  id: number;
  title: string;
}

export interface IAnswer {
  id: string;
  module: number;
  val: string;
}

export type AnswersLocal = {
  [key: string]: {
    [key: string]: string[];
  };
};

export type SelectedLocal = {
  [key: string]: number;
};

export type EmploymentTitleLocal = {
  [key: string]: string;
};

export type NeedsLocal = Record<string, number>;

export interface IUser {
  name: string;
  year: string;
  email: string;
  sex: string;
  status: string;
  date: number;
}
