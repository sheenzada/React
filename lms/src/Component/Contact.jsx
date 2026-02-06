// import { useState } from "react";


// const Contact = () => {np
//   const [ formData, setFormData]=
//     useState({
//         name:"",
//         email:"",
//         password:"",
//         gender:""
//     });

//     const handleChange = (e) => {
//         const{name, value} = e.target;
//         setFormData({
//             ...formData,
//             [name]:value
//         });
//     };

//     const handleSubmit = (e) => {
//         e.preventDefault();
//         console.log(formData);
//     };


//     const [name, setName] = useState('');
//     const [email, setEmail] = useState('');
//     const [password, setPassword] = useState('');
//     const [error, setError] = useState('');
    
//     const handleSubmits = (e) => {
//         e.preventDefault();
//         if(!name || !email || !password) {
//             setError('All fields required');
//             return;
//         }
//         console.log({name , email, password});
//         setError('');
        
//     };
//   return (
    
//     <section id="contact" className="py-20 bg-gray-800">
//       <div className="max-w-xl mx-auto text-center px-6">
//         <h2 className="text-3xl font-bold mb-6">Contact Me</h2>
//         <p className="text-gray-400 mb-6">
//           Email: sheenzada7@gmail.com
//         </p>
//         <button className="px-6 py-3 bg-blue-600 rounded-lg hover:bg-blue-700">
//           Say Hello
//         </button>
        
// <div className="max-w-md mx-auto p-6 bg-white rounded-lg shadow-lg">
//             <h2 className="text-2xl font-bold mb-4">Register</h2>
//             {error && <p className="text-red-500 mb-2">{error}</p>}
//             <form onSubmit={handleSubmit}>
//                 <input 
//                 type="text" 
//                 placeholder="Name"
//                 value={name}
//                 onChange={(e) => setName(e.target.value)}
//                 className="w-full p-2 mb-4 border rounded"
//                 />
//                 <input
//                  type="text"
//                  placeholder="email"
//                  value={email}
//                  onChange={(e) => setEmail(e.target.value)}
//                  className="w-full p-2 mb-4 border rounded"
//                 />
//                  <input
//                  type="password"
//                  placeholder="password"
//                  value={password}
//                  onChange={(e) => setPassword(e.target.value)}
//                  className="w-full p-2 mb-4 border rounded"
//                 />
//                 <button
//                  type="submit"
//                  className="w-full bg-blue-500 text-white p-2 rounded hover:bg-blue-600"
//                 >
//                     Register
//                 </button>
//             </form>
//         </div>
//         </div>
//     </section>
//   );
// };

// export default Contact;




import { useState } from "react";
import { FaGithub, FaLinkedin, FaBriefcase } from "react-icons/fa";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
  });

  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const validateForm = () => {
    if (!formData.name) return "Name is required";
    if (!formData.email) return "Email is required";
    if (!formData.password) return "Password is required";
    if (formData.password.length < 6)
      return "Password must be at least 6 characters";
    return "";
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const validationError = validateForm();
    if (validationError) {
      setError(validationError);
      setSuccess("");
      return;
    }

    setLoading(true);
    setError("");

    setTimeout(() => {
      console.log("Form Data:", formData);
      setSuccess("Thanks for reaching out 🚀");
      setLoading(false);
      setFormData({ name: "", email: "", password: "" });
    }, 1500);
  };

  return (
    // <section id="contact" className="min-h-screen  bg-gradient-to-br from-gray-900 via-gray-800 to-black flex items-center justify-center px-4">
     <section
  id="contact"
  className="py-16 bg-gradient-to-br from-gray-900 via-gray-800 to-black flex items-center justify-center px-4"
>

     <div className="w-full h-96 max-w-4xl grid md:grid-cols-2 gap-8 bg-white/90 backdrop-blur-lg p-8 rounded-2xl shadow-2xl">
        
        {/* LEFT CONTENT */}
        <div className="flex flex-col justify-center">
          <h2 className="text-4xl font-bold text-gray-800 mb-2">
            Let’s Work Together
          </h2>
          <p className="text-gray-600 mb-6">
            I’m open for freelance projects, collaborations, and full-time
            opportunities.
          </p>

          <p className="text-gray-700 mb-4">
            📧 <span className="font-semibold">sheenzada7@gmail.com</span>
          </p>

          {/* SOCIAL LINKS */}
          <div className="flex gap-4 mt-4">
            <a
              href="https://github.com/yourusername"
              target="_blank"
              rel="noreferrer"
              className="p-3 bg-gray-900 text-white rounded-full hover:scale-110 transition"
            >
              <FaGithub size={20} />
            </a>

            <a
              href="https://linkedin.com/in/yourusername"
              target="_blank"
              rel="noreferrer"
              className="p-3 bg-blue-600 text-white rounded-full hover:scale-110 transition"
            >
              <FaLinkedin size={20} />
            </a>

            <a
              href="https://www.fiverr.com/yourusername"
              target="_blank"
              rel="noreferrer"
              className="p-3 bg-green-600 text-white rounded-full hover:scale-110 transition"
            >
              <FaBriefcase size={20} />
            </a>
          </div>
        </div>

        {/* RIGHT FORM */}
        <div>
          <h3 className="text-2xl font-bold text-gray-800 mb-4">
            Register / Contact
          </h3>

          {error && (
            <p className="mb-3 text-sm text-red-600 bg-red-100 p-2 rounded">
              {error}
            </p>
          )}
          {success && (
            <p className="mb-3 text-sm text-green-600 bg-green-100 p-2 rounded">
              {success}
            </p>
          )}

          <form onSubmit={handleSubmit} className="space-y-4">
            <input
              type="text"
              name="name"
              placeholder="Your Name"
              value={formData.name}
              onChange={handleChange}
              className="w-full p-2 border rounded-lg focus:ring-2 focus:ring-blue-500 outline-none"
            />

            <input
              type="email"
              name="email"
              placeholder="Email Address"
              value={formData.email}
              onChange={handleChange}
              className="w-full p-2 border rounded-lg focus:ring-2 focus:ring-blue-500 outline-none"
            />

            <input
              type="password"
              name="password"
              placeholder="Password"
              value={formData.password}
              onChange={handleChange}
              className="w-full p-2 border rounded-lg focus:ring-2 focus:ring-blue-500 outline-none"
            />

            <button
              type="submit"
              disabled={loading}
              className="w-full py-2 bg-blue-600 text-white rounded-lg font-semibold hover:bg-blue-700 transition disabled:opacity-60"
            >
              {loading ? "Sending..." : "Submit"}
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
