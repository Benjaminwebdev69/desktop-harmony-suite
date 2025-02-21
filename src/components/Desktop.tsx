
import React, { useState } from "react";
import { format } from "date-fns";
import {
  AppWindow,
  BookOpen,
  Calculator,
  Camera,
  Computer,
  File,
  Folder,
  Globe,
  House,
  LucideIcon,
} from "lucide-react";

interface DesktopIcon {
  id: number;
  name: string;
  icon: LucideIcon;  // Changed to LucideIcon type
}

const apps: DesktopIcon[] = [
  { id: 1, name: "Home", icon: House },
  { id: 2, name: "Files", icon: File },
  { id: 3, name: "Browser", icon: Globe },
  { id: 4, name: "Calculator", icon: Calculator },
  { id: 5, name: "Camera", icon: Camera },
  { id: 6, name: "Documents", icon: BookOpen },
  { id: 7, name: "Computer", icon: Computer },
  { id: 8, name: "Folders", icon: Folder },
  { id: 9, name: "Terminal", icon: AppWindow },
  { id: 10, name: "Settings", icon: AppWindow },
  { id: 11, name: "System", icon: Computer },
];

const Desktop = () => {
  const [time, setTime] = useState(new Date());

  React.useEffect(() => {
    const timer = setInterval(() => setTime(new Date()), 1000);
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 p-8 text-white">
      {/* Time Display */}
      <div className="fixed top-4 right-4 text-right">
        <div className="text-4xl font-light mb-1">{format(time, "HH:mm")}</div>
        <div className="text-sm font-light opacity-75">
          {format(time, "EEEE, MMMM do")}
        </div>
      </div>

      {/* Desktop Grid */}
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-8 mt-20">
        {apps.map((app) => {
          const Icon = app.icon;
          return (
            <div
              key={app.id}
              className="group flex flex-col items-center justify-center p-4 rounded-xl 
                       backdrop-blur-sm bg-white/5 hover:bg-white/10 
                       transition-all duration-300 cursor-pointer
                       hover:shadow-lg animate-fade-in"
            >
              <div
                className="p-3 rounded-full bg-white/10 group-hover:bg-white/20 
                         transition-all duration-300 group-hover:animate-icon-hover"
              >
                <Icon className="w-8 h-8" />
              </div>
              <span className="mt-3 text-sm font-light opacity-90 group-hover:opacity-100">
                {app.name}
              </span>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Desktop;
