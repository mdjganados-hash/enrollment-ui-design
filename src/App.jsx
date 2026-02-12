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
              <input type="text" />
            </div>

            <div>
              <label>Middle Name</label>
              <input type="text" />
            </div>

            <div>
              <label>Last Name</label>
              <input type="text" />
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
              <input type="date" onKeyDown={(e) => e.preventDefault()} />
            </div>

            <div>
              <label>Gender</label>
              <select>
                <option>Male</option>
                <option>Female</option>
                <option>Non-binary</option>
              </select>
            </div>

            <div>
              <label>Nationality</label>
              <select>
                <option>Filipino</option>
                <option>American</option>
                <option>Other</option>
              </select>
            </div>
          </div>

          <br />

          <label>Religion</label>
          <input type="text" />

        </fieldset>

        {/* CONTACT DETAILS */}
        <h2>Contact Details</h2>
        <fieldset>
          <legend>Communication Information</legend>

          <div className="grid-3">
            <div>
              <label>Email</label>
              <input type="email" />
            </div>

            <div>
              <label>Mobile</label>
              <input type="tel" />
            </div>

            <div>
              <label>Landline</label>
              <input type="tel" />
            </div>
          </div>

        </fieldset>

        {/* ENROLLMENT */}
        <h2>Enrollment Choices</h2>
        <fieldset>
          <legend>Program Selection</legend>

          <h3>Academic Level</h3>
          <div className="radio-group">
            <label><input type="radio" name="level" /> Undergraduate</label>
            <label><input type="radio" name="level" /> Graduate</label>
          </div>

          <h3>Campus</h3>
          <div className="radio-group">
            <label><input type="radio" name="campus" /> Manila</label>
            <label><input type="radio" name="campus" /> Quezon City</label>
          </div>

        </fieldset>

        <br />
        <button type="submit">Submit Registration</button>

      </form>
    </div>
  );
}

export default App;
