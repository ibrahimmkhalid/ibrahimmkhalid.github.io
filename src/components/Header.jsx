import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCode } from "@fortawesome/free-solid-svg-icons";

const tabs = [
  { name: "Experience", id: "experience" },
  { name: "Education", id: "education" },
  { name: "Projects", id: "projects" },
];

export default function Header() {
  return (
    <div className="sticky top-0 z-10">
      <header className="flex h-14 items-center bg-white px-4 lg:px-6" id="#">
        <span
          className="items-center font-medium underline-offset-4 hover:underline"
          style={{ cursor: "pointer" }}
          onClick={() => {
            if (window.location.pathname !== "/") {
              window.location.href = "/";
            } else {
              window.scrollTo({ top: 0, behavior: "smooth" });
            }
          }}
        >
          <span className="flex items-center gap-2">
            <FontAwesomeIcon icon={faCode} style={{ width: "1em", height: "1em" }} />
            <span>Ibrahim Khalid</span>
          </span>
        </span>
        <>
          <nav className="ml-auto hidden gap-4 sm:gap-6 md:flex">
            {tabs.map((tab, idx) => (
              <span
                key={idx}
                className="font-medium underline-offset-4 hover:underline"
                style={{ cursor: "pointer" }}
                onClick={() => {
                  if (window.location.pathname !== "/") {
                    window.location.href = `/#${tab.id}`;
                    window.scrollTo({ top: 0, behavior: "smooth" });
                  } else {
                    document.getElementById(tab.id)?.scrollIntoView({ behavior: "smooth" });
                  }
                }}
              >
                {tab.name}
              </span>
            ))}
          </nav>
        </>
      </header>
      <hr className="border-t border-gray-200" />
    </div>
  );
}
