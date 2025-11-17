import { useState, useEffect } from 'react';
import ApiService from '../../service/APIService';

const ProfilePage = () => {

  const [user, setUser] = useState(null);
  const [error, setError] = useState(null);

  // useEffect to fetch user profile and bookings when the component mounts
  useEffect(() => {
    const fetchUserProfile = async () => {
      try {
        // Fetch user profile info
        const response = await ApiService.getUserProfile();
        // Fetch user's bookings using the user ID
        const userPlusBookings = await ApiService.getUserBookings(response.user.id);
        // Store combined user info and bookings in state
        setUser(userPlusBookings.user)

      } 
      catch (error) {
        setError(error.response?.data?.message || error.message);
      }
    };

    fetchUserProfile();
  }, []);

  return (
    <div className="profile-page">
      {/* Display greeting if user data is available */}
      {user && <h2>Welcome, {user.name}</h2>}

      {/* Display error messages if any */}
      {error && <p className="error-message">{error}</p>}

      {/* Display user's personal info */}
      {user && (
        <div className="profile-details">
          <h3>User Info</h3>
          <p><strong>Name:</strong> {user.name}</p>
          <p><strong>Email:</strong> {user.email}</p>
          <p><strong>Phone Number:</strong> {user.phoneNumber}</p>
        </div>
      )}

      {/* Section for displaying user's booking history */}
      <div className="bookings-section">
        <h3>Booking History</h3>
        <div className="booking-container">
          {user && user.bookings.length > 0 ? (
            <ul className="booking-list">
              {user.bookings.map((booking) => (
                <div key={booking.id} className="booking-item">
                  <ul>
                    <li><strong>Booking Code:</strong> {booking.bookingConfirmationCode}</li>
                    <li><strong>Check-in Date:</strong> {booking.checkInDate}</li>
                    <li><strong>Check-out Date:</strong> {booking.checkOutDate}</li>
                    <li><strong>Total Guests:</strong> {booking.guestTotal}</li>
                    <li><strong>Room Type:</strong> {booking.room.roomType}</li>
                  </ul>
                </div>
              ))}
            </ul>
          ) : (
            <p>No bookings found</p>
          )}
        </div>

      </div>
    </div>
  );
};

export default ProfilePage;