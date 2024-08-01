export const Button = ({ children }) => {
  return (
    <>
      <span className="mx-2 my-1 h-10 items-center justify-center rounded-md border-black bg-black px-4 py-2 text-white">
        {children}
      </span>
    </>
  );
};
