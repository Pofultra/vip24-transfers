import React, { useState } from 'react';
import { useTranslation } from '../hooks/useTranslation';
import BookingForm from '../components/booking/BookingForm';
import BookingConfirmation from '../components/booking/BookingConfirmation';

const Booking = () => {
  const [bookingStep, setBookingStep] = useState(1);
  const [bookingData, setBookingData] = useState({});

  return (
    <div className="min-h-screen bg-gray-50 pt-20">
      <div className="container-padding section-padding">
        {/* Booking content */}
      </div>
    </div>
  );
};

export default Booking;