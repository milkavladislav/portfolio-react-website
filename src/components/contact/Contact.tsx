import { FormEvent, ReactElement, useRef } from "react";
import { AiOutlineMail } from "react-icons/ai";
import { RiTelegramLine } from "react-icons/ri";
import SectionWrapper from "../common/SectionWrapper";
import "./Contact.css";
import emailjs from "@emailjs/browser";

interface IContactOption {
  title: string;
  subtitle: string;
  icon: ReactElement;
  href: string;
  linkText: string;
}

const contactOptions: IContactOption[] = [
  {
    title: "Email",
    subtitle: "milkavladislavdeveloper@gmail.com",
    href: "mailto:milkavladislavdeveloper@gmail.com",
    linkText: "Send a message",
    icon: <AiOutlineMail className="contact__option-icon" />,
  },
  {
    title: "Telegram",
    subtitle: "@milka_vlad",
    href: "https://t.me/milka_vlad",
    linkText: "Send a message",
    icon: <RiTelegramLine className="contact__option-icon" />,
  },
];

const Contact = () => {
  const form = useRef<HTMLFormElement | null>(null);

  const sendEmail = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (form && form.current) {
      emailjs
        .sendForm(
          "service_fev4ev9",
          "template_c8am5wt",
          form.current,
          "arX_Xt4-jSwhj5wUH"
        )
        .then(
          (result) => {
            console.log(result.text);
          },
          (error) => {
            console.log(error.text);
          }
        );
      (event.target as HTMLFormElement).reset();
    }
  };

  return (
    <SectionWrapper
      subtitle={"Get In Touch"}
      title={"Contact Me"}
      containerClass={"contact__container"}
      id={"contact"}
    >
      <>
        <div className="contact__options">
          {contactOptions.map(({ icon, title, subtitle, linkText, href }) => (
            <article className="contact__option">
              {icon}
              <h4>{title}</h4>
              <h5>{subtitle}</h5>
              <a href={href} target="_blank" rel="noreferrer">
                {linkText}
              </a>
            </article>
          ))}
        </div>
        <form ref={form} onSubmit={sendEmail}>
          <input
            type={"text"}
            required
            name="name"
            placeholder="Your Full Name"
          />
          <input
            type={"email"}
            required
            name="email"
            placeholder="Your Email"
          />
          <textarea
            required
            name="messages"
            placeholder="Your Messages"
            rows={7}
          />
          <button type="submit" className="btn btn-primary">
            Send Messages
          </button>
        </form>
      </>
    </SectionWrapper>
  );
};

export default Contact;
