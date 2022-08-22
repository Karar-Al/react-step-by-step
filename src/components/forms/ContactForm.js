const ContactForm = () => {
  return (
    <form>
      <p>
        <label htmlFor="name">Your name: </label>
        <input name="name" id="name" />
      </p>
      <p>
        <label htmlFor="email">Your email: </label>
        <input name="email" id="email" />
      </p>
      <p>
        <label htmlFor="message">Your message: </label>
        <textarea name="message" id="message" />
      </p>
    </form>
  );
};

export default ContactForm;
