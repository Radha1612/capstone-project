import React from 'react';
import * as FaIcons from 'react-icons/fa';
import * as AiIcons from 'react-icons/ai';
import * as IoIcons from 'react-icons/io';

export const SidebarData = [
  {
    title: 'Home',
    path: '/',
    icon: <AiIcons.AiFillHome />,
    cName: 'nav-text'
  },
  {
    title: 'Front-Desk',
    path: '/regPatient',
    icon: <FaIcons.FaHotel />,
    cName: 'nav-text'
  },
  {
    title: 'Lab',
    path: '/lab',
    icon: <FaIcons.FaMicroscope />,
    cName: 'nav-text'
  },
  {
    title: 'Doctor',
    path: '/doctor',
    icon: <FaIcons.FaUserMd />,
    cName: 'nav-text'
  },
  {
    title: 'Admin',
    path: '/admin',
    icon: <IoIcons.IoMdPeople />,
    cName: 'nav-text'
  },
  {
    title: 'Reports',
    path: '/reports',
    icon:  <FaIcons.FaFileAlt />,
    cName: 'nav-text'
  },
  {
    title: 'Pharmacy',
    path: '/pharmacy',
    icon:<FaIcons.FaMedkit />,
    cName: 'nav-text'
  },
  {
    title: 'Training',
    path: '/training',
    icon: <AiIcons.AiOutlineBook />,
    cName: 'nav-text'
  },
  {
    title: 'Robin',
    path: '/robin',
    icon: <AiIcons.AiOutlineUser />,
    cName: 'nav-text'
  }
];
