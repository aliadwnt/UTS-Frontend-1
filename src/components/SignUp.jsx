// import React from "react";
// import styled from "styled-components";
// import card from "../assets/card.png";
// import signupBackground from "../assets/signupBackground.png";

// export default function SignUp() {
//   return (
//     <Section className="flex gap j-between">
//       <div className="content text-center">
//         <h2>Sign up without any bank account linking and card</h2>
//       </div>
//       <div className="image">
//         <img src={card} alt="card" />
//       </div>
//     </Section>
//   );
// }
// const Section = styled.section`
//   background-image: url(${signupBackground});
//   background-size: contain;
//   margin: 0;
//   margin-bottom: 8rem;
//   max-width: 100vw;
//   overflow: hidden;
//   .content {
//     padding: 8rem;
//     h2 {
//       font-size: 2.4rem;
//     }
//   }
//   .image {
//     img {
//       height: 100%;
//     }
//   }
//   @media screen and (min-width: 280px) and (max-width: 1080px) {
//     margin-bottom: 2rem;
//     .content {
//       padding: 2rem;
//       h2 {
//         font-size: 1.5rem;
//       }
//     }
//     .image {
//       display: none;
//     }
//   }
// `;
import React from 'react';
export default function Signup() {
    return (
            <form>
                <div className="mb-3 form-group position-relative">
                    <input type="text" className="form-control ps-5 p-3 bg-light rounded-0 box-shadowcs" id="FLname" placeholder="First & Last name" />
                    <i className="bi bi-person-fill position-absolute top-50 start-0 translate-middle ms-4 fs-4"></i>
                </div>
                <div className="mb-3 form-group position-relative">
                    <input type="email" className="form-control ps-5 p-3 bg-light rounded-0 box-shadowcs" id="Username" placeholder="Email" />
                    <i className="bi bi-envelope-fill position-absolute top-50 start-0 translate-middle ms-4 fs-4"></i>
                </div>
                <div className="mb-3 form-group position-relative">
                    <input type="password" className="form-control ps-5 p-3 bg-light rounded-0 box-shadowcs" id="Password" placeholder="Your password" />
                    <i className="bi bi-key-fill position-absolute top-50 start-0 translate-middle ms-4 fs-4"></i>
                </div>
                <div className="d-grid  justify-content-end">
                    <button type="submit" className="btn btn-block rounded text-capitalize btn-lg px-4 c-button">create an account</button>
                </div>
            </form>
    )
}
