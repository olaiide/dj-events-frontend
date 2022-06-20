//import type { NextPage } from "next";
import Link from "next/link";
import Layout from "@/components/Layout";
import { API_URL } from "@/config/index";
import { Event } from "../types/events";
import EventItem from "@/components/EventItem";
import { NextPage } from "next";
import axios from 'axios'
interface eventsProps {
  events: Event[];
}

const Home : NextPage<eventsProps> = ({ events }) => {
  console.log(events)
  return (
    <Layout>
      <h1>Upcoming Events</h1>
      {events.length === 0 && <h3>No events to show</h3>}
       {events.map((evt) => (
        <EventItem key={evt.id} evt={evt} />
      ))} 
      {events.length > 0 && (
        <Link href='/events'>
          <a className='btn-secondary'>View All Events</a>
        </Link>
      )}
    </Layout>
  );
};

export default Home;
export const getStaticProps = async () => {
  const events = await fetch(`${API_URL}/api/events?populate=*`, {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
    },
  })
    .then((response) => response.json())
    .then((data) => data.data);
  console.log(events)
  return {
    props: { events  },
    revalidate: 1,
  };
};
