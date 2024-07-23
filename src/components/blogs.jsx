export const Blogs = ({ count = -1 }) => {
  var blogs = [
    ////
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
          <h1 className="text-xl font-bold">Recent Blogs</h1>
        </>
      ) : (
        <>
          <h1 className="text-3xl font-bold underline">All Blogs</h1>
        </>
      )}
      <h2 className="pb-4 text-lg text-gray-600">Just some random thoughts I have had recently...</h2>
      <div className="flex flex-col gap-2">
        <ul className="space-y-5">
          {blogs.map((blog) => {
            return (
              <li>
                <a className="h-10 w-full items-center underline hover:text-blue-800" href={blog.link}>
                  <h3 className="text-md">
                    <span className="font-bold">{blog.title}</span>
                    <span className="font-thin"> ({blog.date})</span>
                  </h3>
                  <p className="text-sm">{blog.tagline}</p>
                </a>
              </li>
            );
          })}
        </ul>
        {count > 0 ? (
          <>
            <a className="h-10 w-full items-center text-sm underline hover:text-blue-800" href="/blogs">
              View all...
            </a>
          </>
        ) : (
          <></>
        )}
      </div>
    </>
  );
};
