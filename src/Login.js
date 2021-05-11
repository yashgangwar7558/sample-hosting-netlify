import { useContext } from "react"
import { UserContext } from "./App"
import { firebase } from "./utils/Firebase-config"
import StyledFirebaseAuth from 'react-firebaseui/StyledFirebaseAuth';



export default function Login() {

    let { user, setUser } = useContext(UserContext)

    // Configure FirebaseUI.
    const uiConfig = {
        signInFlow: 'popup',
        signInSuccessUrl: '/',   // path to go if log in is successful
        signInOptions: [
            firebase.auth.GoogleAuthProvider.PROVIDER_ID,  // google authentication
            firebase.auth.PhoneAuthProvider.PROVIDER_ID,  // for phone authentication
            firebase.auth.EmailAuthProvider.PROVIDER_ID   // for email authentication
        ],
    };


    return (
        // we used a ternary operator Here ...agr user hai toh log button dikhao with onclick func to log out ...and agr user nhi hai(undefined) hai toh google log in ka config component pe aa jao
        <div
            style={{
                display: "flex",
                flexDirection: "column",
                width: "100vw",
                minHeight: "100vh",
                background: "#cccccc",
                alignItems: "center",
                justifyContent: "center",
            }}
        >
            <div
                style={{
                    display: "flex",
                    flexDirection: "row",
                    width: "300px",
                    padding: "100px",
                    background: "#ffffff",
                    borderRadius: "20px",
                    alignItems: "center",
                    justifyContent: "center",
                    background: "#222222",
                }}
            >
                {
                    user ? (undefined)   //kyunki logout button home page pe aaega
                        : (<StyledFirebaseAuth uiConfig={uiConfig} firebaseAuth={firebase.auth()} />)
                }
            </div>
        </div>
    )
}