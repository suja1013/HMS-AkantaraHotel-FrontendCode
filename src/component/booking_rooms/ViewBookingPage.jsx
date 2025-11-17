import { useState } from 'react';
import ApiService from '../../service/APIService';

function ViewBookingPage() {
    const [confirmationCode, setConfirmationCode] = useState('');
    const [bookingDetails, setBookingDetails] = useState(null);
    const [error, setError] = useState(null);

    // Function to handle search for booking details
    const handleSearch = async () => {
        // Input must not be empty or has spaces
        if (!confirmationCode.trim()) {
            setError("Please enter the booking confirmation code");
            setTimeout(() => setError(''), 4000);
            return;
        }
        try {
            // Call API service to fetch booking by confirmation code
            const response = await ApiService.getBookingByConfirmationCode(confirmationCode);
            // Store booking details in state and clear any previous error
            setBookingDetails(response.booking);
            setError(null);
        }
        catch (error) {
            setError(error.response?.data?.message || error.message);
            setTimeout(() => setError(''), 4000);
        }
    };

    return (
        <div className="find-booking-page">
            <h2>View my Bookings</h2>

            {/* Input field to enter booking confirmation code */}
            <div className="search-container">
                <input
                    className="input-field"
                    required
                    type="text"
                    placeholder="Enter your booking confirmation code"
                    value={confirmationCode}
                    onChange={(e) => setConfirmationCode(e.target.value)} />
                <button className="search-button" onClick={handleSearch}>Search</button>
            </div>

            {/* Show error messages if any */}
            {error && <p style={{ color: 'red' }}>{error}</p>}

            {/* Display booking details if API returns data */}
            {bookingDetails && (
                <div className="booking-details">
                    <h3>Booking Details</h3>
                    <p>Confirmation Code: {bookingDetails.bookingConfirmationCode}</p>
                    <p>Check-in Date: {bookingDetails.checkInDate}</p>
                    <p>Check-out Date: {bookingDetails.checkOutDate}</p>
                    <p>Num Of Adults: {bookingDetails.adultCount}</p>
                    <p>Num Of Children: {bookingDetails.childCount}</p>
                    <hr />
                    <h3>User Details</h3>
                    <div>
                        <p> Name: {bookingDetails.user.name}</p>
                        <p> Email: {bookingDetails.user.email}</p>
                        <p> Phone Number: {bookingDetails.user.phoneNumber}</p>
                    </div>
                    <hr />
                    <h3>Room Details</h3>
                    <div>
                        <p> Room Type: {bookingDetails.room.roomType}</p>
                    </div>
                </div>
            )}
        </div>
    );
}

export default ViewBookingPage;