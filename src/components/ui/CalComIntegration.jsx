import { useEffect } from "react";
import { getCalApi } from "@calcom/embed-react";
import Button from "./Button"; // Import the animated button component

const CalComIntegration = ({theme}) => {
  useEffect(() => {
    (async function () {
      const cal = await getCalApi({ namespace: "30min" });
      cal("ui", {
        cssVarsPerTheme: {
          light: { "cal-brand": "#af5959" },
          dark: { "cal-brand": "#4ae0ea" }
        },
        hideEventTypeDetails: false,
        layout: "month_view"
      });
    })();
  }, []);

  return (
    <div>
      <button
        data-cal-namespace="30min"
        data-cal-link="manish-raj-pb5gyk/30min"
        data-cal-config='{"layout":"month_view","theme":"auto"}'
        className="hidden"
        id="calcom-button"
      ></button>
      <div
        onClick={() => document.getElementById("calcom-button").click()}
      >
        <Button text="Schedule meeting" theme={theme} />
      </div>
    </div>
  );
};

export default CalComIntegration;
