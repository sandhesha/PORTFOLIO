import { useRef } from "react";
import emailjs from "@emailjs/browser";

function Contact() {
  const form = useRef<HTMLFormElement>(null);

  const sendEmail = (e: React.FormEvent) => {
    e.preventDefault();

    if (!form.current) return;

    emailjs
      .sendForm(
        "service_caxdeon",
        "_ejs-test-mail-service_",
        form.current,
        "fqDGSVE8u6MwlhfF"
      )
      .then(() => {
        alert("Message sent successfully!");
        form.current?.reset();
      })
      .catch((error) => {
        console.error(error);
        alert("Failed to send message.");
      });
  };

  return (
    <section
      id="contact"
      className="min-h-screen bg-slate-950 text-white flex items-center justify-center px-6"
    >
      <div className="w-full max-w-3xl">
        <h2 className="text-5xl font-bold text-center mb-10">
          Contact Me
        </h2>

        <form
          ref={form}
          onSubmit={sendEmail}
          className="space-y-6"
        >
          <input
            type="text"
            name="from_name"
            placeholder="Your Name"
            required
            className="w-full p-4 rounded-lg bg-slate-800 outline-none"
          />

          <input
            type="email"
            name="from_email"
            placeholder="Your Email"
            required
            className="w-full p-4 rounded-lg bg-slate-800 outline-none"
          />

          <textarea
            name="message"
            rows={6}
            placeholder="Your Message"
            required
            className="w-full p-4 rounded-lg bg-slate-800 outline-none"
          />

          <button
            type="submit"
            className="w-full bg-cyan-500 hover:bg-cyan-600 py-4 rounded-lg font-semibold transition"
          >
            Send Message
          </button>
        </form>
      </div>
    </section>
  );
}

export default Contact;