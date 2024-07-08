import FullCalendar from "@fullcalendar/react";
import dayGridPlugin from "@fullcalendar/daygrid";
import "../../index.css";
import AddEvent from "../ui/AddEvent";
import EventList from "../ui/EventList";
import interactionPlugin from "@fullcalendar/interaction"; // needed for dayClick
import { useEffect, useState } from "react";
import { getEvents } from "../../utils/FetchData";

export default function SecCalendar() {
  const [isEventPopupOpen, setIsEventPopupOpen] = useState(false);
  const [isEventListOpen, setIsEventListOpen] = useState(false);
  const [events, setEvents] = useState([]);
  const [selectedDate, setSelectedDate] = useState(null);

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
    refreshEvents();
  };

  const formatDate = (dateStr) => {
    const date = new Date(dateStr);
    const year = date.getFullYear();
    const month = date.getMonth() + 1;
    const dt = date.getDate();
    return `${year}-${month < 10 ? "0" + month : month}-${dt < 10 ? "0" + dt : dt}`;
  };

  const refreshEvents = () => {
    console.log("mendapatkan Events");
    getEvents().then((data) => {
      const processedEvents = data.map((event) => {
        console.log(formatDate(event.start));
        return {
          ...event,
          start: formatDate(event.start),
          end: formatDate(event.end),
        };
      });
      setEvents(processedEvents);
    });
  };
  useEffect(() => {
    refreshEvents();
  }, []);

  const handleDateClick = (info) => {
    console.log(info.dateStr);
    setSelectedDate(info.dateStr);
    let isThereEvent = false;
    for (let i = 0; i < events.length; i++) {
      if (info.dateStr === events[i].start || info.dateStr === events[i].end) {
        isThereEvent = true;
      }
    }

    if (isThereEvent) {
      handleOpenEventList();
    } else {
      handleOpenEventPopup();
    }
  };

  const handleEventAdded = () => {
    refreshEvents();
    if (isEventListOpen) {
      setIsEventListOpen(true);
    }
  };

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
        dateClick={handleDateClick}
        height="100%"
        headerToolbar={{
          left: "today",
          center: "prev,next",
          right: "title",
        }}
        eventContent={renderEventContent}
      />
      {isEventPopupOpen && (
        <AddEvent
          onClose={handleCloseEventPopup}
          selectedDate={selectedDate}
          onEventAdded={handleEventAdded}
        />
      )}
      {isEventListOpen && (
        <EventList
          onClose={handleCloseEventList}
          selectedDate={selectedDate}
          onEventAdded={handleEventAdded}
        />
      )}
    </div>
  );
}

function renderEventContent() {
  return <div className="h-1"></div>;
}
