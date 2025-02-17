import { useState } from "react";
import Button from "./Button";
import GreetingBox from "./GreetingBox";
import Inquiry from "./Inquiry";
import Join from "./Join";

const ContactBox = () => {
  const [showProjectForm, setShowProjectForm] = useState(false);
  const [showJoinUsForm, setShowJoinUsForm] = useState(false);

  return (
    <div className="mt-16 relative w-full min-h-[85vh] rounded-3xl bg-light-100 flex items-center justify-center">
      <div className="flex w-full flex-col items-center gap-16 px-4 lg:px-0">
        {showProjectForm ? (
          <Inquiry onBackToHome={() => setShowProjectForm(false)} />
        ) : showJoinUsForm ? (
          <Join onBackToHome={() => setShowJoinUsForm(false)} />
        ) : (
          <>
            <GreetingBox />
            <div className="flex flex-col lg:flex-row items-center gap-4 lg:gap-6">
              <button onClick={() => setShowProjectForm(true)}>
                <Button text="Require EPM Service" />
              </button>
              <button onClick={() => setShowJoinUsForm(true)}>
                <Button text="Join Nayona" />
              </button>
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default ContactBox;
