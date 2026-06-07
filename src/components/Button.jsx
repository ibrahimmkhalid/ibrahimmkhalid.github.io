export default function Button({ children, onClick }) {
  return (
    <button
      className="my-1 mr-2 inline-flex min-h-9 max-w-full items-center justify-center rounded-md border border-black bg-black px-3 py-1.5 text-sm leading-tight whitespace-normal break-words text-white sm:px-4"
      onClick={onClick || (() => {})}
    >
      {children}
    </button>
  );
}
