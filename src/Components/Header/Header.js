import { UserOutlined } from "@ant-design/icons";
import { Avatar, Button, Col, Layout, Row } from "antd";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { logout } from "../../redux/authReducer.ts";

export default function Header(props) {
  const isAuth = useSelector((state) => state.auth.isAuth);
  const login = useSelector((state) => state.auth.login);

  const dispatch = useDispatch();

  const logoutCallback = () => {
    dispatch(logout());
  };

  const { Header } = Layout;

  return (
    <Header className="header">
      <Row>
     
        <Col span={18}>
        <img style={{width: 50}}
              src="https://free-png.ru/wp-content/uploads/2020/04/VK_Blue_Logo_t.png"
              alt=""
            />
          {/* <Menu theme="dark" mode="horizontal" defaultSelectedKeys={["2"]}>
           
            <Menu.Item key="1">
              <Link to="/user">Developers</Link>
            </Menu.Item>
          </Menu> */}
          </Col>
          {isAuth ? (
          <>
            
            <Col span={1}>
              <Avatar
                alt={login || ""}
                style={{ backgroundColor: "#87d068" }}
                icon={<UserOutlined />}
              />
            </Col>
            <Col span={5}>
              <Button onClick={logoutCallback}>Log out</Button>
            </Col>
          </>
        ) : (
          <Col span={6}>
            <Button>
              <Link to={"/login"}>Login</Link>
            </Button>
          </Col>
        )}
       

        
      </Row>
    </Header>
  );
}

{
  /* <header className={classes.Header}>
<img
  src="https://free-png.ru/wp-content/uploads/2020/04/VK_Blue_Logo_t.png"
  alt=""
/>

<div className={classes.loginBlock}>
  {props.isAuth ? (
    <div>
      {" "}
      {props.login} -<button onClick={props.logout}>Log out</button>
    </div>
  ) : (
    <NavLink as={Link} to={"/login/"}>
      Login
    </NavLink>
  )}
</div>
</header>
); */
}
