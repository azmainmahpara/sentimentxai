import { useState } from "react";
import LandingPage from "./components/LandingPage";
import WaitlistForm from "./components/WaitlistForm";
import { Analytics } from '@vercel/analytics/react'; // Import Vercel Analytics

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
      <Analytics /> {/* Add Vercel Analytics component */}
    </div>
  );
};

export default App;
