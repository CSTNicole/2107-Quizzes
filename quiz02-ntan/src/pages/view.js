import { getSignIns } from '../backend/database';


export default function View(props) {
    return (
        <div>
            { 
                props.signins.map(
                    (signin) => {
                        return (
                            <div key={signin.id }>
                                <h1>Userame: { signin.username }</h1>
                                <h1>Password: { signin.password }</h1>
                            </div>
                        )
                    }
                )
            }
        </div>
    );
};

export async function getServerSideProps() {
    const data = await getSignIns();

    console.log('data', data)

    const signin = data.map(
        (signin) => {
            return {
                id: signin._id.toString(),
                username: signin.name,
                password: signin.pattern,
            }
        }
    )

    console.log('signins', signin)
  
    return {
        props : {
            signin
        }
    };
};