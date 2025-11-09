import type { NextApiRequest, NextApiResponse } from "next";

// 1. CREIAMO UN "CONTRATTO" PER I DATI
// In base a come li usi, sembra che abbiano questa forma:
interface BookingDetailsProps {
  propertyName: string;
  startDate: string;
  totalNights: number;
  bookingFee: number;
  price: number;
}

// 2. USIAMO IL CONTRATTO AL POSTO DI "any"
const OrderSummary: React.FC<{ bookingDetails: BookingDetailsProps }> = ({ bookingDetails }) => (
  <div className="bg-white p-6 shadow-md rounded-lg">
    <h2 className="text-xl font-semibold">Review Order Details</h2>
    <div className="flex items-center mt-4">
      {/* NOTA: Questo <img /> causerà ancora un'AVVERTENZA (Warning).
        Possiamo sistemarlo DOPO che la build funziona.
      */}
      <img src="https://example.com/property.jpg" alt="Property" className="w-32 h-32 object-cover rounded-md" />
      <div className="ml-4">
        <h3 className="text-lg font-semibold">{bookingDetails.propertyName}</h3>
        <p className="text-sm text-gray-500">4.76 (345 reviews)</p>
        <p className="text-sm text-gray-500">{bookingDetails.startDate} • {bookingDetails.totalNights} Nights</p>
      </div>
    </div>

    {/* Price Breakdown */}
    <div className="mt-6">
      <div className="flex justify-between">
        <p>Booking Fee</p>
        <p>${bookingDetails.bookingFee}</p>
      </div>
      <div className="flex justify-between mt-2">
        <p>Subtotal</p>
        <p>${bookingDetails.price}</p>
      </div>
      <div className="flex justify-between mt-2 font-semibold">
        <p>Grand Total</p>
        <p>${bookingDetails.bookingFee + bookingDetails.price}</p>
      </div>
    </div>
  </div>
);

export default OrderSummary;