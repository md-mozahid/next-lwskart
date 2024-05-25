import Header from "./Header";
import Navbar from "./Navbar";

export default function HeaderSection({ lang }) {
  return (
    <div className=" w-full">
      <Header lang={lang} />
      <Navbar lang={lang} />
    </div>
  );
}
