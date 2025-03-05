import React, { useEffect, useState, useRef } from "react";
import "./styles/technologies.css";
import Modal from "./Modal";
import Bootstrap from "../assets/universe/bootstrap.svg";
import Tailwindcss from "../assets/universe/tailwind.svg";
import Django from "../assets/universe/django.svg";
import Fastapi from "../assets/universe/fastapi.svg";
import Figma from "../assets/universe/figma.svg";
import Flask from "../assets/universe/flask.svg";
import Github from "../assets/universe/github.svg";
import Sanity from "../assets/universe/sanity.svg";
import Reacts from "../assets/universe/react.svg";
import Tsql from "../assets/universe/tsql.svg";
import Nextjs from "../assets/universe/nextjs.svg";
import Jira from "../assets/universe/jira.svg";
import Pangea from "../animations/pangea/Pangea";

const Technologies = () => {
  const [techButton, setTechButton] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const containerRef1 = useRef(null);
  const containerRef2 = useRef(null);
  const containerRef3 = useRef(null);

  const [isVisible1, setIsVisible1] = useState(false);
  const [isVisible2, setIsVisible2] = useState(false);
  const [isVisible3, setIsVisible3] = useState(false);

  const callbackFunction = (entries) => {
    entries.forEach((entry) => {
      if (entry.target === containerRef1.current) {
        setIsVisible1(entry.isIntersecting);
      }
      if (entry.target === containerRef2.current) {
        setIsVisible2(entry.isIntersecting);
      }
      if (entry.target === containerRef3.current) {
        setIsVisible3(entry.isIntersecting);
      }
    });
  };

  const options = {
    root: null,
    rootMargin: "0px 0px 0px 0px",
    threshold: 1,
  };

  useEffect(() => {
    const observer = new IntersectionObserver(callbackFunction, options);
    if (containerRef1.current) observer.observe(containerRef1.current);
    if (containerRef2.current) observer.observe(containerRef2.current);
    if (containerRef3.current) observer.observe(containerRef3.current);

    return () => {
      if (containerRef1.current) observer.unobserve(containerRef1.current);
      if (containerRef2.current) observer.unobserve(containerRef2.current);
      if (containerRef3.current) observer.unobserve(containerRef3.current);
    };
  }, [containerRef1, containerRef2, containerRef3, options]);

  const techs = {
    bootstrap: {
      title: "What is Bootstrap?",
      description:
        "Bootstrap is a powerful and widely used open-source front-end framework that helps developers create responsive and mobile-first websites quickly. It provides a collection of pre-designed components, including grids, buttons, forms, and modals, along with a flexible CSS and JavaScript framework. With Bootstrap, developers can ensure cross-browser compatibility and streamline their workflow by leveraging its extensive documentation and customization options.",
      link: "https://getbootstrap.com/",
      icon: Bootstrap,
    },
    tailwind: {
      title: "What is Tailwind CSS?",
      description:
        "Tailwind CSS is a highly customizable, utility-first CSS framework that enables developers to build modern and responsive user interfaces efficiently. Instead of predefined components, it provides low-level utility classes that can be composed to create unique designs directly in HTML. Tailwind promotes a mobile-first approach, offers built-in responsiveness, and eliminates the need for writing custom CSS by allowing rapid styling through its extensive set of utility classes. With its flexibility, performance optimizations, and rich documentation, Tailwind CSS helps developers streamline their workflow and maintain design consistency across projects.",
      link: "https://tailwindcss.com/",
      icon: Tailwindcss,
    },
    react: {
      title: "What is React?",
      description:
        "React is a popular open-source JavaScript library for building user interfaces, primarily for single-page applications (SPAs). Developed by Facebook, it allows developers to create reusable UI components and manage the application's state efficiently using a virtual DOM. React follows a component-based architecture and supports features like hooks, props, and context API, making it a powerful tool for creating dynamic and interactive web applications.",
      link: "https://react.dev/",
      icon: Reacts,
    },
    nextjs: {
      title: "What is Next.js?",
      description:
        "Next.js is a powerful React framework that enables server-side rendering (SSR), static site generation (SSG), and client-side rendering (CSR) for building high-performance web applications. Developed by Vercel, it offers features like automatic routing, API routes, built-in image optimization, and improved SEO capabilities. With its hybrid rendering approach and support for full-stack development, Next.js is widely used for modern web applications, including e-commerce, blogs, and enterprise solutions.",
      link: "https://nextjs.org/",
      icon: Nextjs,
    },
    django: {
      title: "What is Django?",
      description:
        'Django is a high-level Python web framework that promotes rapid development and clean, pragmatic design. It follows the "batteries-included" philosophy, providing built-in features like authentication, database management with ORM, and an admin panel. Django follows the Model-View-Template (MVT) architecture, making it easy to develop scalable and secure web applications. With its strong community support and robust security features, Django is widely used for building everything from simple websites to complex web applications.',
      link: "https://www.django-rest-framework.org/",
      icon: Django,
    },
    flask: {
      title: "What is Flask?",
      description:
        "Flask is a lightweight and flexible web framework for Python, designed for building web applications and APIs. It follows a minimalistic approach, providing essential tools while allowing developers to extend functionality with third-party libraries. Flask is easy to learn, making it a great choice for beginners, yet powerful enough for complex applications. It supports Jinja2 templating, routing, and middleware integration, making web development simple and efficient.",
      link: "https://flask.palletsprojects.com/en/stable/",
      icon: Flask,
    },
    fastapi: {
      title: "What is FastAPI?",
      description:
        "FastAPI is a high-performance web framework for building APIs with Python. It supports asynchronous programming, making it fast and scalable. With automatic OpenAPI and Swagger documentation generation, it simplifies API development and testing. FastAPI also provides built-in validation using Python type hints, ensuring robust and efficient applications.",
      link: "https://fastapi.tiangolo.com/",
      icon: Fastapi,
    },
    sanity: {
      title: "What is Sanity?",
      description:
        "Sanity CMS is a headless content management system designed for flexibility and real-time collaboration. It allows developers to structure content using a customizable schema and provides an intuitive, customizable editing interface. With its GROQ query language and API-first approach, Sanity enables seamless integration with modern web frameworks like React, Next.js, and Vue. Its real-time capabilities and structured content approach make it a powerful choice for dynamic and scalable applications.",
      link: "https://www.sanity.io/",
      icon: Sanity,
    },
    figma: {
      title: "What is Figma?",
      description:
        "Figma is a cloud-based design and prototyping tool used for creating user interfaces, wireframes, and interactive prototypes. It enables real-time collaboration, allowing multiple users to work on the same project simultaneously. With its intuitive interface, powerful design components, and plugins, Figma streamlines the UI/UX design process. Its browser-based nature eliminates the need for installations, making it accessible from anywhere. Figma is widely used by designers and developers for creating modern, responsive, and visually appealing digital experiences.",
      link: "https://www.figma.com/",
      icon: Figma,
    },
    github: {
      title: "What is Git & GitHub?",
      description:
        "Git is a distributed version control system that helps developers track changes in their code, collaborate efficiently, and manage different versions of a project. It enables branching, merging, and reverting changes, making teamwork more organized and error-free.",
      description2:
        "GitHub, on the other hand, is a cloud-based platform built on Git, providing a collaborative environment for hosting, sharing, and managing code repositories. It offers features like pull requests, issue tracking, and CI/CD integrations, making it an essential tool for open-source projects and professional software development.",
      link: "https://github.com/",
      icon: Github,
    },
    jira: {
      title: "What is Jira?",
      description:
        "Jira is a powerful project management and issue-tracking tool developed by Atlassian, widely used in software development and agile workflows. It helps teams plan, track, and manage projects with features like Scrum and Kanban boards, customizable workflows, and detailed reporting. Jira enables efficient collaboration, bug tracking, and sprint management, making it an essential tool for teams following Agile and DevOps methodologies. Its integrations with various development tools streamline the software development lifecycle.",
      link: "https://www.atlassian.com/software/jira",
      icon: Jira,
    },
    tsql: {
      title: "What is T-SQL?",
      description:
        "Transact-SQL (T-SQL) is an extension of SQL (Structured Query Language) used primarily in Microsoft SQL Server. It includes procedural programming features like variables, loops, and conditionals, allowing for more complex database operations beyond standard SQL queries. T-SQL enables the creation of stored procedures, triggers, and functions, improving performance and security in database management. It is widely used for handling transactions, data manipulation, and administrative tasks in enterprise-level applications.",
      link: "https://learn.microsoft.com/en-us/sql/t-sql/tutorial-writing-transact-sql-statements?view=sql-server-ver16",
      icon: Tsql,
    },
  };

  const openModal = (tec) => {
    setTechButton(techs[tec]);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  return (
    <>
      <section
        id="skills"
        className="text-white px-6 lg:px-20 md:min-h-[110vh]"
      >
        <div className="hidden md:block -translate-x-20">
          <Pangea />
        </div>
        <Modal open={isModalOpen} tech={techButton} closeModal={closeModal} />
        <div className="flex flex-col justify-around max-md:min-h-[110vw] md:min-h-[110vh] my-10">
          <div>
            <div className="h-0 m-0 p-0" ref={containerRef1}></div>
            <div className={`${isVisible1 ? "textInAbove" : "textOutAbove"}`}>
              <h3 className="text-center text-4xl xs:text-5xl md:text-6xl lg:text-8xl font-playfair mb-9">
                Frontend Technologies
              </h3>
              <div className="flex flex-wrap justify-around text-xl md:text-3xl lg:text-4xl">
                <div className="text-center w-1/2 md:w-1/4">
                  <button
                    onClick={() => {
                      openModal("bootstrap");
                      setIsModalOpen((state) => !state);
                    }}
                    className="myButton2 cursor-pointer"
                  >
                    Bootstrap
                  </button>
                </div>
                <div className="text-center w-1/2 md:w-1/4">
                  <button
                    className="myButton2 cursor-pointer"
                    onClick={() => {
                      openModal("tailwind");
                      setIsModalOpen((state) => !state);
                    }}
                  >
                    Tailwind
                  </button>
                </div>
                <div className="text-center w-1/2 md:w-1/4">
                  <button
                    className="myButton2 cursor-pointer"
                    onClick={() => {
                      openModal("react");
                      setIsModalOpen((state) => !state);
                    }}
                  >
                    React
                  </button>
                </div>
                <div className="text-center w-1/2 md:w-1/4">
                  <button
                    className="myButton2 cursor-pointer"
                    onClick={() => {
                      openModal("nextjs");
                      setIsModalOpen((state) => !state);
                    }}
                  >
                    Next.JS
                  </button>
                </div>
              </div>
            </div>
          </div>
          <div>
            <div className="h-0 m-0 p-0" ref={containerRef2}></div>
            <div className={`${isVisible2 ? "textInAbove" : "textOutAbove"}`}>
              <h3 className="text-center text-4xl xs:text-5xl md:text-6xl lg:text-8xl font-playfair mb-9">
                Backend Technologies
              </h3>
              <div className="flex flex-wrap justify-around text-xl md:text-3xl lg:text-4xl">
                <div className="text-center w-1/2 md:w-1/4">
                  <button
                    className="myButton2 cursor-pointer"
                    onClick={() => {
                      openModal("django");
                      setIsModalOpen((state) => !state);
                    }}
                  >
                    Django
                  </button>
                </div>
                <div className="text-center w-1/2 md:w-1/4">
                  <button
                    className="myButton2 cursor-pointer"
                    onClick={() => {
                      openModal("flask");
                      setIsModalOpen((state) => !state);
                    }}
                  >
                    Flask
                  </button>
                </div>
                <div className="text-center w-1/2 md:w-1/4">
                  <button
                    className="myButton2 cursor-pointer"
                    onClick={() => {
                      openModal("fastapi");
                      setIsModalOpen((state) => !state);
                    }}
                  >
                    Fast API
                  </button>
                </div>
                <div className="text-center w-1/2 md:w-1/4">
                  <button
                    className="myButton2 cursor-pointer"
                    onClick={() => {
                      openModal("sanity");
                      setIsModalOpen((state) => !state);
                    }}
                  >
                    Sanity
                  </button>
                </div>
              </div>
            </div>
          </div>
          <div>
            <div className="h-0 m-0 p-0" ref={containerRef3}></div>
            <div className={`${isVisible3 ? "textInAbove" : "textOutAbove"}`}>
              <h3 className="text-center text-4xl xs:text-5xl md:text-6xl lg:text-7xl font-playfair mb-10">
                Tools & Platforms
              </h3>
              <div className="flex flex-wrap justify-around text-xl md:text-3xl lg:text-4xl">
                <div className="text-center w-1/2 md:w-1/4">
                  <button
                    className="myButton2 cursor-pointer"
                    onClick={() => {
                      openModal("figma");
                      setIsModalOpen((state) => !state);
                    }}
                  >
                    Figma
                  </button>
                </div>
                <div className="text-center w-1/2 md:w-1/4">
                  <button
                    className="myButton2 cursor-pointer"
                    onClick={() => {
                      openModal("github");
                      setIsModalOpen((state) => !state);
                    }}
                  >
                    Git & GitHub
                  </button>
                </div>
                <div className="text-center w-1/2 md:w-1/4">
                  <button
                    className="myButton2 cursor-pointer"
                    onClick={() => {
                      openModal("jira");
                      setIsModalOpen((state) => !state);
                    }}
                  >
                    Jira
                  </button>
                </div>
                <div className="text-center w-1/2 md:w-1/4">
                  <button
                    className="myButton2 cursor-pointer"
                    onClick={() => {
                      openModal("tsql");
                      setIsModalOpen((state) => !state);
                    }}
                  >
                    T-SQL
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <hr className="my-0 py-0 text-white opacity-25" />
    </>
  );
};

export default Technologies;
