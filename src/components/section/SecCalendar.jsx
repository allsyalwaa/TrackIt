import FullCalendar from "@fullcalendar/react";
import dayGridPlugin from "@fullcalendar/daygrid";
import "../../index.css";
import AddEvent from "../ui/addcontent/AddEvent";
import EventList from "../ui/EventList";
import interactionPlugin from "@fullcalendar/interaction";
import { useEffect, useState } from "react";
import { refreshEvents } from "../../utils/EventUtils";

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
    refreshEvents(setEvents);
  };

  useEffect(() => {
    refreshEvents(setEvents);
  }, []);

  const handleDateClick = (info) => {
    setSelectedDate(info.dateStr);
    let isThereEvent = events.some(
      (event) => info.dateStr === event.start || info.dateStr === event.end,
    );

    if (isThereEvent) {
      handleOpenEventList();
    } else {
      handleOpenEventPopup();
    }
  };

  const handleEventAdded = () => {
    refreshEvents(setEvents);
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
