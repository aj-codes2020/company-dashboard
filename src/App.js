import './App.scss';
import { BrowserRouter as Router, Routes, Route, NavLink } from 'react-router-dom';
import { Overview, Insight, Task, Clients } from './pages';
import { Sidebar, Avatar, Popover, Button } from '@aj-codes2020/ui-kit';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBell, faMessage, faGear } from '@fortawesome/free-solid-svg-icons';
import { DefaultAvatar } from './assets';
import { ColorPicker } from './components';

// Icon links for the header
const iconLinks = [
  { href: "/", icon: faBell },
  { href: "/", icon: faMessage },
  { href: "/", icon: faGear }
];

// Content for the popover
const popoverContent = (
  <div className='popover-content'>
    <Button label="Log In" />
    <Button label="Create Account" />
  </div>
);

const mainLogo = (
  <div className='main-logo'>
  <div className="svg-container">
  <svg xmlns="http://www.w3.org/2000/svg" id="Layer_1" data-name="Layer 1" viewBox="0 0 160 160" width="50" height="50">
    <text className="cls-1" transform="translate(90.04 93.53) rotate(-90) scale(1.19 1)">
      <tspan className="cls-2" x="0" y="0">c</tspan>
      <tspan className="cls-4" x="8.15" y="0">od</tspan>
      <tspan className="cls-5" x="26.38" y="0">e</tspan>
      <tspan x="34.13" y="0">s</tspan>
    </text>
    <g>
      <path className="cls-3" d="M68.93,96.02h-28.17l-6.32,17.59h-9.14l25.67-67.23h7.76l25.72,67.23h-9.1l-6.42-17.59ZM43.44,88.77h22.86l-11.45-31.45-11.4,31.45Z"/>
      <path className="cls-3" d="M116.14,45.92h8.91v47.61c0,6.43-1.93,11.46-5.8,15.1-3.86,3.64-9,5.45-15.44,5.45s-11.88-1.71-15.6-5.13c-3.73-3.42-5.59-8.2-5.59-14.36h8.86c0,3.85,1.05,6.85,3.16,9.01,2.11,2.15,5.16,3.23,9.17,3.23,3.66,0,6.63-1.15,8.89-3.46,2.26-2.31,3.41-5.54,3.44-9.69v-47.74Z"/>
    </g>
  </svg>
</div>
<h3>Dashboard</h3>
</div>
)

// Navigation links for the sidebar
const navLinks = [
  { to: "/", label: "Overview", className: "home-link" },
  { to: "/insight", label: "Insight", className: "insight-link" },
  { to: "/task", label: "Task", className: "assignment-link" },
  { to: "/clients", label: "Clients", className: "client-link" }
];

// Group of icons for the header
const iconGroup = (
  <div className='icon-group'>
    <div className='icon-group-links'>
      {iconLinks.map((link, index) => (
        <a key={index} href={link.href}>
          <FontAwesomeIcon icon={link.icon} />
        </a>
      ))}
    </div>
    <div className='icon-group-avatar'>
      <Popover content={popoverContent} position="bottom">
        <Avatar
          src={DefaultAvatar}
          alt="User Avatar"
          size="small"
          shape="circle"
          className=""
        />
      </Popover>
    </div>
  </div>
);

// Links for the sidebar
const sidebarLinks = (
  <>
    <h4 className='sidebar-subtitle'>Dashboard</h4>
    {navLinks.map((link, index) => (
      <li key={index}>
        <NavLink
          to={link.to}
          className={({ isActive }) => isActive ? `nav-link ${link.className} active` : `nav-link ${link.className}`}
        >
          {link.label}
        </NavLink>
      </li>
    ))}
  </>
);

function App() {
  return (
    <Router>
      <Sidebar
        sidebarTitle={mainLogo}
        sidebarLinks={sidebarLinks}
        headerContent={iconGroup}
        collapseWidth={1000}
        className=""
      >
        <ColorPicker/>
        <Routes>
          <Route path="/" element={<Overview />} />
          <Route path="/insight" element={<Insight />} />
          <Route path="/task" element={<Task />} />
          <Route path="/clients" element={<Clients />} />
        </Routes>
      </Sidebar>
    </Router>
  );
}

export default App;
