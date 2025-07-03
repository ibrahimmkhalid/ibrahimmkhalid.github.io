import Button from "./Button.jsx";

export const Project = ({ title, body, image, link = "", buttons = [] }) => {
  return (
    <>
      <div class="z-0 my-4 w-full rounded-lg border-gray-200 border hover:shadow">
        <a class="h-auto pb-8" href={link} target="_blank">
          {image && (
            <div class="relative overflow-hidden rounded-t-lg">
              <img src={image.link} class="aspect-video object-cover transition-all" alt={image.alt}/>
              <div class="absolute inset-0 bg-gray-200/20"></div>
            </div>
          )}
          <div class="px-6 py-3">
            <h3 class="py-4 text-lg font-semibold tracking-tight">{title}</h3>
            <p class="pb-4 text-sm">{body}</p>
            <div class="flex flex-wrap pb-4">
              {buttons.map((button) => (
                <Button>{button}</Button>
              ))}
            </div>
          </div>
        </a>
      </div>
    </>
  );
};
