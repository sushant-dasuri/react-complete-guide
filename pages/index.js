import { MongoClient } from "mongodb";
import MeetupList from "@/components/meetups/MeetupList";


function HomePage(props) {

    return (
        <MeetupList meetups={props.meetups} />
    )
}

// export async function getServerSideProps(context) {

//   const req = context.req;
//   const res = context.res;


//   return {
//     props: {
//       meetups: DUMMY_MEETUPS,
//     }
//   }
// }

export async function getStaticProps() {
  
  //fetch data from api
  const client = await MongoClient.connect('mongodb+srv://sushant1184:ArOy330qbGLQueMn@cluster0.avdfjlp.mongodb.net/meetups?retryWrites=true&w=majority');
  const db = client.db();

  const meetupsCollection = db.collection('meetups');

  const meetups = await meetupsCollection.find().toArray();
  return {
    props: {
      meetups: meetups.map(meetup => ({
        title: meetup.title,
        address: meetup.address,
        image: meetup.image,
        id: meetup._id.toString(),
      })),
    },
    revalidate: 10,
  }
}

export default HomePage;