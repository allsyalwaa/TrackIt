import FullCalendar from "@fullcalendar/react";
import dayGridPlugin from "@fullcalendar/daygrid";
import "../../index.css";
import AddEvent from "../ui/AddEvent";

const events = [{ title: "Title", start: "2024-05-02" }];

export default function SecCalendar() {
  return (
    <div className="grid">
      <FullCalendar
        plugins={[dayGridPlugin]}
        initialView="dayGridMonth"
        weekends={true}
        events={events}
        headerToolbar={{
          left: "today",
          center: "prev,next",
          right: "title",
        }}
        eventContent={renderEventContent}
      />
      <AddEvent />
    </div>
  );
}

// a custom render function
function renderEventContent(eventInfo) {
  return (
    <>
      <div className="font-xs rounded  bg-secondary text-center text-white">
        <i>{eventInfo.event.title}</i>
        <b>{eventInfo.timeText}</b>
      </div>
    </>
  );
}
