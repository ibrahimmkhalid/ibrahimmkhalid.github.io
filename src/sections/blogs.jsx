export const Blogs = ({ count = -1 }) => {
  var blogs = [
    ////
    { date: "2024-08-13", link: "/blogs/personal-development-environment", title: "Personal Development Environment" },
    {
      date: "2024-07-22",
      link: "/blogs/unconventional-making-of-this-website",
      title: "The Unconventional Making of This Website",
    },
    { date: "2024-07-03", link: "/blogs/hello-world", tagline: "My first blogpost", title: "Hello World" },
    ////
  ];
  if (count > 0) {
    var totalCount = blogs.length;
    blogs = blogs.slice(0, count > totalCount ? totalCount : count);
  }
  return (
    <>
      {count > 0 ? (
        <>
          <h1 className="text-2xl font-bold">Recent Blogs</h1>
        </>
      ) : (
        <>
          <h1 className="text-4xl font-bold underline">All Blogs</h1>
        </>
      )}
      <h2 className="pb-4 text-xl text-gray-600">Just some random thoughts I have had recently...</h2>
      <div className="flex flex-col gap-2">
        <ul className="space-y-5">
          {blogs.map((blog) => (
            <li>
              <a className="h-10 w-full items-center underline hover:text-blue-800" href={blog.link}>
                <h3 className="text-lg">
                  <span className="font-bold">{blog.title}</span>
                  <span className="font-thin"> ({blog.date})</span>
                </h3>
                <p className="text-md">{blog.tagline}</p>
              </a>
            </li>
          ))}
        </ul>
        {count > 0 && (
          <>
            <a className="text-md h-10 w-full items-center underline hover:text-blue-800" href="/blogs">
              View all...
            </a>
          </>
        )}
      </div>
    </>
  );
};
