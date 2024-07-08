import FullCalendar from "@fullcalendar/react";
import dayGridPlugin from "@fullcalendar/daygrid";
import "../../index.css";
import AddEvent from "../ui/AddEvent";
import EventList from "../ui/EventList";
import interactionPlugin from "@fullcalendar/interaction"; // needed for dayClick
import { useEffect, useState } from "react";
import { getEvents } from "../../utils/FetchData";

export default function SecCalendar() {
  // const events = [
  //   { title: "Title", start: "2024-05-02", end: "2024-05-02" },
  //   { title: "Title", start: "2024-05-02", end: "2024-05-02" },
  //   { title: "Title", start: "2024-05-02", end: "2024-05-02" },
  //   { title: "Title", start: "2024-05-02", end: "2024-05-02" },
  //   { title: "Title", start: "2024-05-02", end: "2024-05-02" },
  //   { title: "Title", start: "2024-05-02", end: "2024-05-02" },
  //   { title: "Title", start: "2024-05-02", end: "2024-05-02" },
  //   { title: "Title", start: "2024-05-02", end: "2024-05-02" },
  //   { title: "Title", start: "2024-05-02", end: "2024-05-02" },
  // ];

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

  const [events, setEvents] = useState([]);

  useEffect(() => {
    console.log("mendapatkan Events");
    getEvents().then((data) => {
      setEvents(data);
    });
  }, []);

  return (
    <div className="h-full">
      <FullCalendar
        plugins={[dayGridPlugin, interactionPlugin]}
        initialView="dayGridMonth"
        weekends={true}
        events={events.map((event) => ({
          title: event.title,
          start: event.start,
          end: event.end,
        }))}
        editable={true}
        selectable={true}
        dateClick={(info) => {
          console.log(info.dateStr);
          let isThereEvent = false;
          for (let i = 0; i < events.length; i++) {
            if (
              info.dateStr === events[i].start ||
              info.dateStr === events[i].end
            ) {
              isThereEvent = true;
            }
          }

          if (isThereEvent) {
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
