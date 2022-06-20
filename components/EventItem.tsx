import { FC } from "react";
import Link from "next/link";
import Image from "next/image";
import styles from "@/styles/EventItem.module.css";
import { Event } from "../types/events";

interface EventProps {
  evt: Event;
}
const EventItem : FC<EventProps> = ({ evt }) => {
  return (
    <div className={styles.event}>
      <div className={styles.img}>
        <Image
          src={evt.attributes.image ? evt.attributes.image.data.attributes.formats.thumbnail.url : "/images/event-default.png"}
          width={170}
          height={100}
          alt='dj'
        />
      </div>
      <div className={styles.info}>
        <span>
          {evt.attributes.name} at {evt.attributes.time}
        </span>
        <h3>{evt.attributes.name}</h3>
      </div>
      <div className={styles.link}>
        <Link href={`/events/${evt.attributes.slug}`}>
            <a className='btn'>Details</a>
        </Link>
      </div>
    </div>
  );
};

export default EventItem;
