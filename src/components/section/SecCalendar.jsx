import FullCalendar from "@fullcalendar/react";
import dayGridPlugin from "@fullcalendar/daygrid";
import "../../index.css";
import AddEvent from "../ui/AddEvent";
import EventList from "../ui/EventList";
import interactionPlugin from "@fullcalendar/interaction"; // needed for dayClick
import { useState } from "react";

export default function SecCalendar() {
  const events = [
    { title: "Title", start: "2024-05-02", end: "2024-05-02" },
    { title: "Title", start: "2024-05-02", end: "2024-05-02" },
    { title: "Title", start: "2024-05-02", end: "2024-05-02" },
    { title: "Title", start: "2024-05-02", end: "2024-05-02" },
    { title: "Title", start: "2024-05-02", end: "2024-05-02" },
    { title: "Title", start: "2024-05-02", end: "2024-05-02" },
    { title: "Title", start: "2024-05-02", end: "2024-05-02" },
    { title: "Title", start: "2024-05-02", end: "2024-05-02" },
    { title: "Title", start: "2024-05-02", end: "2024-05-02" },
  ];

  const [isEventPopupOpen, setIsEventPopupOpen] = useState(false);
  const [isEventListOpen, setIsEventListOpen] = useState(false);

  const handleOpenEventPopup = () => {
    setIsEventPopupOpen(true);
  };
  const handleOpenEventList = () => {
    setIsEventListOpen(true);
  };

  const handleCloseEventPopup = () => {
    setIsEventPopupOpen(false);
  };
  const handleCloseEventList = () => {
    setIsEventListOpen(false);
  };

  return (
    <div className="h-full">
      <FullCalendar
        plugins={[dayGridPlugin, interactionPlugin]}
        initialView="dayGridMonth"
        weekends={true}
        events={events}
        editable={true}
        selectable={true}
        dateClick={(info) => {
          if (
            info.dateStr === events[0].start ||
            info.dateStr === events[0].end
          ) {
            handleOpenEventList();
          } else {
            handleOpenEventPopup();
          }
        }}
        height="100%"
        headerToolbar={{
          left: "today",
          center: "prev,next",
          right: "title",
        }}
        eventContent={renderEventContent}
      />
      {/* <AddEvent /> */}
      {isEventPopupOpen && <AddEvent onClose={handleCloseEventPopup} />}
      {isEventListOpen && <EventList onClose={handleCloseEventList} />}
    </div>
  );
}

// a custom render function
function renderEventContent() {
  return <div className="h-1"></div>;
}
