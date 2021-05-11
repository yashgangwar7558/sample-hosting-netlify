import { useContext } from "react"
import { UserContext } from "./App"
import { firebase } from "./utils/Firebase-config"
import StyledFirebaseAuth from 'react-firebaseui/StyledFirebaseAuth';
import { useHistory } from 'react-router';
import axios from "axios";



export default function Home() {

    let { user, setUser } = useContext(UserContext)
    const history = useHistory()

    return (
        <div>
            {/* if user is there display its name and email from the user object */}
            <h1>{user ? user.displayName : "Login to get user details"}</h1>
            <h1>{user ? user.email : "Login to get user details"}</h1>
            <h1>{user ? user.phoneNumber : "Login to get user details"}</h1>
            <h1>{user ? user.uid : "Login to get user details"}</h1>
            {
                user ? (<button onClick = {() => {
                    axios.get("https://mysterious-inlet-98914.herokuapp.com/alive") // this is ur server link deployed on heroku /alive
                    .then((response) => {
                        console.log(response);
                    })
                    .catch((error) => {
                        console.log(error);
                    })
                }}>I am alive</button>)
                : (undefined)
            }
            {
                user ? (<button onClick={() => firebase.auth().signOut()}>Log out</button>)
                    : (<button onClick={() => history.push("/login")}>Log in</button>)
            }
            {/* agr user hai toh logout button aaega home pe...nd age user nhi hai toh logout button aaega jo usse /login pe le jayega   */}
        </div>
    )
}