import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import LogoImg from '../utils/Images/Logo1.png';
import { Link as LinkR, NavLink } from 'react-router-dom';
import { MenuRounded } from '@mui/icons-material';
import { Avatar, Button, Menu, MenuItem, Typography } from '@mui/material';
import { useDispatch, useSelector } from 'react-redux';
import { logout } from '../redux/reducers/userSlice'; // Adjust the import according to your file structure
import axios from 'axios'; // Assuming you're using axios for API calls

const Nav = styled.div`
  background-color: lightblue;
  height: 80px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 1rem;
  position: sticky;
  top: 0;
  z-index: 10;
  color: white;
  border-bottom: 1px solid ${({ theme }) => theme.text_secondary + 20};
`;

const NavContainer = styled.div`
  width: 100%;
  max-width: 1400px;
  padding: 0 24px;
  display: flex;
  gap: 14px;
  align-items: center;
  justify-content: space-between;
  font-size: 1rem;
`;

const NavLogo = styled(LinkR)`
  width: 100%;
  display: flex;
  align-items: center;
  gap: 16px;
  padding: 0 6px;
  font-weight: 600;
  font-size: 18px;
  text-decoration: none;
  color: ${({ theme }) => theme.black};
`;

const Logo = styled.img`
  height: 52px;
`;

const Mobileicon = styled.div`
  color: ${({ theme }) => theme.text_primary};
  display: none;
  @media screen and (max-width: 768px) {
    display: flex;
    align-items: center;
  }
`;

const NavItems = styled.ul`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: flex-end;
  gap: 32px;
  padding: 0 6px;
  list-style: none;

  @media screen and (max-width: 768px) {
    display: none;
  }
`;

const Navlink = styled(NavLink)`
  display: flex;
  align-items: center;
  color: ${({ theme }) => theme.text_primary};
  font-weight: 500;
  cursor: pointer;
  transition: all 1s slide-in;
  text-decoration: none;
  &:hover {
    color: ${({ theme }) => theme.primary};
  }
  &.active {
    color: ${({ theme }) => theme.primary};
    border-bottom: 1.8px solid ${({ theme }) => theme.primary};
  }
`;

const UserContainer = styled.div`
  display: flex;
  justify-content: flex-end;
  gap: 16px;
  align-items: center;
  padding: 0 6px;
  color: ${({ theme }) => theme.primary};
`;

const MobileMenu = styled.ul`
  display: flex;
  flex-direction: column;
  align-items: start;
  gap: 16px;
  padding: 0 6px;
  list-style: none;
  width: 90%;
  padding: 12px 40px 24px 40px;
  background: ${({ theme }) => theme.bg};
  position: absolute;
  top: 80px;
  right: 0;
  transition: all 0.6s ease-in-out;
  transform: ${({ isOpen }) => (isOpen ? 'translateY(0)' : 'translateY(-100%)')};
  border-radius: 0 0 20px 20px;
  box-shadow: 0 0 10px 0 rgba(0, 0, 0, 0.2);
  opacity: ${({ isOpen }) => (isOpen ? '100%' : '0')};
  z-index: ${({ isOpen }) => (isOpen ? '1000' : '-1000')};
`;

const SimpleMenuItem = styled(MenuItem)`
  color: black !important;
  text-decoration: none !important;
  &:hover {
    background-color: lightgrey !important;
  }
`;

const Navbar = () => {
  const dispatch = useDispatch();
  const [isOpen, setIsOpen] = useState(false);
  const [anchorEl, setAnchorEl] = useState(null);
  const [userData, setUserData] = useState(null);
  const currentUser = useSelector((state) => state.user); // Adjust according to your state structure

  useEffect(() => {
    // Fetch user data from API
    const fetchUserData = async () => {
      try {
        const response = await axios.get('/api/user'); // Replace with your API endpoint
        setUserData(response.data);
      } catch (error) {
        console.error('Error fetching user data:', error);
      }
    };

    fetchUserData();
  }, []);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const handleLogout = () => {
    dispatch(logout());
    handleClose();
  };

  const handleSearch = (query) => {
    // Handle search functionality
    console.log('Searching for:', query);
  };

  return (
    <Nav>
      <NavContainer>
        <NavLogo to="/">
          <Logo src={LogoImg} />
          Dirghaaayu
        </NavLogo>
        <Mobileicon onClick={() => setIsOpen(!isOpen)}>
          <MenuRounded sx={{ color: 'inherit' }} />
        </Mobileicon>
        <MobileMenu isOpen={isOpen}>
          <Navlink to="/">Home</Navlink>
          <Navlink to="/symptomcheck">Symptom check</Navlink>
          <a href="http://reportanalyzer.streamlit.app" target="_blank" rel="noopener noreferrer" className="text-black hover:text-blue-500">Lab Report</a>
          <Navlink to="/chat">Chat</Navlink>
        </MobileMenu>
        
        <NavItems>
          <Navlink to="/">Home</Navlink>
          <Navlink to="/symptomcheck">Symptom check</Navlink>
          <a href="http://reportanalyzer.streamlit.app" target="_blank" rel="noopener noreferrer" className="text-black hover:text-blue-500">Lab Report</a>
          <Navlink to="/chat">Chat</Navlink>
        </NavItems>

        <UserContainer>
          <Button onClick={handleClick}>
            <Avatar src={currentUser?.img}>
              {currentUser?.name ? currentUser.name[0] : ''}
            </Avatar>
          </Button>
          <Menu
            anchorEl={anchorEl}
            open={Boolean(anchorEl)}
            onClose={handleClose}
          >
            <SimpleMenuItem onClick={handleClose}>
              <Navlink to="/profile">My Profile</Navlink>
            </SimpleMenuItem>
            <SimpleMenuItem onClick={handleClose}>
              <Navlink to="/finddoctor">Find Doctor</Navlink>
            </SimpleMenuItem>
            <SimpleMenuItem onClick={handleClose}>
              <Navlink to="/dietplan">Diet Plan</Navlink>
            </SimpleMenuItem>
            <SimpleMenuItem onClick={handleLogout}>Logout</SimpleMenuItem>
          </Menu>
        </UserContainer>
      </NavContainer>
    </Nav>
  );
};

export default Navbar;
