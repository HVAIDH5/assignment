import { Home as HomeIcon, User, Settings, LogOut } from 'lucide-react';

const NavBar = () => {
  return (
    <div>
    <nav className="bg-white shadow-md p-4">
        <div className="container mx-auto flex justify-between items-center">
          <div className="flex items-center">
            <HomeIcon className="w-6 h-6 mr-2" />
            <span className="text-xl font-bold">LeadMint</span>
          </div>
          <div className="flex space-x-4">
            <button className="flex items-center">
              <User className="w-5 h-5 mr-1" />
              Profile
            </button>
            <button className="flex items-center">
              <Settings className="w-5 h-5 mr-1" />
              Settings
            </button>
            <button className="flex items-center">
              <LogOut className="w-5 h-5 mr-1" />
              Logout
            </button>
          </div>
        </div>
      </nav>
      </div>
  );
};

export default NavBar;
