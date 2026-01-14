import { useState } from "react";
import { ChevronDown } from "lucide-react";

const faqData = [
    {
        question: "How do I book a service on AroundU?",
        answer:
            "You can book a service by selecting your location, choosing the service you need, and submitting a request. A verified professional will contact you shortly.",
    },
    {
        question: "Are the professionals verified?",
        answer:
            "Yes, all professionals on AroundU go through a verification process that includes identity checks and service quality reviews.",
    },
    {
        question: "How does payment work?",
        answer:
            "Payment details depend on the service provider. In most cases, payment is made after the service is completed.",
    },
    {
        question: "Can I cancel or reschedule a request?",
        answer:
            "Yes, you can cancel or reschedule your request before the service begins. Please check the cancellation policy for details.",
    },
    {
        question: "What if I face an issue with a service?",
        answer:
            "If you face any issues, please contact our support team through the Contact page, and we’ll be happy to help.",
    },
];

function FAQs() {
    const [openIndex, setOpenIndex] = useState(null);

    const toggleFAQ = (index) => {
        setOpenIndex(openIndex === index ? null : index);
    };

    return (
        <div className="min-h-screen bg-gray-50">
            <div className="bg-[#2f5349] text-white py-16 text-center px-4">
                <h1 className="text-3xl md:text-4xl font-semibold">
                    Frequently Asked Questions
                </h1>
                <p className="mt-3 text-gray-200 max-w-2xl mx-auto">
                    Quick answers to the most common questions about AroundU.
                </p>
            </div>
            <div className="max-w-4xl mx-auto px-6 py-16 space-y-4">
                {faqData.map((faq, index) => (
                    <div
                        key={index}
                        className="bg-white rounded-xl shadow-sm border"
                    >
                        <button
                            onClick={() => toggleFAQ(index)}
                            className="w-full flex justify-between items-center p-5 text-left"
                        >
                            <span className="font-medium text-gray-800">
                                {faq.question}
                            </span>
                            <ChevronDown
                                className={`transition-transform ${openIndex === index ? "rotate-180" : ""
                                    }`}
                            />
                        </button>

                        {openIndex === index && (
                            <div className="px-5 pb-5 text-gray-600 text-sm leading-relaxed">
                                {faq.answer}
                            </div>
                        )}
                    </div>
                ))}
            </div>
        </div>
    );
}

export default FAQs;