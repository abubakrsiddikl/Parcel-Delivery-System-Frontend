import { Button } from "@/components/ui/button";
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
} from "@/components/ui/navigation-menu";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { ModeToggle } from "./ModeToggle";
import { Link, useNavigate } from "react-router";
import {
  authApi,
  useGetUserProfileQuery,
  useLogoutMutation,
} from "@/redux/feature/Authentication/auth.api";
import { Role } from "@/constants/role.constants";

import React from "react";
import { useAppDispatch } from "@/redux/hook";
import logo from "../../assets/logo2.png";

// Navigation links array to be used in both desktop and mobile menus
const navigationLinks = [
  { href: "/", label: "Home", role: "PUBLIC" },

  { href: "/about", label: "About", role: "PUBLIC" },
  { href: "/contact", label: "Contact", role: "PUBLIC" },
  // admin
  { href: "/admin", label: "Dashboard", role: Role.ADMIN },
  // sender
  { href: "/sender", label: "Dashboard", role: Role.SENDER },
  // receiver
  { href: "/receiver", label: "Dashboard", role: Role.RECEIVER },
];

export default function Component() {
  const { data: user } = useGetUserProfileQuery();
  const [logout] = useLogoutMutation();
  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  const handleLogout = async () => {
    await logout(undefined);
    navigate("/");
    dispatch(authApi.util.resetApiState());
  };

  return (
    <header className="border-b px-4 md:px-6">
      <div className="flex h-16 items-center justify-between gap-4">
        {/* Left side */}
        <div className="flex items-center gap-2">
          {/* Mobile menu trigger */}
          <Popover>
            <PopoverTrigger asChild>
              <Button
                className="group size-8 md:hidden"
                variant="ghost"
                size="icon"
              >
                <svg
                  className="pointer-events-none"
                  width={16}
                  height={16}
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M4 12L20 12"
                    className="origin-center -translate-y-[7px] transition-all duration-300 ease-[cubic-bezier(.5,.85,.25,1.1)] group-aria-expanded:translate-x-0 group-aria-expanded:translate-y-0 group-aria-expanded:rotate-[315deg]"
                  />
                  <path
                    d="M4 12H20"
                    className="origin-center transition-all duration-300 ease-[cubic-bezier(.5,.85,.25,1.8)] group-aria-expanded:rotate-45"
                  />
                  <path
                    d="M4 12H20"
                    className="origin-center translate-y-[7px] transition-all duration-300 ease-[cubic-bezier(.5,.85,.25,1.1)] group-aria-expanded:translate-y-0 group-aria-expanded:rotate-[135deg]"
                  />
                </svg>
              </Button>
            </PopoverTrigger>
            <PopoverContent align="start" className="w-36 p-1 md:hidden">
              <NavigationMenu className="max-w-none *:w-full">
                <NavigationMenuList className="flex-col items-start gap-0 md:gap-2">
                  {navigationLinks.map((link, index) => (
                    <React.Fragment key={index}>
                      {link?.role === "PUBLIC" && (
                        <NavigationMenuItem>
                          <NavigationMenuLink
                            className="text-muted-foreground hover:text-primary py-1.5 font-medium"
                            asChild
                          >
                            <Link to={link?.href}>{link?.label}</Link>
                          </NavigationMenuLink>
                        </NavigationMenuItem>
                      )}
                      {link?.role === user?.data?.role && (
                        <NavigationMenuItem>
                          <NavigationMenuLink
                            className="text-muted-foreground hover:text-primary py-1.5 font-medium"
                            asChild
                          >
                            <Link to={link?.href}>{link?.label}</Link>
                          </NavigationMenuLink>
                        </NavigationMenuItem>
                      )}
                    </React.Fragment>
                  ))}
                </NavigationMenuList>
              </NavigationMenu>
            </PopoverContent>
          </Popover>
          {/* Main nav */}
          <div className="flex items-center gap-6">
            <Link to={"/"} className="text-primary hover:text-primary/90">
              <img src={logo} alt="logo" className="w-14 h-14" />
            </Link>
            {/* Navigation menu */}
            <NavigationMenu className="max-md:hidden">
              <NavigationMenuList className="gap-2">
                {navigationLinks.map((link, index) => (
                  <React.Fragment key={index}>
                    {link?.role === "PUBLIC" && (
                      <NavigationMenuItem>
                        <NavigationMenuLink
                          className="text-muted-foreground hover:text-primary py-1.5 font-medium"
                          asChild
                        >
                          <Link to={link?.href}>{link?.label}</Link>
                        </NavigationMenuLink>
                      </NavigationMenuItem>
                    )}
                    {link?.role === user?.data?.role && (
                      <NavigationMenuItem>
                        <NavigationMenuLink
                          className="text-muted-foreground hover:text-primary py-1.5 font-medium"
                          asChild
                        >
                          <Link to={link.href}>{link.label}</Link>
                        </NavigationMenuLink>
                      </NavigationMenuItem>
                    )}
                  </React.Fragment>
                ))}
              </NavigationMenuList>
            </NavigationMenu>
          </div>
        </div>
        {/* Right side */}
        <div className="flex items-center gap-2">
          <ModeToggle></ModeToggle>
          <Button asChild variant="outline" size="sm" className="text-sm">
            <Link to="/track/parcel">Track Parcel</Link>
          </Button>
          {user?.data?.email && (
            <Button
              onClick={handleLogout}
              variant="outline"
              className="text-sm cursor-pointer"
            >
              Logout
            </Button>
          )}
          {!user?.data?.email && (
            <Button asChild className="text-sm">
              <Link to="/login">Login</Link>
            </Button>
          )}
        </div>
      </div>
    </header>
  );
}
