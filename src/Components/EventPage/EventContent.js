import { useEffect } from "react";
import classes from "./EventContent.module.css";
import { BsPersonFill } from "react-icons/bs";
import { IoCalendarSharp } from "react-icons/io5";
import { useSelector, useDispatch } from "react-redux";
import { useEvents } from "../../hooks/useEvents";
import { addEvents } from "../../features/event/eventSlice";

const EventContent = () => {
  const { events } = useSelector((state) => state.event);
  const { eventsData, isError, isLoading } = useEvents();
  const dispatch = useDispatch();

  useEffect(() => {
    if (eventsData) {
      dispatch(addEvents(eventsData));
    }
  }, [eventsData, dispatch]);

  return (
    <div className={classes.container}>
      <div className={classes.headerBox}>
        <h1>
          UpComing <span>Events</span>
        </h1>
      </div>
      <div className={classes.eventsBox}>
        {isLoading ? (
          <h1>Loading events...</h1>
        ) : (
          events.map((event) => {
            return (
              <div key={event.eventImage} className={classes["event-box"]}>
                <div className={classes.imgBox}>
                  <img
                    className={classes.img}
                    src={event.eventImage}
                    alt={event.title}
                  />
                </div>
                <div className={classes["caption-Box"]}>
                  <div className={classes["eventName-Box"]}>
                    <span className={classes.span}>{event.title}</span>
                  </div>
                  <div className={classes["eventName-BoxSpeaker"]}>
                    <div className={classes.speakerBox}>
                      <BsPersonFill />
                      <p>{event.speaker}</p>
                    </div>
                    <div className={classes.dateBox}>
                      <div className={classes["date-Calendar"]}>
                        <IoCalendarSharp />
                        <p>{event.date}</p>
                      </div>
                      <button className={classes.registerButton}>
                        <a href={event.regUrl} target="_blank" rel="noreferrer">
                          Register
                        </a>
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            );
          })
        )}
      </div>
    </div>
  );
};

export default EventContent;
