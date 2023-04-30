import Link from "next/link";
import { useEffect, useState } from "react";
import { IconButton, useMediaQuery } from "@mui/material";
import { Menu as MenuIcon } from "@mui/icons-material";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";

const Navbar = () => {
  const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl);
  const isNonMobileDevice = useMediaQuery("(min-width: 700px)");

  useEffect(() => {
    addEventListener("scroll", (_) => {
      console.log(window.scrollY);
      if (window.scrollY >= 2)
        document.getElementById("main-header").classList.add("active");
      else document.getElementById("main-header").classList.remove("active");
    });
    return removeEventListener("scroll", () => {});
  }, []);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <>
      <nav
        className="flex flex-row items-center justify-between px-8 py-4 bg-[rgba(255,255,255,0.1)] fixed top-0 w-full z-50"
        id="main-header"
      >
        <Link href="/">
          <img
            src="/assets/logo.png"
            alt="Logo de la aplicación"
            height={50}
            width={100}
            className="hover:scale-125"
          />
        </Link>
        {isNonMobileDevice ? (
          <div className="flex flex-row items-center gap-6 text-[#0e0e0e] font-bold font-serif">
            <Link
              href="/eventos"
              className="hover:text-[#8777c2] hover:scale-110"
              scroll={false}
            >
              Eventos
            </Link>
            <Link
              href="/login"
              className="hover:text-[#8777c2] hover:scale-110"
            >
              Iniciar sesión
            </Link>
          </div>
        ) : (
          <>
            <IconButton
              sx={{ color: "#0e0e0e" }}
              id="basic-button"
              aria-controls={open ? "basic-menu" : undefined}
              aria-haspopup="true"
              aria-expanded={open ? "true" : undefined}
              onClick={handleClick}
            >
              <MenuIcon />
            </IconButton>
            <Menu
              id="basic-menu"
              anchorEl={anchorEl}
              open={open}
              onClose={handleClose}
              MenuListProps={{ "aria-labelledby": "basic.button" }}
              PaperProps={{
                className: "bg-white text-[#0e0e0e] font-bold font-serif",
              }}
            >
              <MenuItem onClick={handleClose}>
                <Link
                  href="/eventos"
                  className="hover:text-[#8777c2] hover:scale-110"
                  scroll={false}
                >
                  Eventos
                </Link>
              </MenuItem>
              <MenuItem onClick={handleClose}>
                <Link
                  href="/login"
                  className="hover:text-[#8777c2] hover:scale-110"
                >
                  Iniciar sesión
                </Link>
              </MenuItem>
            </Menu>
          </>
        )}
      </nav>
    </>
  );
};

export default Navbar;
