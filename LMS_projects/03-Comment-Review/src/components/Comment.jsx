import { useState } from "react";

const Comment = () => {
  const [userName, setUserName] = useState("");
  const [userRating, setUserRating] = useState(0);
  const [userComment, setUserComment] = useState("");
  const [reviews, setReviews] = useState([]);

  const handleSubmit = () => {
    if (!userName || !userComment || userRating === 0) return;

    const reviewData = {
      name: userName,
      rating: userRating,
      comment: userComment,
      date: new Date().toLocaleDateString(),
    };

    setReviews((prev) => [reviewData, ...prev]);
    setUserName("");
    setUserRating(0);
    setUserComment("");
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-100 to-purple-100 flex flex-col items-center p-6 gap-6">

      {/* Form Card */}
      <div className="w-full max-w-md bg-white rounded-2xl shadow-xl p-6">
        <h2 className="text-2xl font-bold text-center mb-6 text-gray-800">
          Leave a Review ⭐
        </h2>

        {/* Username */}
        <input
          type="text"
          placeholder="Your name"
          value={userName}
          onChange={(e) => setUserName(e.target.value)}
          className="w-full px-4 py-2 mb-4 border rounded-lg focus:ring-2 focus:ring-blue-400 outline-none"
        />

        {/* Star Rating */}
        <div className="flex justify-center gap-2 mb-4">
          {[1, 2, 3, 4, 5].map((star) => (
            <span
              key={star}
              onClick={() => setUserRating(star)}
              className={`cursor-pointer text-4xl transition-transform hover:scale-110 ${
                star <= userRating ? "text-yellow-400" : "text-gray-300"
              }`}
            >
              ★
            </span>
          ))}
        </div>

        {/* Comment */}
        <textarea
          rows="4"
          placeholder="Write your review..."
          value={userComment}
          onChange={(e) => setUserComment(e.target.value)}
          className="w-full px-4 py-2 mb-4 border rounded-lg focus:ring-2 focus:ring-blue-400 outline-none resize-none"
        />

        {/* Button */}
        <button
          onClick={handleSubmit}
          className="w-full bg-blue-500 text-white py-2 rounded-xl font-semibold hover:bg-blue-600 transition"
        >
          Submit Review
        </button>
      </div>

      {/* Reviews */}
      <div className="w-full max-w-md">
        <h3 className="text-xl font-bold text-gray-800 mb-4 text-center">
          Customer Reviews
        </h3>

        {reviews.length === 0 && (
          <p className="text-center text-gray-500">
            No reviews yet. Be the first! 🚀
          </p>
        )}

        {reviews.map((review, index) => (
          <div
            key={index}
            className="bg-white rounded-xl shadow-md p-4 mb-4"
          >
            <div className="flex justify-between items-center mb-1">
              <h4 className="font-semibold text-gray-800">
                {review.name}
              </h4>
              <span className="text-sm text-gray-400">
                {review.date}
              </span>
            </div>

            {/* Stars */}
            <div className="text-yellow-400 mb-2">
              {"★".repeat(review.rating)}
              <span className="text-gray-300">
                {"★".repeat(5 - review.rating)}
              </span>
            </div>

            <p className="text-gray-600 break-words">
              {review.comment}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Comment;
