import { useState } from "react";

const Star = ({ filled, onClick }) => (
  <svg
    onClick={onClick}
    className={`w-6 h-6 cursor-pointer ${
      filled ? "text-yellow-400" : "text-gray-300"
    } hover:scale-110 transition`}
    fill="currentColor"
    viewBox="0 0 20 20"
  >
    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.538 1.118l-2.8-2.034a1 1 0 00-1.176 0l-2.8 2.034c-.783.57-1.838-.197-1.538-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.462a1 1 0 00.95-.69l1.07-3.292z" />
  </svg>
);

const Reviews = () => {
  const [reviews, setReviews] = useState([
    {
      name: "Rahul Sharma",
      rating: 5,
      comment: "Excellent service and very professional.",
      date: "2 days ago",
    },
  ]);

  const [name, setName] = useState("");
  const [comment, setComment] = useState("");
  const [rating, setRating] = useState(0);

  const submitReview = () => {
    if (!name || !comment || rating === 0) return;

    setReviews([
      {
        name,
        rating,
        comment,
        date: "Just now",
      },
      ...reviews,
    ]);

    setName("");
    setComment("");
    setRating(0);
  };

  return (
    <section className="bg-gradient-to-br from-indigo-50 to-white py-16 px-4">
      <div className="max-w-4xl mx-auto">

        <h2 className="text-3xl font-bold text-center mb-10">
          Customer Reviews
        </h2>

        {/* Review Form */}
        <div className="bg-white rounded-2xl p-6 shadow-md mb-10">
          <h3 className="text-xl font-semibold mb-4">Add a Review</h3>

          <input
            type="text"
            placeholder="Your name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="w-full mb-3 px-4 py-2 border rounded-lg focus:ring-2 focus:ring-indigo-500 outline-none"
          />

          <textarea
            placeholder="Write your experience..."
            value={comment}
            onChange={(e) => setComment(e.target.value)}
            className="w-full mb-3 px-4 py-2 border rounded-lg focus:ring-2 focus:ring-indigo-500 outline-none"
          />

          <div className="flex items-center gap-2 mb-4">
            {[1, 2, 3, 4, 5].map((n) => (
              <Star
                key={n}
                filled={n <= rating}
                onClick={() => setRating(n)}
              />
            ))}
          </div>

          <button
            onClick={submitReview}
            className="bg-gradient-to-r from-indigo-600 to-purple-600 text-white
                       px-6 py-2 rounded-xl font-semibold hover:opacity-90 transition"
          >
            Submit Review
          </button>
        </div>

        {/* Reviews List */}
        <div className="grid gap-6 md:grid-cols-2">
          {reviews.map((r, i) => (
            <div
              key={i}
              className="bg-white/80 backdrop-blur rounded-2xl p-6 border
                         shadow-sm hover:shadow-xl hover:-translate-y-1 transition"
            >
              <div className="flex justify-between items-center">
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 rounded-full bg-gradient-to-tr
                                  from-indigo-500 to-purple-500
                                  flex items-center justify-center
                                  text-white font-bold text-lg">
                    {r.name[0]}
                  </div>
                  <div>
                    <p className="font-semibold">{r.name}</p>
                    <p className="text-sm text-gray-500">{r.date}</p>
                  </div>
                </div>

                <div className="flex">
                  {[1, 2, 3, 4, 5].map((n) => (
                    <Star key={n} filled={n <= r.rating} />
                  ))}
                </div>
              </div>

              <p className="mt-4 text-gray-700">{r.comment}</p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default Reviews;
