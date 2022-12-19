export default function NavbarLayan() {
  return (
    <div>
      <section className="my-8 ml-20">
        <div className="flex justify-between">
          <img
            height="30"
            src="logo-tiket.png"
            className="flex-none w-48 mr-5"
          />
          <div className="flex-auto w-64">
            <div className="">
              <a
                href="#"
                className="mx-4 text-sm hover:text-blue-500 underline-offset-[3px]"
              >
                Pesawat
              </a>
              <a href="#" className="mx-4 text-sm">
                Hotel
              </a>
              <a href="#" className="mx-4 text-sm">
                To Do
              </a>
              <a href="#" className="mx-4 text-sm">
                Kereta Api
              </a>
              <a href="#" className="mx-4 text-sm">
                Sewa Mobil
              </a>
              <a href="#" className="mx-4 text-sm">
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
