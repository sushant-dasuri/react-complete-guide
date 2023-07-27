import MeetupDetail from "../../components/meetups/MeetupDetail"

function MeetupDetails() {
    return (
        <MeetupDetail 
        image="https://upload.wikimedia.org/wikipedia/commons/thumb/d/d3/Stadtbild_M%C3%BCnchen.jpg/1280px-Stadtbild_M%C3%BCnchen.jpg" 
        title="A First Meetup" 
        address="Some address 5, 12345 Some City" 
        description="This is a first meetup!"
         />
    )
}

export async function getStaticProps(context) {

   const meetupId =  context.params.meetupId;
    return {
        props: {
            meetupData: {
                image: "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d3/Stadtbild_M%C3%BCnchen.jpg/1280px-Stadtbild_M%C3%BCnchen.jpg", 
                id: meetupId,
                title:"A First Meetup",
                address:"Some address 5, 12345 Some City",
                description:"This is a first meetup!",
            }
        }
    }
}

export default MeetupDetails;