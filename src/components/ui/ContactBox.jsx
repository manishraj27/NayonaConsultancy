
import Button from './Button';
import GreetingBox from './GreetingBox';

const ContactBox = () => {
 
  return (
    <div className="mt-16 relative w-full min-h-[85vh] lg:min-h-[75vh] rounded-3xl bg-light-200 flex items-center justify-center">
      <div className="flex w-full flex-col items-center gap-16 px-4 lg:px-0">
        <GreetingBox />
        
        <div className="flex flex-col lg:flex-row items-center gap-4 lg:gap-6">
          <Button text="Start a project" />
          <Button text="Join Nayona" />
        </div>
      </div>
    </div>
  );
};

export default ContactBox;