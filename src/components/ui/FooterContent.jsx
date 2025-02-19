export default function FooterContent() {
  return (
    <div className=" text-black py-10 px-12 h-full w-full flex flex-col justify-between">

        {/* Yet to implement footer design */}
      <div className="flex justify-between">
        <div className="flex flex-col">
          <h1 className="text-3xl font-semibold">Nayona Consultancy</h1>
          <p className="text-sm">
            © 2021 Nayona Consultancy. All Rights Reserved.
          </p>
        </div>
        <div className="flex flex-col">
          <h1 className="text-3xl font-semibold">Contact Us</h1>
          <p className="text-sm">+91 1234567890</p>
          <p className="text-sm">
            123, XYZ Street, ABC City, DEF State, GHI Country, JKL Pincode
          </p>
        </div>
      </div>
    </div>
  );
}
