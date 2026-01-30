interface Props {
  pages: string[];
  currentPage: string;
  setCurrentPage: (page: string) => void;
}

const NavBar = ({pages, setCurrentPage, currentPage}: Props) => {
  return (
    <nav className="fixed flex justify-end gap-4 w-full items-center py-2 bg-gray-800 text-white px-8 sticky top-0 overscroll-none">
      {pages.map((page) => (
        <button
          key={page}
          className="px-4 py-2 rounded-md text-sm"
          onClick={() => setCurrentPage(page)}
        >
          <span className="relative inline-block">
            <span className="invisible font-semibold">
              {page}
            </span>
            <span className={`${currentPage === page ? "font-semibold" : ""} absolute left-0 top-0`}>
              {page}
            </span>
          </span>
        </button>
      ))}
    </nav>  
  );
};

export default NavBar;
