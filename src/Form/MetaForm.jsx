import { useState } from "react";


export function RegistrationForm () {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');
    
    const handleSubmit = (e) => {
        e.preventDefault();
        if(!name || !email || !password) {
            setError('All fields required');
            return;
        }
        console.log({name , email, password});
        setError('');
        
    };
    return (
        <div className="max-w-md mx-auto p-6 bg-white rounded-lg shadow-lg">
            <h2 className="text-2xl font-bold mb-4">Register</h2>
            {error && <p className="text-red-500 mb-2">{error}</p>}
            <form onSubmit={handleSubmit}>
                <input 
                type="text" 
                placeholder="Name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                className="w-full p-2 mb-4 border rounded"
                />
                <input
                 type="text"
                 placeholder="email"
                 value={email}
                 onChange={(e) => setEmail(e.target.value)}
                 className="w-full p-2 mb-4 border rounded"
                />
                 <input
                 type="password"
                 placeholder="password"
                 value={password}
                 onChange={(e) => setPassword(e.target.value)}
                 className="w-full p-2 mb-4 border rounded"
                />
                <button
                 type="submit"
                 className="w-full bg-blue-500 text-white p-2 rounded hover:bg-blue-600"
                >
                    Register
                </button>
            </form>
        </div>
    );
    
}

export default RegistrationForm;