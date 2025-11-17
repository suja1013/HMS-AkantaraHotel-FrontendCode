import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import ApiService from '../../service/APIService';
import RoomResult from '../common/RoomResult';

const ManageRoomPage = () => {
  const [rooms, setRooms] = useState([]);
  const navigate = useNavigate();

  // Fetch all rooms when component mounts
  useEffect(() => {
    const fetchRooms = async () => {
      try {
        // Call API to get all rooms
        const response = await ApiService.getAllRooms();
        // Fallback to empty array if response has no rooms
        const allRooms = response.rooms || [];
        setRooms(allRooms);
      } catch (error) {
        console.error('Error fetching rooms:', error.message);
      }
    };

    fetchRooms();
  }, []);

  return (
    <div className='all-rooms'>
      <h2>Manage Rooms</h2>

      {/* Button to navigate to Add Room page */}
      <div>
        <button className='add-room-button' onClick={() => navigate('/admin/add-room')}>
          Add Room
        </button>
      </div>

      {/* Display list of rooms using RoomResult component */}
      {/* showEditButton=true allows RoomResult to show edit buttons for admin */}
      <RoomResult roomSearchResults={rooms} showEditButton={true} />
    </div>
  );
};

export default ManageRoomPage;
