import React, { useState } from 'react';
import decoheader from '/contactDeco.svg';
import { FaSpinner } from 'react-icons/fa';
import { db } from '../../firebase.js'; 
import { collection, addDoc } from 'firebase/firestore';

const background = "bg-backgroundColorPrimary";
const messageBackground = "#e0cfc8";

const header = "Web ➟ Firebase ➟ App\nTest Form ";
const messageHeader1 = "Drop us a message and say hey!\n";

const input1 = 'Name';
const input2 = 'Email Address';
const input3 = 'Phone (Optional)';
const input3List = 'Google, Friends or Family, Instagram, LinkedIn, Word of Mouth, Newsletter';
const options = input3List.split(',').map(option => option.trim());

const input4 = 'How did you hear about us?';
const input5 = 'Tell us about your project';

const terms = "By submitting this form I accept the ";
const privacyPolicyText = "Privacy Policy";

const button2 = "Send Message";
const successMessage = "Message sent successfully. We will aim to get back to you within 3 working days.";

function ContactForm() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    referral: '',
    summary: ''
  });
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevState) => ({ ...prevState, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    try {
      await addDoc(collection(db, 'contactMessages'), formData);
      setSuccess(true);
      setFormData({
        name: '',
        email: '',
        phone: '',
        referral: '',
        summary: ''
      });
    } catch (error) {
      console.error("Error adding document: ", error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className={`relative min-h-screen flex ${background}`}>
      <img src={decoheader} alt="Decoration" className="absolute top-[144px] left-1/2 transform -translate-x-1/2 z-10" />
      <div className="container max-w-screen-xl mx-auto relative flex flex-col mt-72 mb-24 w-4/5">
        <div className="text-3xl sm:text-5xl font-BG whitespace-pre-line text-center tracking-tighter leading-normal">
          {header}
        </div>

        <div className="border-b border-gray-400 w-full mt-12"></div>
        <div className="md:flex">
          <form className="sm:w-2/3 md:w-1/2 mt-12 text-sm mx-auto" onSubmit={handleSubmit}>
            <div className="text-3xl font-BG whitespace-pre-line tracking-tighter text-center md:text-left">
              {messageHeader1}
            </div>
            <div className="mt-12 grid sm:grid-cols-2 gap-6">
              <div>
                <input
                  type="text"
                  placeholder={input1}
                  className="border border-gray-400 w-full rounded-md px-4 py-3 focus:outline-none placeholder-textColorQuaternary"
                  style={{ background: messageBackground }}
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                />
              </div>
              <div>
                <input
                  type="email"
                  placeholder={input2}
                  className="border border-gray-400 w-full rounded-md px-4 py-3 focus:outline-none"
                  style={{ background: messageBackground }}
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                />
              </div>
              <div>
                <input
                  type="text"
                  placeholder={input3}
                  className="border border-gray-400 w-full rounded-md px-4 py-3 focus:outline-none"
                  style={{ background: messageBackground }}
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                />
              </div>
              <div className="border border-gray-400 w-full rounded-md px-4 py-3 focus:outline-none" style={{ background: messageBackground, position: 'relative' }}>
                <select
                  className="w-full bg-transparent outline-none "
                  name="referral"
                  value={formData.referral}
                  onChange={handleChange}
                >
                  <option value="" disabled hidden>{input4}</option>
                  {options.map((option, index) => (
                    <option key={index} value={option}>{option}</option>
                  ))}
                </select>
                <div className="dropdown-arrow"></div>
              </div>
            </div>
            <div className="mt-6">
              <textarea
                placeholder={input5}
                className="border border-gray-400 w-full rounded-md px-4 py-3 focus:outline-none"
                style={{ background: messageBackground }}
                rows={8} // Adjust the number of rows as needed
                name="summary"
                value={formData.summary}
                onChange={handleChange}
              ></textarea>
            </div>
            <div className="mt-6">
              <p className="text-sm text-textColorTertiary">
                {terms}
                <a href="/privacy-policy" target="_blank" rel="noopener noreferrer" className="underline">{privacyPolicyText}</a>
                {" of this site."}
              </p>
            </div>
            <button
              type="submit"
              className="mt-6 mb-2 bg-black text-white font-bold py-4 px-12 rounded-md button-shadow"
              disabled={loading}
            >
              {loading ? <FaSpinner className="animate-spin inline-block mr-2" /> : null}
              {loading ? 'Sending...' : button2}
            </button>
            {success && (
              <div className="mt-4 text-green-600">
                {successMessage}
              </div>
            )}
          </form>
        </div>
      </div>
    </div>
  );
}

export default ContactForm;
