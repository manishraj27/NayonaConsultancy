import React from "react";
import UiButton from "./UiButton";
import { ChevronRight } from "lucide-react";
import globe from "../../assets/images/globe.png";
import { useEffect } from "react";
import { getCalApi } from "@calcom/embed-react";

function HomePageCTA() {
  useEffect(() => {
    (async function () {
      const cal = await getCalApi({ namespace: "30min" });
      cal("ui", {
        cssVarsPerTheme: {
          light: { "cal-brand": "#af5959" },
          dark: { "cal-brand": "#4ae0ea" },
        },
        hideEventTypeDetails: false,
        layout: "month_view",
      });
    })();
  }, []);

  return (
    <div className="lg:px-12 lg:py-24 px-8 py-8">
      <div className="relative flex flex-col items-center justify-center text-center bg-light-200 rounded-[40px] p-8">
        {/* Main Centered Text */}
        <div className="mb-12 text-center">
          <h4 className="text-body-4 font-open-sans uppercase tracking-wider text-on-light mb-4">
            Need an unfair advantage?
          </h4>
          <h2 className="text-heading-2 font-grotesk font-bold text-secondary-700 max-w-4xl mx-auto">
            Let's Make it Happen
          </h2>
        </div>

        {/* Button */}
        <button
          data-cal-namespace="30min"
          data-cal-link="manish-raj-pb5gyk/30min"
          data-cal-config='{"layout":"month_view","theme":"auto"}'
          id="calcom-button"
          className="hidden"
        ></button>


        <div className="mb-12">
          <UiButton
            text="BOOK A CALL"
            icon={ChevronRight}
            iconPosition="right"
            bgColor="#1E1B4B"
            iconBgColor="#818CF8"
            type="button"
            onClick={() => document.getElementById("calcom-button").click()}
          />
        </div>

        {/* Two Side Boxes */}
        <div className="flex flex-col sm:flex-row justify-between items-center w-full gap-4">
          {/* Globe Section - Left Side */}
          <div className="order-last sm:order-first sm:flex items-center rounded border border-secondary-700 hidden">
            <div className="lf-player-container">
              <div
                id="lottie"
                className="size-16 border-r border-secondary-700"
                style={{
                  background: "transparent",
                  margin: "0px auto",
                  outline: "none",
                  overflow: "hidden",
                }}
              >
                <img
                  src={globe}
                  alt="Global Availability"
                  className="w-full h-full object-contain animate-[spin_10s_linear_infinite]"
                />
              </div>
            </div>
            <p className="flex flex-col justify-between divide-y divide-secondary-600 font-mono text-base-small tracking-mono text-secondary-50">
              <span className="flex h-full items-center justify-start px-2">
                Working Globally
              </span>
              <span className="flex h-full items-center justify-start px-2">
                Available Apr '25
              </span>
            </p>
          </div>

          {/* Email Section - Right Side */}
          <div className="flex flex-col items-center w-full sm:w-auto">
            <span className="font-bold uppercase text-secondary-50 text-base-small">
              For further inquiries
            </span>
            <a
              href="mailto:hello@nayona.com"
              className="link-text group relative block h-fit overflow-hidden font-mono font-medium text-secondary-50"
            >
              <span className="link1">⮡ hello@nayona.com</span>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default HomePageCTA;
