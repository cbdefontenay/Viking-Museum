interface Button {
  text: string;
  href: string;
}

const ButtonClickHere = ({ text, href }: Button) => {
  return (
    <span className=" ml-16 flex justify-center text-yellow-800 mb-10 mt-2 border border-yellow-800 hover:bg-yellow-800 hover:text-gray-300 rounded-3xl w-1/2 p-2 md:hover:animate-pulse">
      <a href={href}>{text}</a>
    </span>
  );
};

export default ButtonClickHere;
