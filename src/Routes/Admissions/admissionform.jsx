import React, { useState } from 'react';

const AdmissionForm = () => {
    const [formData, setFormData] = useState({
        fullName: '',
        dob: '',
        gender: 'male',
        email: '',
        phone: '',
        address: '',
        parentName: '',
        parentPhone: ''
    });

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        // Add your form submission logic here
        console.log('Form submitted:', formData);
    };

    return (

        <div className="max-w-6xl mb-8 bg-[#DCDFB1] text-green-700 my-auto mt-24 mx-auto W p-8 rounded-md shadow-md">
            <h2 className="text-2xl text-center font-semibold mb-4">School Admission Form</h2>
            <form onSubmit={handleSubmit}>
                {/* ... (rest of the form fields) */}
                <form action="#" method="post">

            {/* <!-- Personal Information --> */}
            <div class="mb-4">
                <label for="fullName" class="block text-green-900 text-sm font-bold mb-2">Full Name</label>
                <input type="text" id="fullName" name="fullName" class="w-full px-3 py-2 border rounded-md focus:outline-none focus:border-blue-500" required/>
            </div>

            <div class="mb-4">
                <label for="dob" class="block text-green-900 text-sm font-bold mb-2">Date of Birth</label>
                <input type="date" id="dob" name="dob" class="w-full px-3 py-2 border rounded-md focus:outline-none focus:border-blue-500" required/>
            </div>

            <div class="mb-4">
                <label for="gender" class="block text-green-900 text-sm font-bold mb-2">Gender</label>
                <select id="gender" name="gender" class="w-full px-3 py-2 border rounded-md focus:outline-none focus:border-blue-500" required>
                    <option value="male">Select Gender</option>
                    <option value="male">Male</option>
                    <option value="female">Female</option>
                    <option value="other">Other</option>
                </select>
            </div>

            {/* <!-- Contact Information --> */}
            <div class="mb-4">
                <label for="email" class="block text-green-900 text-sm font-bold mb-2">Email Address</label>
                <input type="email" id="email" name="email" class="w-full px-3 py-2 border rounded-md focus:outline-none focus:border-blue-500" required/>
            </div>

            <div class="mb-4">
                <label for="phone" class="block text-green-900 text-sm font-bold mb-2">Phone Number</label>
                <input type="tel" id="phone" name="phone" class="w-full px-3 py-2 border rounded-md focus:outline-none focus:border-blue-500" required/>
            </div>

            {/* <!-- Address Information --> */}
            <div class="mb-4">
                <label for="address" class="block text-green-900 text-sm font-bold mb-2">Address</label>
                <textarea id="address" name="address" class="w-full px-3 py-2 border rounded-md focus:outline-none focus:border-blue-500" rows="3" required></textarea>
            </div>

            <div class="mb-4">
                <label for="gender" class="block text-green-900 text-sm font-bold mb-2">School level</label>
                <select id="gender" name="gender" class="w-full px-3 py-2 border rounded-md focus:outline-none focus:border-blue-500" required>
                    <option value="male">Select School level</option>
                    <option value="male">Madarsa</option>
                    

                    <option value="female">Primary</option>
                    <option value="other">Secondary School</option>
                    <option value="other">High School</option>
                </select>
            </div>


            {/* <!-- Parent/Guardian Information --> */}
            <div class="mb-4">
                <label for="parentName" class="block text-green-900 text-sm font-bold mb-2">Parent/Guardian Name</label>
                <input type="text" id="parentName" name="parentName" class="w-full px-3 py-2 border rounded-md focus:outline-none focus:border-blue-500" required/>
            </div>

            <div class="mb-4">
                <label for="parentPhone" class="block text-green-900 text-sm font-bold mb-2">Parent/Guardian Phone Number</label>
                <input type="tel" id="parentPhone" name="parentPhone" class="w-full px-3 py-2 border rounded-md focus:outline-none focus:border-blue-500" required/>
            </div>


            {/* <!-- Submit Button --> */}
            

        </form>
                <div className="mt-6 flex align-center justify-center">
                    <button
                        type="submit"
                        className=" bg-blue-500 text-white px-4 py-4  text-xl rounded-md hover:bg-blue-600 focus:outline-none focus:bg-blue-600"
                    >
                        Submit
                    </button>
                </div>
            </form>
        </div>
    );
};

export default AdmissionForm;
