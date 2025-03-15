import React, { createContext, useState, useEffect, useContext } from "react";
import { database } from "./../firebase";
import { ref, onValue, push } from "firebase/database";
import { useNotification } from "./NotificationHook";

const GlobalDataContext = createContext();

export const useGlobalData = () => useContext(GlobalDataContext);

export const GlobalDataProvider = ({ children }) => {
  const [elephants, setElephants] = useState();
  const [notifications, setNotifications] = useState([]);
  const { triggerNotification } = useNotification();

  useEffect(() => {
    const dataRef = ref(database, "predictions");
    const notificationsRef = ref(database, "notifications");

    // Fetch notifications from Firebase
    const unsubscribeNotifications = onValue(notificationsRef, (snapshot) => {
      if (snapshot.exists()) {
        const data = snapshot.val();
        const formattedNotifications = Object.entries(data).map(
          ([id, value]) => ({
            id,
            ...value,
          })
        );
        setNotifications(formattedNotifications);
        console.log("Notifications state", notifications);
      }
    });

    // Fetch predictions from Firebase
    const unsubscribePredictions = onValue(dataRef, (snapshot) => {
      if (snapshot.exists()) {
        const data = snapshot.val();
        const newNotifications = [];

        const formattedData = Object.entries(data).map(
          ([elephantId, elephantData]) => {
            const predictions = elephantData.predictions || {};

            Object.entries(predictions).forEach(([key, value]) => {
              if (value.anomaly_percentage > 80) {
                const alertMessage = `${key}: ${value.Estimation}`;
                const alertTitle = `🚨 Critical Alert for ${
                  elephantData.beltNo || "Unknown"
                }!`;

                const notificationData = {
                  title: alertTitle,
                  message: alertMessage,
                  timestamp: new Date().toISOString(),
                  elephantId: elephantId,
                  beltNo: elephantData.beltNo || "Unknown",
                };

                push(notificationsRef, notificationData);

                newNotifications.push(notificationData);

                triggerNotification(alertMessage, elephantId);
              }
            });

            return {
              id: elephantId,
              Name: elephantData?.name || "N/A",
              beltNo: elephantData?.beltNo || "N/A",
              Heart_Beat: elephantData?.Heart_Beat || "N/A",
              Blood_Oxygen: elephantData?.Blood_Oxygen || "N/A",
              Body_Temperature: elephantData?.Body_Temperature || "N/A",
              Age: elephantData?.age || "N/A",
              Gender: elephantData?.gender || "N/A",
              predictions,
              Status: elephantData?.status || "Unknown",
              Battery: elephantData?.Battery || "N/A",
              live: elephantData?.isLive ?? false,
              isOn: elephantData?.isOn ?? false,
              Time: new Date().toLocaleTimeString(),
              Date: new Date().toLocaleDateString(),
            };
          }
        );

        console.log("Formatted data:", formattedData);
        setElephants(formattedData);
        setNotifications((prev) => [...prev, ...newNotifications]);
      }
    });

    return () => {
      unsubscribePredictions();
      unsubscribeNotifications();
    };
  }, []);

  return (
    <GlobalDataContext.Provider value={{ elephants, notifications }}>
      {children}
    </GlobalDataContext.Provider>
  );
};
