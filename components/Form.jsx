"use client";

// Think of changing it to shadcn Form with Zod resolver
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";

import {
  User,
  MailIcon,
  ArrowRightIcon,
  MessageSquare,
  PencilLine,
} from "lucide-react";

const Form = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [subject, setSubject] = useState("");
  const [message, setMessage] = useState("");

  const submitForm = (event) => {
    event.preventDefault();
    window.location.href = `mailto:hello@piotrdev.com?subject=${encodeURIComponent(
      subject
    )}&body=${encodeURIComponent(name)}: ${encodeURIComponent(
      message
    )} from ${encodeURIComponent(email)}`;

    // Clear form fields
    setName("");
    setEmail("");
    setSubject("");
    setMessage("");
  };
  return (
    <form className="flex flex-col gap-y-4" onSubmit={submitForm}>
      <div className="relative flex items-center">
        <Input
          type="text"
          id="name"
          placeholder="Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
        />
        <User className="absolute right-6" size={20} />
      </div>
      <div className="relative flex items-center">
        <Input
          type="email"
          id="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
        <MailIcon className="absolute right-6" size={20} />
      </div>
      <div className="relative flex items-center">
        <Input
          type="text"
          id="subject"
          placeholder="Subject"
          value={subject}
          onChange={(e) => setSubject(e.target.value)}
          required
        />
        <PencilLine className="absolute right-6" size={20} />
      </div>
      <div className="relative flex items-center">
        <Textarea
          placeholder="Type Your Message Here."
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          required
        />
        <MessageSquare className="absolute top-4 right-6" size={20} />
      </div>
      <Button
        type="submit"
        className="flex items-center w-full md:max-w-[166px]"
      >
        Let's talk
        <ArrowRightIcon className="" size={20} />
      </Button>
    </form>
  );
};

export default Form;
