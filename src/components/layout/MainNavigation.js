import { Link } from 'react-router-dom';
import { Menu, Dropdown } from 'antd';
import { CaretDownOutlined, BookOutlined } from '@ant-design/icons';
import './MainNavigation.css';

function MainNavigation(){

    
const menu = (
    <Menu>
      <Menu.Item key="0">
        <Link to="/"><BookOutlined /> Assignment 1</Link>
      </Menu.Item>
      <Menu.Item key="1">
        <Link to="/assignment-two"><BookOutlined /> Assignment 2</Link>
      </Menu.Item>
      <Menu.Item key="1">
        <Link to="/assignment-three"><BookOutlined /> Assignment 3</Link>
      </Menu.Item>
      <Menu.Item key="1">
        <Link to="/assignment-four"><BookOutlined /> Assignment 4</Link>
      </Menu.Item>
      <Menu.Item key="1">
        <Link to="/assignment-five"><BookOutlined /> Assignment 5</Link>
      </Menu.Item>
    </Menu>
  );

    return(
        <div className="main-navigation">
            <div className="container">
                <header className="header">
                    <h1 className="logo" style={{ marginBottom: 0 }}>Training React</h1>
                    <nav className="nav">
                        <ul className="nav-ul">
                            {/* <li className="nav-item">
                                <Link to="/" className="nav-link">Assignment 1</Link>
                            </li>
                            <li className="nav-item">
                                <Link to="/assignment-two" className="nav-link">Assignment 2</Link>
                            </li>
                            <li className="nav-item">
                                <Link to="/assignment-two" className="nav-link">Assignment 3</Link>
                            </li>
                            <li className="nav-item">
                                <Link to="/assignment-two" className="nav-link">Assignment 4</Link>
                            </li> */}
                            <li className="nav-item">
                                <Link to="/assignment-two" className="nav-link">
                                    <Dropdown overlay={menu} trigger={['click']}>
                                        <Link to="/assignment-two" onClick={e => e.preventDefault()} className="nav-link"  style={{ marginBottom: 0 }}>
                                            All Assignment <CaretDownOutlined />
                                        </Link>
                                    </Dropdown>
                                </Link>
                            </li>
                        </ul>
                    </nav>
                </header>
            </div>
        </div>  
    )
}
export default MainNavigation;