import React from 'react';
import { Link } from 'dva/router';
import { Menu, Icon } from 'antd';
const SubMenu = Menu.SubMenu;
const MenuItemGroup = Menu.ItemGroup;

const Header = (props) => {
  return (
    <div>
      <Menu mode="horizontal">
        <Menu.Item key="home">
          <Link to="/">
            <Icon type="home" />Home
          </Link>
        </Menu.Item>
        <Menu.Item key="cards">
          <Link to="/cards">
            <Icon type="book" />Cards
          </Link>
        </Menu.Item>
        <Menu.Item key="card">
          <Link to="/card">
            <Icon type="book" />Card
          </Link>
        </Menu.Item>
        <Menu.Item key="back">
          <Link to="/back">
            <Icon type="book" />Card Back
          </Link>
        </Menu.Item>
        <Menu.Item key="hero">
          <Link to="/hero">
            <Icon type="team" />Hero
          </Link>
        </Menu.Item>
    </Menu>
    <div>
      { props.children }
    </div>
    </div>
  );
};


Header.propTypes = {
};

export default Header;
