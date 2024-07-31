export const Project = ({ title, body }) => {
  return (
    <>
      <div className="z-0 my-4 w-full rounded-lg border hover:shadow">
        <a className="" href="#" rel="ugc">
          <div className="relative overflow-hidden rounded-t-lg">
            <img
              src="https://w.wallhaven.cc/full/p9/wallhaven-p9ppmp.png"
              className="aspect-video object-cover transition-all"
              style="aspect-ratio: 200 / 200; object-fit: cover;"
            />
            <div className="absolute inset-0 bg-gray-200/20"></div>
          </div>
          <div className="space-y-3 p-6">
            <div className="space-y-1">
              <h3 className="text-lg font-semibold tracking-tight">{title}</h3>
              <p className="text-sm">{body}</p>
            </div>
          </div>
        </a>
      </div>
    </>
  );
};
