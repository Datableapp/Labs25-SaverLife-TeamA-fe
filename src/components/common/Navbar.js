import React from 'react';
import { Link } from 'react-router-dom';
import {
  UserOutlined,
  HomeOutlined,
  BarChartOutlined,
  LineChartOutlined,
  PieChartOutlined,
} from '@ant-design/icons';

import '../../styles/App.scss';

const Navbar = props => {
  return (
    <nav className="navBar">
      <div className="logo">
        <img
          src="https://www.saverlife.org/assets/logo-saverlife-a4b213a1d9e8e51559d7f70d9f479f1473f536e12c8c4543654d5b3964004b0f.svg"
          alt="SaverLife Logo"
        />
      </div>
      <ol className="navBarList">
        <li className={props.home ? 'navItem navItemActive' : 'navItem'}>
          <Link to="/">Home</Link>
        </li>
        <li className={props.home ? 'navIcon navItemActive' : 'navIcon'}>
          <Link to="/">
            <HomeOutlined />
          </Link>
        </li>
        <li
          className={props.pastSpending ? 'navItem navItemActive' : 'navItem'}
        >
          <Link to="/past-spending">Past Spending</Link>
        </li>
        <li
          className={props.pastSpending ? 'navIcon navItemActive' : 'navIcon'}
        >
          <Link to="/past-spending">
            <BarChartOutlined />
          </Link>
        </li>
        <li className="navItem">
          <Link to="/">Budget Comparison</Link>
        </li>
        <li className="navIcon">
          <Link to="/">
            <PieChartOutlined />
          </Link>
        </li>
        <li
          className={
            props.projectedSavings ? 'navItem navItemActive' : 'navItem'
          }
        >
          <Link to="/projected-savings">Projected Savings</Link>
        </li>
        <li
          className={
            props.projectedSavings ? 'navIcon navItemActive' : 'navIcon'
          }
        >
          <Link to="/projected-savings">
            <LineChartOutlined />
          </Link>
        </li>
        <li className={props.myAccount ? 'navItem navItemActive' : 'navItem'}>
          <Link to="/my-account">My Account</Link>
        </li>
        <li className={props.myAccount ? 'navIcon navItemActive' : 'navIcon'}>
          <Link to="/my-account">
            <UserOutlined />
          </Link>
        </li>
      </ol>
    </nav>
  );
};

export default Navbar;
