import * as H from 'history';
export interface Irules {
  pattern: ((value: string | number) => boolean) | RegExp;
  error: string;
}
export interface IfileContent {
  value: number | string;
  rules: [Irules];
}
export interface Ifields {
  name: IfileContent;
  age: IfileContent;
  gender: IfileContent;
}
export interface Iform {
  name: IfileState;
  age: IfileState;
  gender: IfileState;
}
export interface IfileState {
  valid: boolean;
  value: string | number;
  error: string;
}
export interface Istate {
  form: Iform;
  formValid: boolean;
}
export interface IuserAddProps extends Istate {
  onFormChange: (name: string, value: string | number) => void;
  history: H.History;
}
