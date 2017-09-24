import * as React from "react";
import { Link } from "react-router-dom";
class Home extends React.Component<any, any> {
  render() {
    return (
      <div>
        <header>
          <h1>Welcome</h1>
        </header>
        <main>
          <Link to="user/add">add user</Link>
        </main>
      </div>
    );
  }
}
export default Home;
