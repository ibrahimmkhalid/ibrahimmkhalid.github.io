import BurgerMenu from "./BurgerMenu.jsx";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeft, faCode } from "@fortawesome/free-solid-svg-icons";

const tabs = [
  { name: "Recent Blogs", id: "recent-blogs" },
  { name: "Experience", id: "experience" },
  { name: "Education", id: "education" },
  { name: "Projects", id: "projects" },
];

export default function Header({ isBlog }) {
  return (
    <div className="sticky top-0 z-10">
      <header className="flex h-14 items-center bg-white px-4 lg:px-6" id="#">
        <span
          className="items-center font-medium underline-offset-4 hover:underline"
          style={{ cursor: "pointer" }}
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
        >
          {isBlog ? (
            <a href="/" style={{ color: "black", textDecoration: "none" }}>
              <span className="flex items-center gap-2">
                <FontAwesomeIcon icon={faArrowLeft} style={{ width: "1em", height: "1em", color: "black" }} />
                <span style={{ color: "black", textDecoration: "none" }}>Ibrahim Khalid</span>
              </span>
            </a>
          ) : (
            <span className="flex items-center gap-2">
              <FontAwesomeIcon icon={faCode} style={{ width: "1em", height: "1em" }} />
              <span>Ibrahim Khalid</span>
            </span>
          )}
        </span>
        {isBlog ? null : (
          <>
            <nav className="ml-auto hidden gap-4 sm:gap-6 md:flex">
              {tabs.map((tab, idx) => (
                <span
                  key={idx}
                  className="font-medium underline-offset-4 hover:underline"
                  style={{ cursor: "pointer" }}
                  onClick={() => document.getElementById(tab.id)?.scrollIntoView({ behavior: "smooth" })}
                >
                  {tab.name}
                </span>
              ))}
            </nav>
            <div className="ml-auto gap-4 sm:gap-6 md:hidden">
              <BurgerMenu tabs={tabs} />
            </div>
          </>
        )}
      </header>
      <hr className="border-t border-gray-200" />
    </div>
  );
}
