import React from 'react';
import { NavLink as RouterNavLink } from 'react-router-dom';
import { useUser } from '../../context/UserContext';
import { 
  HomeIcon, 
  ChartBarIcon, 
  Cog6ToothIcon, 
  ChatBubbleLeftRightIcon,
  WaveIcon,
  ChevronLeftIcon,
  ChevronRightIcon
} from '../icons';

interface SidebarProps {
  isCollapsed: boolean;
  setIsCollapsed: (isCollapsed: boolean) => void;
}

const NavLink = ({ to, icon, label, isCollapsed }: { to: string, icon: React.ReactNode, label: string, isCollapsed: boolean }) => {
  const activeClassName = 'bg-cta/[.12] text-white';
  const inactiveClassName = 'text-white/70 hover:bg-white/5 hover:text-white/90';

  return (
    <RouterNavLink
      to={to}
      className={({ isActive }) =>
        `flex items-center h-11 px-3 py-2.5 rounded-md text-sm font-medium transition-colors ${isActive ? activeClassName : inactiveClassName}`
      }
    >
      {icon}
      <span className={`ml-3 whitespace-nowrap transition-opacity duration-150 ease-in-out ${isCollapsed ? 'opacity-0 w-0' : 'opacity-100'}`}>
        {label}
      </span>
    </RouterNavLink>
  );
};

const Logo = ({ isCollapsed }: { isCollapsed: boolean }) => (
  <div className="flex items-center h-16 px-5 border-b border-white/5 flex-shrink-0">
    <div className="flex items-center gap-3">
      <div className="w-8 h-8 rounded-md bg-gradient-to-br from-cta to-cta-light flex items-center justify-center">
        <WaveIcon className="h-5 w-5 text-white" />
      </div>
      <span className={`text-lg font-semibold text-white whitespace-nowrap transition-opacity duration-150 ease-in-out ${isCollapsed ? 'opacity-0 w-0' : 'opacity-100'}`}>
        VoiceSteer
      </span>
    </div>
  </div>
);

const UserMenu = ({ isCollapsed }: { isCollapsed: boolean }) => {
  const { currentUser } = useUser();

  return (
    <div className="relative p-2 rounded-md hover:bg-white/5">
        <div className="flex items-center space-x-3">
            <img className="h-10 w-10 rounded-full flex-shrink-0" src={currentUser.avatarUrl} alt="" />
            <div className={`transition-opacity duration-150 ease-in-out ${isCollapsed ? 'opacity-0 w-0' : 'opacity-100'}`}>
                <div className="font-medium text-white text-sm whitespace-nowrap">{currentUser.name}</div>
                <div className="text-white/70 text-xs whitespace-nowrap">{currentUser.vertical}</div>
            </div>
        </div>
    </div>
  );
}

const CollapseButton = ({ isCollapsed, setIsCollapsed }: { isCollapsed: boolean, setIsCollapsed: (c: boolean) => void }) => (
  <button 
    onClick={() => setIsCollapsed(!isCollapsed)}
    className="w-full h-10 flex items-center justify-center rounded-md text-white/70 hover:bg-white/5 hover:text-white/90 transition-colors"
    aria-label={isCollapsed ? "Expand sidebar" : "Collapse sidebar"}
  >
    {isCollapsed ? <ChevronRightIcon className="h-5 w-5" /> : <ChevronLeftIcon className="h-5 w-5" />}
  </button>
);


export function Sidebar({ isCollapsed, setIsCollapsed }: SidebarProps) {
  const sidebarWidth = isCollapsed ? 'w-[72px]' : 'w-[240px]';

  return (
    <aside className={`bg-sidebar-dark-bg text-white h-full flex flex-col flex-shrink-0 transition-all duration-300 ease-[cubic-bezier(0.4,0,0.2,1)] shadow-[2px_0_8px_rgba(0,0,0,0.1)] border-r border-white/5 ${sidebarWidth}`}>
      <Logo isCollapsed={isCollapsed} />

      <nav className="flex-1 px-2 py-4 space-y-2 overflow-y-auto">
        <NavLink to="/app/dashboard" icon={<HomeIcon className="h-5 w-5 flex-shrink-0"/>} label="Dashboard" isCollapsed={isCollapsed} />
        <NavLink to="/app/conversations" icon={<ChatBubbleLeftRightIcon className="h-5 w-5 flex-shrink-0"/>} label="Conversations" isCollapsed={isCollapsed}/>
        <NavLink to="/app/analytics" icon={<ChartBarIcon className="h-5 w-5 flex-shrink-0"/>} label="Analytics" isCollapsed={isCollapsed}/>
        <NavLink to="/app/settings" icon={<Cog6ToothIcon className="h-5 w-5 flex-shrink-0"/>} label="Settings" isCollapsed={isCollapsed}/>
      </nav>

      <div className="p-2 border-t border-white/5">
        <UserMenu isCollapsed={isCollapsed} />
        <CollapseButton isCollapsed={isCollapsed} setIsCollapsed={setIsCollapsed} />
      </div>
    </aside>
  );
}

export default Sidebar;