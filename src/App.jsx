import { useState } from "react";
import LandingPage from "./components/LandingPage";
import WaitlistForm from "./components/waitlistform";

const App = () => {
  const [showWaitlistForm, setShowWaitlistForm] = useState(false);

  const handleWaitlistClick = () => {
    setShowWaitlistForm(true);
  };

  const handleFormSubmit = () => {
    setShowWaitlistForm(false);
  };

  return (
    <div className="max-w-7xl mx-auto pt-20 px-6">
      {showWaitlistForm ? (
        <WaitlistForm onSubmit={handleFormSubmit} />
      ) : (
        <LandingPage onJoinWaitlistClick={handleWaitlistClick} />
      )}
    </div>
  );
};

export default App;
