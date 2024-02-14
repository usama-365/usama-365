import H2 from "@/components/typography/h2";
import P from "@/components/typography/p";

export default function About() {
  return (
    <section className="mx-auto mb-12 max-w-2xl px-4 text-justify text-muted-foreground">
      <H2 className="mx-auto w-max text-foreground">About Me</H2>
      <P>
        I leverage <strong>cutting-edge technology</strong> and a
        <em> design-focused approach</em> to create
        <em> user friendly, high performing</em> web, and mobile apps. Whether
        you&apos;re seeking an <em>engaging user interface</em> or a
        <em> robust backend solution</em>, I have the expertise to bring your
        concepts to life.
      </P>
      <P>
        My primary tools include <strong>JavaScript</strong>, particularly
        <strong> React</strong> and <strong>NextJS</strong>. I specialize in
        constructing <em>Single Page Applications</em> using <strong></strong>
        React, utilizing managed backends like <strong>Firebase</strong>,
        <strong> Supabase</strong>, or <strong>Appwrite</strong>. Additionally,
        I develop custom backends in <strong>Javascript</strong>,
        <strong> Python</strong>, or <strong>Go</strong>, personally ensuring
        they align with your specific requirements.
      </P>
      <P>
        Furthermore, I excel in developing <em>full-stack applications </em>
        using <strong>React </strong>
        with the <strong>MERN stack</strong> or <strong>NextJS</strong> with the
        <strong> T3 stack</strong>, incorporating technologies such as
        <strong> Tailwind</strong>, <strong>TypeScript</strong>, and
        <strong> tRPC</strong>. Armed with a diverse skill set,<span> a </span>
        <em className="underline">Computer Science degree</em>, and experience
        collaborating with various clients, I am well-equipped to tackle
        challenges and deliver optimal solutions tailored to your needs. Eager
        for new projects and collaborations, let&apos;s discuss yours and
        explore how I can contribute!
      </P>
    </section>
  );
}
