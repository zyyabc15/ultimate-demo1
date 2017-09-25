import * as React from 'react';
import * as IUser from '../stores/IUser';

const formProvider = (fields: IUser.Ifields): any => {
  return (Comp: any) => {
    const initialFormState: any = {};
    for (let key in fields) {
      if (fields[key]) {
        initialFormState[key] = {
          value: fields[key],
          error: ''
        };
      }

    }
console.log(initialFormState,1111);
    class FormComponent extends React.Component<any, IUser.Istate> {
      public state: IUser.Istate;
      constructor() {
        super();
        this.state = {
          form: initialFormState,
          formValid: false
        };
        this.handleValueChange = this.handleValueChange.bind(this);
      }
      handleValueChange(fieldName: string, value: string | number): void {
        const { form } = this.state;
        const newFieldState: IUser.IfileState = { value, valid: true, error: '' };
        const fieldRules: IUser.Irules[] = fields[fieldName].rules;

        fieldRules.every((v: IUser.Irules, index: number): boolean => {
          const { pattern, error } = v;
          let valid = false;
          if (typeof pattern === 'function') {
            valid = pattern(value);
          } else {
            valid = pattern.test(value + '');
          }
          if (!valid) {
            newFieldState.valid = false;
            newFieldState.error = error;
            return false;
          }
          return true;
        });

        const newForm: IUser.Iform = { ...form, [fieldName]: newFieldState };
        const formValid: boolean = (Object as any)
          .values(newForm)
          .every((f: IUser.IfileState) => f.valid);
        this.setState({
          form: newForm,
          formValid
        });
      }
      render() {
        const { form, formValid } = this.state;
        return (
          <Comp
            form={form}
            formValid={formValid}
            onFormChange={this.handleValueChange}
          />
        );
      }
    }
    return FormComponent;
  };
};
export default formProvider;
