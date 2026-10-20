import React, { useState } from "react";
import { ArrowUpRight, Menu, X } from "lucide-react";
export const Navbar = ({
  currentPath,
  onNavigate,
}: {
  currentPath: string;
  onNavigate: (path: string) => void;
}) => {
  const [open, setOpen] = useState(false);
  const links = [
    ["Platform", "/platform"],
    ["For agencies", "/for-agencies"],
    ["For brands", "/for-brands"],
    ["Resources", "/articles"],
    ["Pricing", "/pricing"],
  ];
  const navigate = (event: React.MouseEvent, path: string) => {
    if (event.metaKey || event.ctrlKey || event.shiftKey || event.altKey)
      return;
    event.preventDefault();
    onNavigate(path);
    setOpen(false);
    window.scrollTo(0, 0);
  };
  return (
    <header className="site-header">
      <div className="nav-inner">
        <a className="wordmark" href="/" onClick={(e) => navigate(e, "/")}>
          prezlo<span>.</span>
        </a>
        <nav
          aria-label="Main navigation"
          className={open ? "main-nav is-open" : "main-nav"}
        >
          {links.map(([name, path]) => (
            <a
              key={path}
              href={path}
              aria-current={currentPath === path ? "page" : undefined}
              onClick={(e) => navigate(e, path)}
            >
              {name}
            </a>
          ))}
          <a className="mobile-trial" href="https://prezlo.io/">
            Try Prezlo <ArrowUpRight size={15} />
          </a>
        </nav>
        <a className="nav-cta" href="https://prezlo.io/">
          Try Prezlo <ArrowUpRight size={15} />
        </a>
        <button
          className="menu-toggle"
          aria-label={open ? "Close navigation" : "Open navigation"}
          aria-expanded={open}
          onClick={() => setOpen(!open)}
        >
          {open ? <X /> : <Menu />}
        </button>
      </div>
    </header>
  );
};
