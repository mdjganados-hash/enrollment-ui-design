function App() {
  return (
    <div>
      <h1>ADEi University Digital Registration</h1>

      <form>

        <h2>Personal Information</h2>

        <fieldset>
          <legend>Student Identity</legend>

          <label>First Name</label>
          <input type="text" /><br /><br />

          <label>Middle Name</label>
          <input type="text" /><br /><br />

          <label>Last Name</label>
          <input type="text" /><br /><br />

          <label>Suffix</label>
          <input type="text" /><br /><br />

          <label>Date of Birth</label>
          <input 
            type="date" 
            onKeyDown={(e) => e.preventDefault()} 
          /><br /><br />

          <label>Gender</label>
          <select>
            <option>Male</option>
            <option>Female</option>
            <option>Non-binary</option>
          </select><br /><br />

          <label>Nationality</label>
          <select>
            <option>Filipino</option>
            <option>American</option>
            <option>Other</option>
          </select><br /><br />

          <label>Religion</label>
          <input type="text" />

        </fieldset>

        <br />
        <button type="submit">Submit Registration</button>

      </form>
    </div>
  );
}

export default App;
