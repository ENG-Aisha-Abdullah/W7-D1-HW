import React, { useState } from "react";
import Swal from "sweetalert2";

function JobForm() {
  const [username, setUsername] = useState("");
  const [date, setDate] = useState("");
  const [city, setCity] = useState("");
  const [salary, setSalary] = useState("");
  const [description, setDescription] = useState("");
  const [q1, setQ1] = useState("");
  const [q2, setQ2] = useState("");
  const [q3, setQ3] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    let userYear = new Date(date).getFullYear();
    let currentYear = new Date().getFullYear();
    let age = currentYear - userYear;

    if (username.length < 4) {
      return Swal.fire({
        text: "UserName is less than 4 characters",
        icon: "warning",
      });
    }

    if (age < 18 || age > 70) {
      return Swal.fire({
        text: "Only ages 18 to 70 can apply",
        icon: "warning",
      });
    }
  };

  return (
    <div className="bg-gray-200 h-screen w-full flex justify-center items-center">
      <form
        className="container bg-gray-100 shadow-2xl rounded-2xl w-[90%] p-8 flex flex-col gap-5"
        onSubmit={handleSubmit}
      >
        <h1 className="text-black text-3xl font-bold">Jop Register</h1>

        {/* userName */}
        <div className="flex gap-1 items-center">
          <label
            className="text-gray-500 font-bold text-xl min-w-30 block whitespace-nowrap"
            htmlFor="username"
          >
            User Name
          </label>
          <input
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            type="text"
            required
            placeholder="UserName"
            className="border-gray-500 border-1 p-1 px-2 rounded focus:outline-amber-300 w-100"
          />
        </div>

        {/* Date */}
        <div className="flex gap-1 items-center">
          <label
            className="text-gray-500 font-bold text-xl min-w-30 block whitespace-nowrap"
            htmlFor="date"
          >
            Birth Date
          </label>
          <input
            value={date}
            onChange={(e) => setDate(e.target.value)}
            type="date"
            required
            className="border-gray-500 border-1 p-1 px-2 rounded focus:outline-amber-300 w-100"
          />
        </div>

        {/* city */}
        <div className="flex gap-1 items-center">
          <label
            className="text-gray-500 font-bold text-xl min-w-30 block whitespace-nowrap"
            htmlFor="city"
          >
            City
          </label>
          <select
            value={city}
            onChange={(e) => setCity(e.target.value)}
            required
            className="border-gray-500 border-1 p-1 px-2 rounded focus:outline-amber-300 w-100"
          >
            <option value="">Select</option>
            <option value="Riyadh">Riyadh</option>
            <option value="ALKhobar">ALKhobar</option>
            <option value="Jeddah">Jeddah</option>
          </select>
        </div>

        {/* salary */}
        <div className="flex gap-1 items-center">
          <label
            className="text-gray-500 font-bold text-xl min-w-30 block whitespace-nowrap"
            htmlFor="salary"
          >
            Salary
          </label>
          <select
            value={salary}
            onChange={(e) => setSalary(e.target.value)}
            required
            className="border-gray-500 border-1 p-1 px-2 rounded focus:outline-amber-300 w-100"
          >
            <option value="">Select</option>
            <option value="salary-1">3000 to 8000</option>
            <option value="salary-2">9000 to 13000</option>
            <option value="salary-3">More than 15000</option>
          </select>
        </div>

        {/* description */}
        <div className="flex gap-1 items-center">
          <label
            className="text-gray-500 font-bold text-xl min-w-30 block whitespace-nowrap"
            htmlFor="description"
          >
            Job Description
          </label>
          <textarea
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            required
            placeholder="Job Description"
            className="border-gray-500 border-1 p-1 px-2 rounded focus:outline-amber-300 w-100 h-10"
          />
        </div>

        {/* Questions */}
        <div className="flex gap-1 flex-col">
          <label className="text-gray-500 font-bold text-xl min-w-30 block whitespace-nowrap">
            Questions:
          </label>

          <div className="flex gap-2">
            <label className="text-gray-500 font-bold text-xl min-w-70 block whitespace-nowrap">
              Are you currently employed?
            </label>
            <div className="min-w-30 items-center">
              <input
                value="yes"
                name="q1"
                onChange={(e) => setQ1(e.target.value)}
                type="radio"
              />
              <label className="px-2 text-gray-500 font-bold">Yes</label>
              <input
                value="no"
                name="q1"
                onChange={(e) => setQ1(e.target.value)}
                type="radio"
              />
              <label className="px-2 text-gray-500 font-bold">No</label>
            </div>
          </div>

          <div className="flex gap-2">
            <label className="text-gray-500 font-bold text-xl min-w-70 block whitespace-nowrap">
              Can you start immediately?
            </label>
            <div className="min-w-30 items-center">
              <input
                value="yes"
                name="q2"
                onChange={(e) => setQ2(e.target.value)}
                type="radio"
              />
              <label className="px-2 text-gray-500 font-bold">Yes</label>
              <input
                value="no"
                name="q2"
                onChange={(e) => setQ2(e.target.value)}
                type="radio"
              />
              <label className="px-2 text-gray-500 font-bold">No</label>
            </div>
          </div>

          <div className="flex gap-2">
            <label className="text-gray-500 font-bold text-xl min-w-70 block whitespace-nowrap">
              Are you willing to relocate?
            </label>
            <div className="min-w-30 items-center">
              <input
                value="yes"
                name="q3"
                onChange={(e) => setQ3(e.target.value)}
                type="radio"
              />
              <label className="px-2 text-gray-500 font-bold">Yes</label>
              <input
                value="no"
                name="q3"
                onChange={(e) => setQ3(e.target.value)}
                type="radio"
              />
              <label className="px-2 text-gray-500 font-bold">No</label>
            </div>
          </div>
        </div>

        <button
          type="submit"
          className="w-30 h-10 rounded-2xl bg-amber-200 text-gray-800 font-bold block"
        >
          Submit
        </button>
      </form>
    </div>
  );
}

export default JobForm;
