import MeetupItem from './MeetupItem';
import classes from './MeetupList.module.css';

function MeetupList(props) {
  return (
    <ul className={classes.list}>
      {props.meetups.map((meetup) => (
        <MeetupItem
          key={meetup.id}
          id={meetup.id}
          image={meetup.imageKey}
          title={meetup.titleKey}
          address={meetup.addressKey}
          description={meetup.descriptionKey}
        />
      ))}
    </ul>
  );
}

export default MeetupList;