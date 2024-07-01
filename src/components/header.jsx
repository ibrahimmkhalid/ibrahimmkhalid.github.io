const tabs = [
  { name: "Recent Blogs", id: "recent-blogs" },
  { name: "Experience", id: "experience" },
  { name: "Skills", id: "skills" },
  { name: "Selected Projects", id: "projects" },
];

export const Header = () => (
  <>
    <header className="sticky top-0 flex h-14 items-center bg-white px-4 lg:px-6" id="#">
      <span
        className="items-center text-sm font-medium underline-offset-4 hover:underline"
        onClick={'window.scrollTo({top:0, behavior: "smooth"})'}
      >
        <i className="fas fa-code"></i>
        Ibrahim Khalid
      </span>
      <nav className="ml-auto hidden gap-4 sm:gap-6 md:flex">
        {tabs.map((tab) => {
          return (
            <span
              key={tab.id}
              className="text-sm font-medium underline-offset-4 hover:underline"
              onClick={`document.getElementById("${tab.id}").scrollIntoView({behavior:"smooth"})`}
            >
              {tab.name}
            </span>
          );
        })}
      </nav>
      <div className="ml-auto gap-4 sm:gap-6 md:hidden">
        <div className="flex hover:cursor-pointer" id="burger-menu-button" onclick="toggleMenu()">
          <i className="fas fa-bars"></i>
        </div>
        <div
          className="absolute left-0 top-0 z-30 hidden h-full w-full flex-col items-center justify-center bg-white"
          style="height: 100vh; width: 100vw"
          id="burger-menu"
          onclick="toggleMenu()"
        >
          <div className="absolute right-0 top-0 mx-4 my-4 hover:cursor-pointer">
            <i className="fas fa-times"></i>
          </div>
          {tabs.map((tab) => {
            return (
              <div
                key={tab.id}
                className="my-4 rounded-md border-2 bg-gray-100 p-4 text-sm font-medium underline-offset-4 hover:cursor-pointer hover:underline"
                onClick={`document.getElementById("${tab.id}").scrollIntoView({behavior:"smooth"})`}
              >
                {tab.name}
              </div>
            );
          })}
        </div>
      </div>
    </header>
  </>
);
