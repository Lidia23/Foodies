'use client'; //catch error also in the client side
export default function Error({error}){
    return(
        <main className="error">
            <h1>An error occured!</h1>
            <p>Failed to create meal data.</p>
        </main>
    )
}