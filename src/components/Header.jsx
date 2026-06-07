import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCode } from "@fortawesome/free-solid-svg-icons";

const tabs = [
  { name: "Experience", id: "experience" },
  { name: "Education", id: "education" },
  { name: "Projects", id: "projects" },
];

export default function Header() {
  return (
    <div className="sticky top-0 z-10 w-full overflow-x-hidden border-b border-gray-200 bg-white/95 backdrop-blur">
      <header className="mx-auto flex min-h-14 max-w-6xl flex-wrap items-center gap-x-6 gap-y-2 px-4 py-3 sm:px-6" id="#">
        <span
          className="shrink-0 items-center font-medium underline-offset-4 hover:underline"
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
          <nav className="flex min-w-0 w-full gap-4 overflow-x-auto whitespace-nowrap text-sm text-gray-700 sm:gap-6 md:ml-auto md:w-auto md:text-base">
            {tabs.map((tab, idx) => (
              <span
                key={idx}
                className="font-medium underline-offset-4 hover:text-black hover:underline"
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
    </div>
  );
}
