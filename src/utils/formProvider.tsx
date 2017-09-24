import * as React from "react";
import * as IUser from "../stores/IUser";

const formProvider = (fields: IUser.IFields): any => {
  return (Comp: any) => {
    const initialFormState: IUser.IForm = {};
    (fields as any).map((v: IUser.IFileContent, key: string) => {
      initialFormState[key] = {
        value: v.defaultValue,
        error: ""
      };
    });

    class FormComponent extends React.Component<any, IUser.IState> {
      public state: IUser.IState;
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
        const newFieldState: IUser.fileState = { value, valid: true, error: "" };
        const fieldRules: IUser.IRules[] = fields[fieldName].rules;

        fieldRules.every((v:IUser.IRules,index:number):boolean=>{
            const { pattern, error } = v;
            let valid = false;
            if (typeof pattern === "function") {
              valid = pattern(value);
            } else {
              valid = pattern.test(value);
            }
            if (!valid) {
              newFieldState.valid = false;
              newFieldState.error = error;
              return false;
            }
            return true;
        })
        
        const newForm: IUser.IForm = { ...form, [fieldName]: newFieldState };
        const formValid: boolean = (Object as any)
          .values(newForm)
          .every((f: IUser.fileState) => f.valid);
        this.setState({
          form: newForm,
          formValid
        });
      }
      render() {
        const { form, formValid } = this.state;
        return (
          <Comp
            {...this.props}
            from={form}
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
