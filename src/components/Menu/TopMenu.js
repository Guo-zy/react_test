import React from "react";
import { Link } from "react-router-dom";
import { Menu } from "antd";

class TopMenu extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      current: "All",
    };
  }
  handleClick = (e) => {
    this.setState({
      current: e.key,
    });
  }

  render() {
    return (
      <Menu
        onClick={this.handleClick}
        selectedKeys={[this.state.current]}
        mode="horizontal"
      >
        <Menu.Item key="All">
          <Link to="/">All</Link>
        </Menu.Item>
        <Menu.Item key="Finished">
          <Link to="/finished">Finished</Link>
        </Menu.Item>
      </Menu>
    );
  }
}

export default TopMenu;
