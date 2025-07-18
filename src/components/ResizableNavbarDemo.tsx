"use client";
import {
  Navbar,
  NavBody,
  NavItems,
  MobileNav,
  NavbarLogo,
  NavbarButton,
  MobileNavHeader,
  MobileNavToggle,
  MobileNavMenu,
} from "@/components/ui/resizable-navbar";
import { useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";

export default function ResizableNavbarDemo() {
  const navigate = useNavigate();
  const location = useLocation();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const navItems = [
    {
      name: "Home",
      link: "/",
    },
    {
      name: "Products",
      link: "/products",
    },
    {
      name: "About",
      link: "/about",
    },
    {
      name: "Contact",
      link: "/contact",
    },
  ];

  const handleNavClick = (path: string, e: React.MouseEvent) => {
    e.preventDefault();
    if (location.pathname !== path) {
      navigate(path);
    }
    setIsMobileMenuOpen(false);
  };

  const handleDemoClick = () => {
    if (location.pathname === '/') {
      const element = document.getElementById('demo');
      if (element) {
        element.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
    } else {
      navigate('/contact');
    }
    setIsMobileMenuOpen(false);
  };

  return (
    <div className="relative w-full">
      <Navbar>
        {/* Desktop Navigation */}
        <NavBody>
          <NavbarLogo />
          <NavItems 
            items={navItems.map(item => ({
              ...item,
              link: `#${item.link}`
            }))}
            onItemClick={(e) => {
              const href = (e.target as HTMLAnchorElement).getAttribute('href');
              if (href && href.startsWith('#/')) {
                e.preventDefault();
                const path = href.substring(1);
                handleNavClick(path, e);
              }
            }}
          />
          <div className="flex items-center gap-4">
            <NavbarButton 
              variant="secondary"
              onClick={() => handleNavClick('/about', {} as React.MouseEvent)}
            >
              Learn More
            </NavbarButton>
            <NavbarButton 
              variant="primary"
              onClick={handleDemoClick}
            >
              Request Demo
            </NavbarButton>
          </div>
        </NavBody>

        {/* Mobile Navigation */}
        <MobileNav>
          <MobileNavHeader>
            <NavbarLogo />
            <MobileNavToggle
              isOpen={isMobileMenuOpen}
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            />
          </MobileNavHeader>

          <MobileNavMenu
            isOpen={isMobileMenuOpen}
            onClose={() => setIsMobileMenuOpen(false)}
          >
            {navItems.map((item, idx) => (
              <a
                key={`mobile-link-${idx}`}
                href={item.link}
                onClick={(e) => handleNavClick(item.link, e)}
                className={`relative text-base font-medium transition-colors duration-200 ${
                  location.pathname === item.link
                    ? 'text-blue-600 dark:text-blue-400'
                    : 'text-gray-700 dark:text-gray-200 hover:text-blue-600 dark:hover:text-blue-400'
                }`}
              >
                <span className="block">{item.name}</span>
                {location.pathname === item.link && (
                  <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full" />
                )}
              </a>
            ))}
            <div className="flex w-full flex-col gap-4 pt-4 border-t border-gray-200/30 dark:border-gray-800/30">
              <NavbarButton
                onClick={() => handleNavClick('/about', {} as React.MouseEvent)}
                variant="secondary"
                className="w-full justify-center"
              >
                Learn More
              </NavbarButton>
              <NavbarButton
                onClick={handleDemoClick}
                variant="primary"
                className="w-full justify-center"
              >
                Request Demo
              </NavbarButton>
            </div>
          </MobileNavMenu>
        </MobileNav>
      </Navbar>
    </div>
  );
}