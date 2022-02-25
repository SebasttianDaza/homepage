import "./form.css";

function Form () {
    return (
      <form id="form">
        <label for="Email">Want us to contact you?</label>
        <div>
          <input
            type="email"
            name="email"
            id="Email"
            placeholder="Email"
          ></input>
          <button type="submit">Send</button>
        </div>
      </form>
    );
}

export default Form;