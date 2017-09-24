export interface IRules {
  pattern: any;
  error: string;
}
export interface IFileContent {
  defaultValue: number | string;
  rules: [IRules];
}
export interface IFields {
  name: IFileContent;
  age: IFileContent;
  gender: IFileContent;
}
interface IInnerform {
  value: string | number;
  error: string;
}
export interface IForm {
  name: IInnerform;
  age: IInnerform;
  gender: IInnerform;
}
export interface IState {
  form: IForm;
  formValid: boolean;
}
export interface fileState {
  valid: boolean;
  value: string | number;
  error: string;
}
export interface IUserAddProps extends IState {}
