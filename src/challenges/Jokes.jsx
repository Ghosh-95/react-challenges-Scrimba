import { jokesData } from './../utilities/data'

function Jokes({ props: { setup, punchline } }) {


    return (
        <>
            <p className='setup'>{setup}</p>
            <p className='punchline'>{punchline}</p>
        </>
    )
}

export default function JokesApp() {
    return (
        <div style={{
            display: 'flex',
            flexDirection: 'column',
            gap: '1rem'
        }}>
            {
                jokesData.map(data => (<Jokes props={data} key={data.setup + data.punchline} />))
            }
        </div>
    )
}