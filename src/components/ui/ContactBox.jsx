import { useState } from "react";
import Button from "./Button";
import GreetingBox from "./GreetingBox";
import Inquiry from "./Inquiry";

const ContactBox = () => {
  const [showProjectForm, setShowProjectForm] = useState(false);

  return (
    <div className="mt-16 relative w-full min-h-[85vh] lg:min-h-[85h] rounded-3xl bg-light-100 flex items-center justify-center">
      <div className="flex w-full flex-col items-center gap-16 px-4 lg:px-0">
        {showProjectForm ? (
          <>
             <Inquiry onBackToHome={() => setShowProjectForm(false)} />
          </>
        ) : (
          <>
            <GreetingBox />
            <div className="flex flex-col lg:flex-row items-center gap-4 lg:gap-6">
              <div onClick={() => setShowProjectForm(true)}>
                <Button text="Start a project" />
              </div>

              <Button text="Join Nayona" />
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default ContactBox;
