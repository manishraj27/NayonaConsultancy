import BlueGradientIcon from "../../assets/icons/BlueGradientIcon";

export default function Heading({ title, description }) {
  return (
    <div className="section-heading select-none flex flex-col ">
      {/* Logo and Small Description */}
      <div className="flex  space-x-3">
        <BlueGradientIcon />
        <span className="text-body-2 font-montserrat tracking-wide">[{description}]</span>
      </div>
      
      {/* Title */}
      <h2 className="mt-2 text-heading-1 text-pretty text-title font-semibold  font-montserrat">
        {title}
      </h2>
    </div>
  );
}
