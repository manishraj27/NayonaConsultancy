import BlueGradientIcon from "../../assets/icons/BlueGradientIcon";

export default function Heading({ title, description }) {
  return (
    <div className="section-heading  flex flex-col">
      {/* Logo and Small Description */}
      <div className="flex space-x-3">
        <BlueGradientIcon />
        <span className="text-body-2 font-open-sans text-secondary-300 tracking-wide">
          [{description}]
        </span>
      </div>

      {/* Title */}
      <h2 className="mt-2 text-heading-1 font-semibold text-on-dark text-pretty">
        {title}
      </h2>
    </div>
  );
}