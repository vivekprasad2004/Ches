// import { useRef, useState } from "react";
// import emailjs from "@emailjs/browser";

// function Contact() {
//   const formRef = useRef();
//   const [form, setForm] = useState({
//     name: "",
//     email: "",
//     message: "",
//   });

//   const [loading, setLoading] = useState(false);

//   const handleChange = (e) => {
//     const { name, value } = e.target;

//     setForm({
//       ...form,
//       [name]: value,
//     });
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     setLoading(true);

//     emailjs
//       .send(
//         "service_6p2qorf",
//         "template_xpmjy7j",

//         {
//           from_name: form.name,
//           to_name: "Archit Kulshrestha",
//           from_email: form.email,
//           to_email: "archit499kul@gmail.com",
//           message: form.message,
//         },
//         "hfiF5fVej3ITkNuKZ"
//       )
//       .then(
//         () => {
//           setLoading(false);
//           alert("Thank you. I will get back to you as soon as possible.");

//           setForm({
//             name: "",
//             email: "",
//             message: "",
//           });
//         },
//         (error) => {
//           setLoading(false);
//           console.error(error);

//           alert("Ahh, something went wrong. Please try again.");
//         }
//       );
//   };
//   return <></>;
// }

// export default Contact;
