import { useState } from "react";


const Contact = () => {
  const [ formData, setFormData]=
    useState({
        name:"",
        email:"",
        password:"",
        gender:""
    });

    const handleChange = (e) => {
        const{name, value} = e.target;
        setFormData({
            ...formData,
            [name]:value
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(formData);
    };


    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');
    
    const handleSubmits = (e) => {
        e.preventDefault();
        if(!name || !email || !password) {
            setError('All fields required');
            return;
        }
        console.log({name , email, password});
        setError('');
        
    };
  return (
    
    <section id="contact" className="py-20 bg-gray-800">
      <div className="max-w-xl mx-auto text-center px-6">
        <h2 className="text-3xl font-bold mb-6">Contact Me</h2>
        <p className="text-gray-400 mb-6">
          Email: sheenzada7@gmail.com
        </p>
        <button className="px-6 py-3 bg-blue-600 rounded-lg hover:bg-blue-700">
          Say Hello
        </button>
        
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
        </div>
    </section>
  );
};

export default Contact;




