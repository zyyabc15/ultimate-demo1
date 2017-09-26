import * as React from 'react';
import HomeLayout from '../layouts/HomeLayout';
interface Iuser {
    id: number;
    name: string;
    gender: string;
    age: number;
}
interface IuserListState {
    userList: Iuser[];
}
class UserList extends React.Component<any, IuserListState> {
    constructor() {
        super();
        this.state = {
            userList: []
        };
    }
    componentWillMount() {
        fetch('http://localhost:3001/user')
            .then(res => res.json())
            .then(res => {
                this.setState({
                    userList: res
                });
            });
    }
    render() {
        const { userList } = this.state;
        return (
            <HomeLayout title="用户列表">
                <table>
                    <thead>
                        <tr>
                            <th>用户ID</th>
                            <th>用户名</th>
                            <th>性别</th>
                            <th>年龄</th>
                            <th>操作</th>
                        </tr>
                    </thead>

                    <tbody>
                        {
                            userList.map((user) => {
                                return (
                                    <tr key={user.id}>
                                        <td>{user.id}</td>
                                        <td>{user.name}</td>
                                        <td>{user.gender}</td>
                                        <td>{user.age}</td>
                                        <td>
                                            <a href="javascript:void(0)" onclick={}>编辑</a>
                                            <a href="javascript:void(0)" onclick={}>删除</a>
                                        </td>
                                    </tr>
                                );
                            })
                        }
                    </tbody>
                </table>
            </HomeLayout>
        );
    }
}
export default UserList;