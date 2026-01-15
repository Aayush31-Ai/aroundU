AroundU — Local Services Discovery & Booking Platform
Overview

AroundU is a modern web platform that helps users discover, compare, and book trusted local service professionals such as appliance repair, cleaning, tutoring, and home maintenance. The platform focuses on usability, performance, and mobile-first design while ensuring a smooth booking experience for both users and service providers.

The project was built as part of a hackathon with emphasis on real-world UX problems like service discovery, location awareness, responsive layouts, and scalable front-end architecture.

Problem Statement

Finding reliable local service professionals is often time-consuming and unstructured. Users struggle with:

Lack of trust and verification

Unclear pricing

Poor mobile experience

No centralized platform for multiple service categories

AroundU solves this by offering a clean, transparent, and location-aware service booking experience.

Key Features

Service discovery by category

Detailed service pages with pricing and inclusions

Verified service providers

Responsive mobile-first UI

Sticky desktop booking panel

Mobile bottom booking bar with modal

Similar services recommendation

Clean and consistent UX across devices

Tech Stack

Frontend

React

React Router

Tailwind CSS

Lucide Icons

State & Utilities

React Hooks

Custom data hooks

Toast notifications

Design Principles

Mobile-first layout

Clean component separation

Performance-friendly rendering

Accessibility-aware UI structure


Service Detail Page Highlights

Responsive hero image using aspect-ratio based layout

Clear provider information with trust indicators

Structured “What’s Included” section

Desktop sticky booking sidebar

Mobile booking modal to avoid layout clutter

Horizontal scroll based similar services section

Responsiveness Strategy

CSS Grid for layout stability

Aspect-ratio containers for images

Conditional rendering for desktop vs mobile booking flows

Fixed bottom booking bar only on mobile devices

No hover-dependent UX on mobile


How to Run Locally
git clone https://github.com/your-repo/aroundu.git
cd aroundu
npm install
npm run dev

Future Enhancements

User authentication

Reviews and ratings submission

Payment gateway integration

Provider onboarding dashboard

Real-time availability slots

Location-based service filtering


Team

Built by a single developer focusing on frontend architecture, UI/UX design, and performance optimization.

License

This project was created for hackathon and educational purposes.