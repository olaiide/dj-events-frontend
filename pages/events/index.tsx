import type { NextPage } from "next";
import Layout from "@/components/Layout";
import { API_URL } from "@/config/index";
import { Event } from "../../types/events";
import EventItem from "@/components/EventItem";
interface eventsProps {
  events : Event[]
}

const EventPage: NextPage<eventsProps> = ({ events }) => {
  console.log(events)
  return (
    <Layout>
      <h1>Events</h1>
       {events.length === 0 && <h3>No events to show</h3>}
        {events && events.map((evt) => (
        <EventItem key={evt.id} evt={evt} />
      ))} 
    </Layout>
  );
};

export default EventPage;
export const getStaticProps = async () => {
  const events = await fetch(`${API_URL}/api/events?populate=*`, {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
    },
  })
    .then((response) => response.json())
    .then((data) => data.data);
  return {
    props: { events },
    revalidate: 1,
  };
};
