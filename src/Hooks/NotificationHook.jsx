import React, { createContext, useState, useContext } from "react";
import Notification from "../Components/Notification";

const NotificationContext = createContext();

export const useNotification = () => useContext(NotificationContext);

export const NotificationProvider = ({ children }) => {
  const [notifications, setNotifications] = useState([]);

  const triggerNotification = (message, id) => {
    setNotifications((prev) => [...prev, { message, id }]);

    // Remove notification after 5 seconds.
    setTimeout(() => {
      setNotifications((prev) => prev.slice(1));
    }, 5000);
  };

  return (
    <NotificationContext.Provider value={{ triggerNotification }}>
      {children}
      <div className="fixed top-5 right-5 z-50 space-y-2">
        {notifications.map(({ message, id }, index) => (
          <Notification key={index} message={message} id={id} />
        ))}
      </div>
    </NotificationContext.Provider>
  );
};
