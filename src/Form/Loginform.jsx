import { useState } from "react";

const  RegistrationForm = () => {
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
    return (
        <div className="min-h-screen flex items-center justify-center bg-gray-100">
            <form
            onSubmit={handleChange}
            className="bg-white p-8 rounded-xl shadow-lg w-full max-w-md"
            >
                <h2 className="text-2xl font-semibold text-center text-gray-800 mb-6 w-full bg-blue-600 text- py-2 rounded-lg font-medium hover:bg-blue-700 transition duration-300">Registration Form</h2>
            {/* {Name} */}
                <div className="mb-4">
                    <label className="block text-gray-700 mb-1">Name</label>
                    <input type="text" name="name" placeholder="Enter your name" value={formData} onChange={handleChange} className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500" />
                </div>
            {/* {Email} */}
                <div className="mb-4">
                    <label className="block text-gray-700 mb-1">Email</label>
                    <input type="email" name="eamil" placeholder="Enter Your email" value={formData.email} onChange={handleChange} className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"/>
                </div>
                {/* {password} */}
                <div className="mb-4">
                    <label className="block text-gray-700 mb-1">Password</label>
                    <input type="password" name="password" placeholder="Enter Your password" value={formData.password} onChange={handleChange} className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"/>
                </div>
                {/* {Gender} */}
                <div className="mb-4">
                    <label className="block text-gray-700 mb-1">Gender</label>
                    <select name="gender" value={formData.gender} onChange={handleChange} className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500" >
                        <option value="">Select Gender</option>
                        <option value="male">Male</option>
                        <option value="female">Female</option>
                    </select>
                </div>
                {/* {Button} */}
                <button type="submit" className="w-full bg-blue-600 text-white py-2 rounded-lg font-medium hover:bg-blue-700 transition duration-300">Register</button>
            </form>
        </div>
    );
}
export default RegistrationForm;