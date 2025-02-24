import React from "react";
import { Button } from "@/components/ui/button";
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuList,
  NavigationMenuLink,
} from "@/components/ui/navigation-menu";
import { Input } from "@/components/ui/input";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Search, Bell, Plus } from "lucide-react";

interface NavbarProps {
  userAvatar?: string;
  userName?: string;
  notificationCount?: number;
}

const Navbar = ({
  userAvatar = "https://api.dicebear.com/7.x/avataaars/svg?seed=John",
  userName = "John Doe",
  notificationCount = 3,
}: NavbarProps) => {
  return (
    <nav className="w-full h-16 px-4 border-b bg-background flex items-center justify-between fixed top-0 z-50">
      <div className="flex items-center gap-8">
        <a href="/" className="text-xl font-bold text-primary">
          Community Hub
        </a>

        <NavigationMenu>
          <NavigationMenuList className="hidden md:flex gap-6">
            <NavigationMenuItem>
              <NavigationMenuLink className="text-sm" href="/activities">
                Activities
              </NavigationMenuLink>
            </NavigationMenuItem>
            <NavigationMenuItem>
              <NavigationMenuLink className="text-sm" href="/discover">
                Discover
              </NavigationMenuLink>
            </NavigationMenuItem>
            <NavigationMenuItem>
              <NavigationMenuLink className="text-sm" href="/leaderboard">
                Leaderboard
              </NavigationMenuLink>
            </NavigationMenuItem>
          </NavigationMenuList>
        </NavigationMenu>
      </div>

      <div className="flex items-center gap-4">
        <div className="relative max-w-sm hidden md:block">
          <Search className="absolute left-2 top-2.5 h-4 w-4 text-muted-foreground" />
          <Input
            placeholder="Search activities..."
            className="pl-8 w-[300px]"
          />
        </div>

        <Button variant="outline" size="icon" className="relative">
          <Bell className="h-4 w-4" />
          {notificationCount > 0 && (
            <span className="absolute -top-1 -right-1 bg-primary text-primary-foreground rounded-full w-4 h-4 text-xs flex items-center justify-center">
              {notificationCount}
            </span>
          )}
        </Button>

        <Button>
          <Plus className="h-4 w-4 mr-2" />
          Create Activity
        </Button>

        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button variant="ghost" className="relative h-8 w-8 rounded-full">
              <Avatar className="h-8 w-8">
                <AvatarImage src={userAvatar} alt={userName} />
                <AvatarFallback>{userName.charAt(0)}</AvatarFallback>
              </Avatar>
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent align="end">
            <DropdownMenuItem>Profile</DropdownMenuItem>
            <DropdownMenuItem>Settings</DropdownMenuItem>
            <DropdownMenuItem>Log out</DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      </div>
    </nav>
  );
};

export default Navbar;
