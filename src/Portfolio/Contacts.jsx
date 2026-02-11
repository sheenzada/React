 

export default function Contacts () {
    return (
        <div className="container mx-auto p-8"> 
           <h1 className="text-3xl font-bold "> Get in toch</h1>
           <form className="mt-4">
            <input type="text" placeholder="Name" className="w-full p-2 border rounded" />
            <input type="email" placeholder="Email" className="w-full p-2 border rounded mt-2" />
            <textarea placeholder="Message" className="w-full p-2 border rounded mt-2"></textarea>
            <button className="bg-blue-500 text-white p-2 rounded mt-2">Send</button>

           </form>
        </div>

    );
}