export const Blogs = ({ count = -1 }) => {
  var blogs = [
    //TODO: make dynamic with actual blog files
    { title: "Hello World", date: "1998-01-28", tagline: "My first blog post", link: "/blogs/hello-world" },
    { title: "Hello Forld", date: "1999-01-28", tagline: "My secod blog post", link: "/blogs/bello-borld" },
    { title: "Hello Borld", date: "2000-01-28", tagline: "My becondf blog post", link: "#" },
    { title: "Hello Qorld", date: "2002-01-28", tagline: "My last blog post", link: "#" },
  ];
  if (count > 0) {
    var totalCount = blogs.length;
    blogs = blogs.slice(0, count > totalCount ? totalCount : count);
  }
  return (
    <>
      <h1 className="text-2xl font-bold">Recent Blogs</h1>
      <h2 className="pb-4 text-xl text-gray-600">Just some random thoughts I have had recently...</h2>
      <div className="flex flex-col gap-2">
        <ul className="space-y-5">
          {blogs.map((blog) => {
            return (
              <li>
                <a className="h-10 w-full items-center underline hover:text-blue-800" href={blog.link}>
                  <h3 className="text-lg">
                    <span className="font-bold">{blog.title}</span>
                    <span className="font-thin"> ({blog.date})</span>
                  </h3>
                  <p className="text-md">{blog.tagline}</p>
                </a>
              </li>
            );
          })}
        </ul>
        <a className="text-md h-10 w-full items-center underline hover:text-blue-800" href="#">
          View all...
        </a>
      </div>
    </>
  );
};
