import Button from "./Button.jsx";

export const Project = ({ title, body, image, link = "", buttons = [] }) => {
  return (
    <>
      <div className="z-0 my-4 w-full min-w-0 overflow-hidden rounded-lg border border-gray-200 bg-white transition hover:border-gray-300 hover:shadow-sm">
        <a className="block h-auto" href={link} target="_blank">
          {image && (
            <div className="relative overflow-hidden border-b border-gray-200 bg-gray-100">
              <img src={image.link} className="h-full w-full object-cover transition-all" alt={image.alt} />
              <div className="absolute inset-0 bg-gray-200/20"></div>
            </div>
          )}
          <div className="px-4 py-4 sm:px-6">
            <h3 className="pb-3 text-lg font-semibold tracking-tight break-words">{title}</h3>
            <p className="pb-4 text-sm leading-6 break-words text-gray-700">{body}</p>
            <div className="flex flex-wrap">
              {buttons.map((button, idx) => (
                <Button key={idx}>{button}</Button>
              ))}
            </div>
          </div>
        </a>
      </div>
    </>
  );
};
