import React, { useState, useEffect } from "react";
import Notification1 from "./Notification1";
import Notification2 from "./Notification2";
import Notification3 from "./Notification3";

const NotificationCarousel = () => {
  const [notifications, setNotifications] = useState([
    <Notification1 />,
    <Notification2 />,
    <Notification3 />,
  ]);

  useEffect(() => {
    const intervalId = setInterval(() => {
      rotateNotifications();
    }, 5000);

    return () => clearInterval(intervalId);
  }, []);

  const rotateNotifications = () => {
    setNotifications((prevNotifications) => {
      const rotatedNotifications = [...prevNotifications];
      const firstNotification = rotatedNotifications.shift();
      rotatedNotifications.push(firstNotification);
      return rotatedNotifications;
    });
  };

  return (
    <div className="notification-carousel">
      {notifications.map((notification, index) => (
        <div key={index} className="notification">
          {React.cloneElement(notification, { index })}
        </div>
      ))}
    </div>
  );
};

export default NotificationCarousel;
