import Link from "next/link";
import { useEffect, useState } from "react";
import Head from "next/head";
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
      <Head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
        <link
          href="https://fonts.googleapis.com/css2?family=Dancing+Script&display=swap"
          rel="stylesheet"
        />
      </Head>
      <nav
        className="flex flex-row items-center justify-between px-8 py-4 bg-[rgba(255,255,255,0.1)] fixed top-0 w-full z-50"
        id="main-header"
      >
        <Link
          href="/"
          className="font-['Dancing_Script',cursive] font-bold text-3xl text-[#ff001e] hover:scale-125"
        >
          OperaActive
        </Link>
        {isNonMobileDevice ? (
          <div className="flex flex-row items-center gap-3 text-[#0e0e0e] font-bold text-base">
            <Link
              href="#objetivos"
              className="hover:text-[#4946f7] hover:scale-110"
            >
              Objetivos
            </Link>
            <Link
              href="#eventos"
              className="hover:text-[#4946f7] hover:scale-110"
            >
              Eventos
            </Link>
            <Link
              href="/login"
              className="hover:text-[#4946f7] hover:scale-110"
            >
              Iniciar Sesión
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
                className: "bg-white text-[#0e0e0e] font-bold text-base",
              }}
            >
              <MenuItem onClick={handleClose}>
                <Link
                  href="#objetivos"
                  className="hover:text-[#4946f7] hover:scale-110"
                >
                  Objetivos
                </Link>
              </MenuItem>
              <MenuItem onClick={handleClose}>
                <Link
                  href="#eventos"
                  className="hover:text-[#4946f7] hover:scale-110"
                >
                  Eventos
                </Link>
              </MenuItem>
              <MenuItem onClick={handleClose}>
                <Link
                  href="/login"
                  className="hover:text-[#4946f7] hover:scale-110"
                >
                  Iniciar Sesión
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
