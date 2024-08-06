import { Button } from "./button.jsx";

export const Project = ({ title, body, image, link = "", buttons = [] }) => {
  return (
    <>
      <div className="z-0 my-4 w-full rounded-lg border hover:shadow">
        <a className="h-auto pb-8" href={link} target="_blank">
          <div className="relative overflow-hidden rounded-t-lg">
            <img src={image} className="aspect-video object-cover transition-all" />
            <div className="absolute inset-0 bg-gray-200/20"></div>
          </div>
          <div className="px-6 py-3">
            <h3 className="py-4 text-lg font-semibold tracking-tight">{title}</h3>
            <p className="pb-4 text-sm">{body}</p>
            <div className="flex flex-wrap pb-4">
              {buttons.map((button) => {
                return <Button>{button}</Button>;
              })}
            </div>
          </div>
        </a>
      </div>
    </>
  );
};
