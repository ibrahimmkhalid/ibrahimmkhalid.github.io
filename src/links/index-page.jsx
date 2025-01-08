import { Page } from "@nakedjsx/core/page";

const LinkTreeContent = () => {
  const linktw =
    "block w-full border-4 border-black bg-white py-3 text-center shadow-md transition-all hover:translate-y-1 hover:shadow-none";
  return (
    <>
      <div className="flex min-h-screen flex-col items-center">
        <main className="flex w-full flex-col items-center px-4 py-12">
          <section className="w-full md:w-3/5 lg:w-2/5">
            <div className="flex flex-col items-center">
              <h1 className="text-4xl font-bold">Ibrahim Khalid</h1>
              <h2 className="pb-4 text-xl text-gray-600">Software Engineer</h2>
              <ul className="w-full">
                <li className="mb-4">
                  <a
                    href="https://drive.google.com/file/d/19qmTRpP0RprfNma2gAVtgAg8XbIYtNOv/view?usp=drive_link"
                    className={linktw}
                  >
                    Resume
                  </a>
                </li>
                <li className="mb-4">
                  <a href="https://github.com/ibrahimmkhalid" className={linktw}>
                    GitHub
                  </a>
                </li>
                <li className="mb-4">
                  <a href="https://linkedin.com/in/ibrahimmkhalid" className={linktw}>
                    LinkedIn
                  </a>
                </li>
                <li className="mb-4">
                  <a href="https://ibrahimkhalid.me" className={linktw}>
                    Website
                  </a>
                </li>
                <li className="mb-4">
                  <a href="mailto:ibrahimmkhalid@gmail.com" className={linktw}>
                    Email
                  </a>
                </li>
                <li className="mb-4">
                  <a href="tel:+1-510-470-6616" className={linktw}>
                    Phone
                  </a>
                </li>
              </ul>
            </div>
          </section>
        </main>
      </div>
    </>
  );
};

Page.Create("en");
Page.AppendHead(<title>Ibrahim Khalid</title>);
Page.AppendHead(<meta charset="UTF-8" />);
Page.AppendHead(<meta name="viewport" content="width=device-width, initial-scale=1.0" />);
Page.AppendHead(<link rel="stylesheet" href="/styles.css" />);
Page.AppendBody(<LinkTreeContent />);
Page.Render();
