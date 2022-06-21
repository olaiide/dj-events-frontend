import { FaPencilAlt, FaTimes } from "react-icons/fa";
import Layout from "@/components/Layout";
import { API_URL } from "@/config/index";
import { FC } from "react";
import { Event } from "../../types/events";
import styles from "@/styles/Event.module.css";
import Link from "next/link";
import Image from "next/image";

interface EventsProps {
  evt: Event;
}
const EventPage: FC<EventsProps> = ({ evt }) => {
  const deleteEventHandler = () => {
    console.log("deleted");
  };
  return (
    <Layout>
      <div className={styles.event}>
        <div className={styles.controls}>
          <Link href={`/events/edit/${evt.id}`}>
            <a>
              <FaPencilAlt />
              Edit event
            </a>
          </Link>
          <a href='#' onClick={deleteEventHandler} className={styles.delete}>
            <FaTimes /> Delete Event
          </a>
        </div>
        <span>
          {evt.attributes.date} at {evt.attributes.time}
        </span>
        <h1>{evt.attributes.name}</h1>
        {evt.attributes.image && (
          <div>
            <Image
              src={evt.attributes.image.data.attributes.formats.thumbnail.url}
              alt='dj-image'
              width={960}
              height={600}
            />
          </div>
        )}
        <h3>Performers :</h3>
        <p>{evt.attributes.performers}</p>
        <h3>Description :</h3>
        <p>{evt.attributes.description}</p>
        <h3>Venue : {evt.attributes.venue}</h3>
        <p>{evt.attributes.address}</p>
        <Link href='/events'>
          <a className={styles.back}>{" < "} Go Back</a>
        </Link>
      </div>
    </Layout>
  );
};

export default EventPage;
interface SlugProps {
  query: { slug: string };
}
export const getServerSideProps = async ({ query }: SlugProps) => {
  const { slug } = query;
  const res = await fetch(`${API_URL}/api/events/${slug}`);
  const events = await res.json();

  return {
    props: {
      evt: events[0],
    },
  };
};

// export const getStaticPaths = async () => {
//   const res = await fetch(`${API_URL}/events`);
//   const events = await res.json();

//   const paths = events.map((evt: Event) => ({
//     params: { slug: evt.slug },
//   }));

//   return {
//     paths,
//     fallback: true,
//   };
// };

// export const getStaticProps = async ({
//   params: { slug },
// }: {
//   params: { slug: string };
// }) => {
//   const res = await fetch(`${API_URL}/events?slug=${slug}`);
//   const events = await res.json();

//   return {
//     props: {
//       evt: events[0],
//     },
//     revalidate: 1,
//   };
// };
