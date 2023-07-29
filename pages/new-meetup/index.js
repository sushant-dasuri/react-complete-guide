import Head from "next/head";
import { Fragment } from "react";
import NewMeetupForm from "../../components/meetups/NewMeetupForm";
function NewMeetupPage() {

    async function addMeetupHandler(enteredMeetupData) {
        const response = await fetch('/api/new-meetup', {
            method: 'POST',
            body: JSON.stringify(enteredMeetupData),
            headers: {
                'Content-Type': 'application/json'
            }
        });

        const data = await response.json();

        console.log(data);
    }

    return (
        <Fragment>
             <Head>
           <title>Add a New Meetup</title>
           <meta name="description" content="Add your own meetups and create amazing networkingg opportunities" />
         </Head>
         <NewMeetupForm onAddMeetup = {addMeetupHandler} />
        </Fragment>
       
    )
}

export default NewMeetupPage;