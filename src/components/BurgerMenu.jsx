import { useState, useEffect } from "react";
import Button from "./Button";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faTimes } from "@fortawesome/free-solid-svg-icons";

export default function BurgerMenu({ tabs }) {
  const [open, setOpen] = useState(false);

  // Close menu on resize if width > 768
  useEffect(() => {
    function handleResize() {
      if (window.innerWidth > 768 && open) {
        setOpen(false);
        console.log("closed");
      }
    }
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, [open]);

  return (
    <>
      <div
        className="flex hover:cursor-pointer"
        id="burger-menu-button"
        onClick={() => setOpen((v) => !v)}
      >
      <FontAwesomeIcon icon={faBars} style={{width: "1em", height: "1em", color: "black"}}/> 
      </div>
      {open && (
        <div
          className="absolute left-0 top-0 z-30 h-full w-full flex flex-col items-center justify-center bg-white"
          style={{ height: "100vh", width: "100vw" }}
          id="burger-menu"
        >
          <div
            className="absolute right-0 top-0 mx-4 my-4 hover:cursor-pointer"
            onClick={() => setOpen(false)}
          >
          <FontAwesomeIcon icon={faTimes} style={{width: "1em", height: "1em", color: "black"}}/> 
          </div>
          {tabs.map((tab) => (
            <Button key={tab.id}
                style={{ cursor: "pointer" }}
                onClick={() => {
                  setOpen(false);
                  document
                    .getElementById(tab.id)
                    ?.scrollIntoView({ behavior: "smooth" });
                }}
              >
                {tab.name}
            </Button>
          ))}
        </div>
      )}
    </>
  );
}
