import React from "react";
import MarkEmailUnreadIcon from "@mui/icons-material/MarkEmailUnread";
import { useNavigate } from "react-router-dom";

const NotificationPopup = ({ notifications, onNotificationClick }) => {
  const navigate = useNavigate();
  const handleNotificationClick = (notifId, notifRoute) => {
    onNotificationClick(notifId);
    navigate(notifRoute);
  };

  return (
    <div className="absolute top-5 right-1 mt-2 bg-white w-64 rounded-lg shadow-lg z-50">
      <div className="p-4 border-b border-gray-200">
        <h3 className="text-lg font-semibold text-gray-700">Notifications</h3>
      </div>
      <div className="max-h-60 overflow-y-auto">
        {notifications.length > 0 ? (
          notifications.map((notif) => (
            <div
              key={notif.id}
              onClick={() => handleNotificationClick(notif.id, notif.route)}
              className="p-3 flex items-center border-b border-gray-200 text-gray-600 hover:bg-gray-100 cursor-pointer"
            >
              {!notif.isRead && (
                <MarkEmailUnreadIcon className="text-green-400 mr-2" />
              )}
              <span>{notif.message}</span>
            </div>
          ))
        ) : (
          <div className="p-3 text-center text-gray-500">
            No unread notifications
          </div>
        )}
      </div>
    </div>
  );
};

export default NotificationPopup;
