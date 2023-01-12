export default function NavbarLayan() {
  return (
    <div className="">
      <section className="my-8 ml-20 ">
        <div className="flex justify-between">
          <div className="items-start">
            <img
              height="25"
              src="logo-tiket.png"
              className="flex-none w-48 mr-5 mb-4"
            />
          </div>
          <div className="flex-auto w-64 ">
            <div className="">
              <a
                href="#"
                className="mx-4 text-base hover:text-blue-500 no-underline hover:underline hover:underline-offset-8"
              >
                Pesawat
              </a>
              <a
                href="#"
                className="mx-4 text-base hover:text-blue-500 no-underline hover:underline hover:underline-offset-8"
              >
                Hotel
              </a>
              <a
                href="#"
                className="mx-4 text-base hover:text-blue-500 no-underline hover:underline hover:underline-offset-8"
              >
                To Do
              </a>
              <a
                href="#"
                className="mx-4 text-base hover:text-blue-500 no-underline hover:underline hover:underline-offset-8"
              >
                Kereta Api
              </a>
              <a
                href="#"
                className="mx-4 text-base hover:text-blue-500 no-underline hover:underline hover:underline-offset-8"
              >
                Sewa Mobil
              </a>
              <a
                href="#"
                className="mx-4 text-base hover:text-blue-500 no-underline hover:underline hover:underline-offset-8"
              >
                Event
              </a>
            </div>
          </div>
          <div className="flex-auto w-32 font-bold text-slate-600">
            <a href="#" className="mx-4 text-sm">
              Elite Rewards
            </a>
            <a href="#" className="mx-4 text-sm">
              Cek Order
            </a>
            <a href="#" className="mx-4 text-sm">
              Login
            </a>
            <a
              href="#"
              className="mx-4 text-sm text-blue-500 rounded-full border border-white shadow-2xl	"
            >
              Daftar
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
