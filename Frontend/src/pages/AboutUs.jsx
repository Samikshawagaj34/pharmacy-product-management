// import React from 'react'

// export default function AboutUs() {
//   return (
//     <div>AboutUs</div>
//   )
// }
import './AboutUs.css';
import React from 'react';
import vintageImg from '../assets/AboutUs/team.jpg';
import rugImg from '../assets/AboutUs/rug.jpeg';
import vaishImg from '../assets/AboutUs/vaish.jpg';
import samImg from '../assets/AboutUs/sam.jpg';
import { useNavigate } from "react-router-dom";


const teamData = [

    {
        id: 1,
        name: 'Vaishnavi Jagtap',
        role: 'Software Developer',
        bio: 'Builds Backend and Frontend.',
        img: vaishImg,// ✅ using imported image
    },
    {
        id: 2,
        name: 'Rugvedi Wankhade',
        role: 'Software Developer',
        bio: 'Builds Frontend and Backedn.',
        img: rugImg,
    },
    {
        id: 3,
        name: 'Samiksha Wagaj',
        role: 'Software Developer',
        bio: 'Builds Frontend and Backedn.',
        img: samImg,
    },
];

export default function AboutUs() {
    const navigate = useNavigate();

    return (
        <div className="about-us container py-5">
            {/* HERO */}
            <header className="row align-items-center mb-5">
                <div className="container my-5">
                    <div className="row align-items-center">

                        {/* Left Column – Text Section */}
                        <div className="col-lg-6 col-md-12 mb-4 mb-lg-0">
                            <h2 className="fw-bold mb-4 mt-n3 display-5 text-dark">About Us</h2>
                            <p className="text-muted">
                                At <strong>Wellness Forever Pharmacy Management</strong>, we’re redefining how pharmacies handle
                                their products, inventory, and operations. Our platform provides a seamless solution that helps
                                pharmacists, retailers, and healthcare providers manage medicines, track stock levels, and ensure
                                timely delivery — all from one intelligent dashboard.
                            </p>
                            <div className="mt-3">
                                <button
                                    className="btn btn-success me-2"
                                    onClick={() => navigate("/contact")}
                                >
                                    Contact us
                                </button>

                                <a href="#team" className="btn btn-outline-secondary text-dark">Meet the team</a>

                            </div>
                        </div>

                        {/* Right Column – Image Section */}
                        <div className="col-lg-6 col-md-12 text-center">
                            <img
                                src={vintageImg}
                                alt="About our pharmacy management platform"
                                className="img-fluid rounded-3 shadow-sm"
                                style={{ height: '350px', width: '100%', objectFit: 'cover' }}
                            />
                        </div>

                    </div>
                </div>
            </header>

            {/* MISSION / VISION / VALUES */}
            <section className="row text-center mb-5">
                <div className="col-md-4 mb-3">
                    <div className="card h-100 shadow-sm">
                        <div className="card-body">
                            <h5 className="card-title text-dark">Our Mission</h5>
                            <p className="card-text text-muted"> To empower pharmacies and healthcare providers with smart, digital tools that simplify medicine management, reduce errors, and enhance patient satisfaction.</p>
                        </div>
                    </div>
                </div>

                <div className="col-md-4 mb-3">
                    <div className="card h-100 shadow-sm">
                        <div className="card-body">
                            <h5 className="card-title text-dark">Our Vision</h5>
                            <p className="card-text text-muted">To build a connected healthcare ecosystem where every pharmacy — big or small — can operate efficiently, serve responsibly, and grow sustainably using data-driven insights.</p>
                        </div>
                    </div>
                </div>

                <div className="col-md-4 mb-3">
                    <div className="card h-100 shadow-sm">
                        <div className="card-body">
                            <h5 className="card-title text-dark">Our Values</h5>
                            <p className="card-text text-muted"> <strong>Integrity</strong> in every transaction,
                                <strong>Accuracy</strong> in every record,
                                <strong>Innovation</strong> in every feature, and
                                <strong>Care</strong> for every customer we serve.</p>
                        </div>
                    </div>
                </div>
            </section>

            {/* TEAM */}
            <section id="team" className="mb-5">
                <div className="d-flex justify-content-between align-items-center mb-3">
                    <div>
                        <h2 className="h4 mb-0 text-dark">Meet the team</h2>
                        <p className="text-muted mb-0">A small, cross-functional group of makers, engineers and designers.</p>
                    </div>
                    <div>
                        <button className="btn btn-sm btn-outline-success"
                            onClick={() => window.scrollTo({ top: document.body.scrollHeight, behavior: 'smooth' })}>Join us</button>
                    </div>
                </div>

                <div className="row g-3">
                    {teamData.map(member => (
                        <div key={member.id} className="col-12 col-sm-6 col-md-4">
                            <div className="card h-100 shadow-sm">
                                <div className="row g-0 align-items-center">
                                    <div className="col-auto p-3">
                                        <img src={member.img} alt={member.name} className="rounded-circle" style={{ width: '72px', height: '72px', objectFit: 'cover' }} onError={(e) => e.currentTarget.src = '/images/team/placeholder.png'} />
                                    </div>
                                    <div className="col">
                                        <div className="card-body py-3">
                                            <h5 className="card-title mb-1">{member.name}</h5>
                                            <p className="text-muted small mb-2">{member.role}</p>
                                            <p className="small text-muted mb-2">{member.bio}</p>
                                            <div>
                                                <a href={`mailto:${member.name.replace(/ /g, '.').toLowerCase()}@example.com`} className="btn btn-sm btn-outline-secondary me-2">Email</a>
                                                <a href="#" className="btn btn-sm btn-outline-secondary">LinkedIn</a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </section>
            <footer className="bg-success text-light text-center py-4 small">
                © {new Date().getFullYear()} Mini Project — Pharmacy Product Management System by
                Vaishnavi Jagtap, Rugvedi Wankhade & Samiksha Wagaj.
            </footer>

        </div>
    );

}
