import { getEvents } from "./fetchdata/EventService";

export const formatDate = (dateStr) => {
  const date = new Date(dateStr);
  const year = date.getFullYear();
  const month = date.getMonth() + 1;
  const dt = date.getDate();
  return `${year}-${month < 10 ? "0" + month : month}-${dt < 10 ? "0" + dt : dt}`;
};

export const refreshEvents = (setEvents) => {
  getEvents().then((data) => {
    console.log(data);
    const processedEvents = data.map((event) => {
      return {
        ...event,
        start: formatDate(event.start),
        end: formatDate(event.end),
      };
    });
    setEvents(processedEvents);
  });
};
