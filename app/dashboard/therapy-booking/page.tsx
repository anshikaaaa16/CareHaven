"use client";
import { useState } from "react";
const therapists = [
  {
    name: "Dr. Sweta",
    specialty: "Anxiety",
    reviews: [
      "Dr. Sweta is very understanding and helpful!",
      "Helped me manage my anxiety a lot.",
      "Great listener and very professional."
    ]
  },
  {
    name: "Dr. Rawat",
    specialty: "Depression",
    reviews: [
      "Dr. Rawat is compassionate and insightful.",
      "I feel much better after my sessions.",
      "Highly recommend for anyone struggling."
    ]
  },
  {
    name: "Dr. Kapoor",
    specialty: "Stress Management",
    reviews: [
      "Dr. Kapoor gave me practical tools for stress.",
      "Very patient and knowledgeable.",
      "Sessions are always positive."
    ]
  }
];

function isUnavailable(therapist: string, date: string) {
  // Mock: Dr. Rawat is unavailable on weekends
  if (therapist === "Dr. Rawat" && date) {
    const day = new Date(date).getDay();
    return day === 0 || day === 6; // Sunday or Saturday
  }
  return false;
}

export default function TherapyBookingPage() {
  const [date, setDate] = useState("");
  const [time, setTime] = useState("");
  const [therapist, setTherapist] = useState(therapists[0].name);
  const [success, setSuccess] = useState(false);
  const [reviewIndex, setReviewIndex] = useState(0);

  const selectedTherapist = therapists.find(t => t.name === therapist);
  const unavailable = isUnavailable(therapist, date);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!unavailable) setSuccess(true);
  };

  const handlePrevReview = () => {
    setReviewIndex(i => (i === 0 ? (selectedTherapist?.reviews.length ?? 1) - 1 : i - 1));
  };
  const handleNextReview = () => {
    setReviewIndex(i => (i === (selectedTherapist?.reviews.length ?? 1) - 1 ? 0 : i + 1));
  };

  const pastelCardColors = [
    "bg-pink-100 dark:bg-pink-300/20",
    "bg-blue-100 dark:bg-blue-300/20",
    "bg-green-100 dark:bg-green-300/20"
  ];
  const pastelReviewColors = [
    "bg-pink-50 dark:bg-pink-200/20",
    "bg-blue-50 dark:bg-blue-200/20",
    "bg-green-50 dark:bg-green-200/20"
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-purple-50 dark:from-zinc-900 dark:to-zinc-800 py-10 px-4 pt-24">
      <div className="max-w-3xl mx-auto">
        <div className="grid md:grid-cols-2 gap-8">
          {/* Therapist Cards */}
          <div className="space-y-8">
            {therapists.map((t, idx) => (
              <div
                key={t.name}
                className={`
                  rounded-2xl shadow-lg p-6
                  ${pastelCardColors[idx % pastelCardColors.length]}
                  border-2 ${therapist === t.name ? 'border-primary' : 'border-transparent'}
                  transition
                `}
              >
                <div className="flex items-center gap-4 mb-2">
                  <span className="text-3xl">💼</span>
                  <div>
                    <h3 className="font-bold text-lg text-black dark:text-white">{t.name}</h3>
                    <p className="text-primary">{t.specialty}</p>
                  </div>
                </div>
                {/* Review Carousel */}
                <div className="mt-4">
                  <div className="flex items-center gap-2">
                    <button type="button" onClick={handlePrevReview} className="text-xl px-2">{'‹'}</button>
                    <div className={`flex-1 text-sm italic rounded px-3 py-2 text-black dark:text-white ${pastelReviewColors[idx % pastelReviewColors.length]}`}>
                      {t.reviews[reviewIndex % t.reviews.length]}
                    </div>
                    <button type="button" onClick={handleNextReview} className="text-xl px-2">{'›'}</button>
                  </div>
                </div>
                <button
className={`
    mt-4 px-4 py-2 rounded 
    bg-primary dark:bg-white 
    text-white dark:text-black 
    font-semibold w-full 
    ${therapist === t.name ? '' : 'opacity-70'}
  `}
                    onClick={() => setTherapist(t.name)}
                  type="button"
                >
                  {therapist === t.name ? "Selected" : "Select"}
                </button>
                {t.name === "Dr. Rawat" && date && isUnavailable(t.name, date) && (
                  <div className="mt-2 text-red-600 font-medium">Unavailable on weekends</div>
                )}
              </div>
            ))}
          </div>
          {/* Booking Form */}
          <div className="bg-white/90 dark:bg-zinc-900/90 rounded-2xl shadow-xl p-8 flex flex-col justify-center">
            {/* Add heading above image */}
            <div className="text-center font-bold text-lg text-primary mb-2 dark:text-blue-200">CareHaven is with you</div>
            <div className="flex justify-center mb-4">
              <img
                src="/therapy-session.png"
                alt="Therapy session illustration"
                className="w-full h-48 object-cover rounded-xl shadow"
              />
            </div>
            <h1 className="text-2xl font-bold mb-6 text-blue-700 dark:text-blue-200">Book a Therapy Session</h1>
            <form onSubmit={handleSubmit} className="space-y-4 mb-6">
              <div>
                <label className="block mb-1 font-medium">Date</label>
                <input
                  type="date"
                  className="w-full p-2 rounded border border-primary/20 bg-blue-50 dark:bg-zinc-800 dark:text-white dark:placeholder:text-zinc-400"
                  value={date}
                  onChange={e => setDate(e.target.value)}
                  required
                  placeholder="dd-mm-yyyy"
                />
              </div>
              <div>
                <label className="block mb-1 font-medium">Time</label>
                <input
                  type="time"
                  className="w-full p-2 rounded border border-primary/20 bg-blue-50 dark:bg-zinc-800 dark:text-white dark:placeholder:text-zinc-400"
                  value={time}
                  onChange={e => setTime(e.target.value)}
                  required
                  placeholder="--:--"
                />
              </div>
              <button type="submit" className="px-6 py-2 rounded bg-gradient-to-r from-blue-500 to-purple-500 text-white font-semibold w-full shadow hover:from-blue-600 hover:to-purple-600 transition disabled:opacity-60" disabled={unavailable}>
                {unavailable ? "Unavailable" : "Book Session"}
              </button>
            </form>
            {success && <div className="p-4 bg-green-100 text-green-800 rounded">Your session has been booked!</div>}
          </div>
        </div>
      </div>
    </div>
  );
}