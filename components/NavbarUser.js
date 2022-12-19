import { FiChevronDown } from "react-icons/fi";

function NavbarUser(props) {
  const satu = [
    "Daftarkan Hotel Anda",
    "Daftarkan Aktivitas/Event Anda",
    "Promo",
    "Pusat Bantuan",
  ];
  return (
    <div>
      <section className="">
        <div className="flex flex-row justify-between bg-neutral-300 bg-opacity-25 p-1">
          <div className="basis-1/2 ml-20">
            {satu.map((item, index) => {
              return (
                <a
                  href="#"
                  className="mx-2 text-gray-500 hover:text-blue-500 text-xs	"
                >
                  {item}
                </a>
              );
            })}
          </div>
          <div className=" pt-1 basis-1/4 flex flex-row justify-end mr-20">
            <div className="">
              <img
                height="20"
                src="id.png"
                className="w-6 h-4 border border-slate-500"
              ></img>
            </div>
            <div className="ml-2">
              <FiChevronDown />
            </div>
            <div className="ml-2 text-sm">IDR</div>
            <div className="ml-2">
              <FiChevronDown />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default NavbarUser;
