
import React, { useState } from 'react';
import WaitlistForm from './waitlist/WaitlistForm';
import WaitlistSuccess from './waitlist/WaitlistSuccess';

const JoinWaitlistPage = () => {
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSuccess = () => {
    setIsSubmitted(true);
  };

  if (isSubmitted) {
    return <WaitlistSuccess />;
  }

  return <WaitlistForm onSuccess={handleSuccess} />;
};

export default JoinWaitlistPage;
