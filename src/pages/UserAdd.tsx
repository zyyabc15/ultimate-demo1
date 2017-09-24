import * as React from "react";
import * as IUser from "../stores/IUser"


class UserAdd extends React.Component<IUser.IState, any> {
  
  handleSubmit = (e: any) => {
    e.preventDefault();
    const { form: { name, age, gender },formValid } = this.props;
    if (!formValid) {
      alert("请填写正确的信息后重试");
      return;
    }
    fetch("http://localhost:3001/user", {
      method: "post",
      body: JSON.stringify({
        name: name.value,
        age: age.value,
        gender: gender.value
      }),
      headers: {
        "Content-Type": "application/json"
      }
    })
      .then(res => res.json())
      .then(res => {
        if (res.id) {
          alert("添加用户成功");
        } else {
          alert("添加失败");
        }
      })
      .catch(err => console.error(err));
  };
  render() {
    const { form: { name, age, gender },onFormChange } = this.props;
    return (
      <div>
        <header>
          <h1>添加用户</h1>
        </header>

        <main>
          <form onSubmit={e => this.handleSubmit(e)}>
            <label>用户名：</label>
            <input
              type="text"
              value={name.value}
              onChange={e => this.handleNameChange(e.target.value)}
            />
            {!name.valid && <span>{name.error}</span>}
            <br />
            <label>年龄：</label>
            <input
              type="number"
              value={age.value || ""}
              onChange={e => this.handleAgeChange(e.target.value)}
            />
            {!age.valid && <span>{age.error}</span>}
            <br />
            <label>性别：</label>
            <select
              value={gender.value}
              onChange={e => this.handleGenderChange(e.target.value)}
            >
              <option value="">请选择</option>yarn
              <option value="male">男</option>
              <option value="female">女</option>
            </select>
            {!gender.valid && <span>{gender.error}</span>}
            <br />
            <br />
            <input type="submit" value="提交" />
          </form>
        </main>
      </div>
    );
  }
}
export default UserAdd;
