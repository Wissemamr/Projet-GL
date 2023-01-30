import React, { useState } from 'react';
import { useRef } from 'react';
import {
    KnockFeedProvider,
    NotificationIconButton,
    NotificationFeedPopover,
  } from "@knocklabs/react-notification-feed";

  
// Required CSS import, unless you're overriding the styling
import "@knocklabs/react-notification-feed/dist/index.css";
  
const Notification = () => {
const [isVisible, setIsVisible] = useState(false);
const notifButtonRef = useRef(null);
  
return (
      <KnockFeedProvider
        apiKey={"pk_test_JeqxKQ5O9ONm2U3gNvQoA_i6f1QhoaFulVyKzIIQgl4"}
      >
    <>
        <NotificationIconButton
            ref={notifButtonRef}
            onClick={(e) => setIsVisible(!isVisible)}
        />
        <NotificationFeedPopover
            buttonRef={notifButtonRef}
            isVisible={isVisible}
            onClose={() => setIsVisible(false)}
        />
    </>
    </KnockFeedProvider>
);
};

export default Notification;