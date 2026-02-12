import "./App.css";

function App() {
  return (
    <div>
      <h1>ADEi University Digital Registration</h1>

      <form>

        {/* PERSONAL INFORMATION */}
        <h2>Personal Information</h2>
        <fieldset>
          <legend>Student Identity</legend>

          <div className="grid-4">
            <div>
              <label>First Name</label>
              <input type="text" required />
            </div>
            <div>
              <label>Middle Name</label>
              <input type="text" required />
            </div>
            <div>
              <label>Last Name</label>
              <input type="text" required />
            </div>
            <div>
              <label>Suffix</label>
              <input type="text" />
            </div>
          </div>

          <br />

          <div className="grid-3">
            <div>
              <label>Date of Birth</label>
              <input type="date" max="2026-12-31" required onKeyDown={e => e.preventDefault()} />
            </div>
            <div>
              <label>Gender</label>
              <select required>
                <option value="">Select</option>
                <option>Male</option>
                <option>Female</option>
                <option>Non-binary</option>
              </select>
            </div>
            <div>
              <label>Nationality</label>
              <select required>
                <option value="">Select</option>
                <option>Filipino</option>
                <option>American</option>
                <option>Other</option>
              </select>
            </div>
          </div>

          <br />

          <div className="grid-2">
            <div>
              <label>Religion</label>
              <input type="text" required />
            </div>
          </div>

        </fieldset>

        {/* CONTACT DETAILS */}
        <h2>Contact Details</h2>
        <fieldset>
          <legend>Communication Information</legend>

          <div className="grid-3">
            <div>
              <label>Email</label>
              <input type="email" required />
            </div>
            <div>
              <label>Mobile</label>
              <input type="tel" required />
            </div>
            <div>
              <label>Landline</label>
              <input type="tel" />
            </div>
          </div>

          <br />

          <div className="grid-4">
            <div>
              <label>Street</label>
              <input type="text" required />
            </div>
            <div>
              <label>Barangay</label>
              <input type="text" required />
            </div>
            <div>
              <label>City</label>
              <input type="text" required />
            </div>
            <div>
              <label>Province</label>
              <input type="text" required />
            </div>
          </div>

          <br />

          <div className="grid-2">
            <div>
              <label>Zip Code</label>
              <input type="text" required />
            </div>
            <div>
              <label>Preferred Contact Time</label>
              <input type="time" min="08:00" max="17:00" required />
            </div>
          </div>

        </fieldset>

        {/* ACADEMIC HISTORY */}
        <h2>Academic History</h2>
        <fieldset>
          <legend>Elementary School</legend>
          <div className="grid-3">
            <div>
              <label>Name</label>
              <input type="text" required />
            </div>
            <div>
              <label>Year Graduated</label>
              <input type="number" min="1900" max="2026" required />
            </div>
            <div>
              <label>Address</label>
              <input type="text" required />
            </div>
          </div>
        </fieldset>

        <fieldset>
          <legend>Junior High School</legend>
          <div className="grid-3">
            <div>
              <label>Name</label>
              <input type="text" required />
            </div>
            <div>
              <label>Year Graduated</label>
              <input type="number" min="1900" max="2026" required />
            </div>
            <div>
              <label>Address</label>
              <input type="text" required />
            </div>
          </div>
        </fieldset>

        <fieldset>
          <legend>Senior High School</legend>
          <div className="grid-4">
            <div>
              <label>Name</label>
              <input type="text" required />
            </div>
            <div>
              <label>Year Graduated</label>
              <input type="number" min="1900" max="2026" required />
            </div>
            <div>
              <label>Grade Average</label>
              <input type="text" required />
            </div>
            <div>
              <label>Address</label>
              <input type="text" required />
            </div>
          </div>
        </fieldset>

        {/* ENROLLMENT */}
        <h2>Enrollment Choices</h2>
        <fieldset>
          <legend>Program Selection</legend>

          <h3>Academic Level</h3>
          <div className="radio-group">
            <label><input type="radio" name="level" value="Undergraduate" required /> Undergraduate</label>
            <label><input type="radio" name="level" value="Graduate" required /> Graduate</label>
          </div>

          <h3>Semester</h3>
          <div className="radio-group">
            <label><input type="radio" name="semester" value="1st" required /> 1st</label>
            <label><input type="radio" name="semester" value="2nd" required /> 2nd</label>
          </div>

          <h3>Campus</h3>
          <div className="radio-group">
            <label><input type="radio" name="campus" value="Manila" required /> Manila</label>
            <label><input type="radio" name="campus" value="Quezon City" required /> Quezon City</label>
          </div>

          <h3>College Department</h3>
          <select required>
            <option value="">Select Department</option>
            <option>College of Engineering and Architecture</option>
            <option>College of Computer Studies</option>
            <option>College of Business Education</option>
            <option>College of Arts</option>
          </select>

          <h3>Degree Program</h3>
          <select required>
            <option value="">Select Degree Program</option>
            {/* Undergraduate Programs */}
            <optgroup label="College of Engineering and Architecture">
              <option>BS Architecture</option>
              <option>BS Chemical Engineering</option>
              <option>BS Civil Engineering</option>
              <option>BS Computer Engineering</option>
              <option>BS Electrical Engineering</option>
              <option>BS Electronics Engineering</option>
              <option>BS Industrial Engineering</option>
              <option>BS Mechanical Engineering</option>
            </optgroup>
            <optgroup label="College of Computer Studies">
              <option>BS Computer Science</option>
              <option>BS Data Science and Analytics</option>
              <option>BS Entertainment and Multimedia Computing</option>
              <option>BS Information Technology</option>
            </optgroup>
            <optgroup label="College of Business Education">
              <option>BS Accountancy</option>
              <option>BS Accounting Information System</option>
              <option>BS Business Administration - Financial Management</option>
              <option>BS Business Administration - Human Resource Management</option>
              <option>BS Business Administration - Logistics and Supply Chain Management</option>
              <option>BS Business Administration - Marketing Management</option>
            </optgroup>
            <optgroup label="College of Arts">
              <option>Bachelor of Arts in English Language</option>
              <option>Bachelor of Arts in Political Science</option>
            </optgroup>
            {/* Graduate Programs */}
            <optgroup label="Doctorate Degrees">
              <option>Doctor in Information Technology</option>
              <option>Doctor of Engineering (Computer Engineering)</option>
              <option>Doctor of Philosophy in Computer Science</option>
            </optgroup>
            <optgroup label="Master's Degrees">
              <option>Master in Information Systems</option>
              <option>Master in Information Technology</option>
              <option>Master in Logistics and Supply Chain Management</option>
              <option>Master of Engineering (Civil Engineering)</option>
              <option>Master of Engineering (Computer Engineering)</option>
              <option>Master of Engineering (Electrical Engineering)</option>
              <option>Master of Engineering (Electronics Engineering)</option>
              <option>Master of Engineering (Industrial Engineering)</option>
              <option>Master of Engineering (Mechanical Engineering)</option>
              <option>Master of Science in Computer Science</option>
            </optgroup>
          </select>

        </fieldset>

        <button type="submit">Submit Registration</button>

      </form>
    </div>
  );
}

export default App;
