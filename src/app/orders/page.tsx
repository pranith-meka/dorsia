import React from "react";

const OrdersPage = () => {
  return (
    <div className="p-4 lg:px-20 xl:px-40">
      <table className="w-full border-separate border-spacing-3">
        <thead>
          <tr className="text-left">
            <th className="hidden md:block">Order ID</th>
            <th>Date</th>
            <th>Price</th>
            <th className="hidden md:block">Products</th>
            <th>Status</th>
          </tr>
        </thead>
        <tbody>
          <tr className="text-sm md:text-base bg-red-50">
            <td className="hidden md:block py-6 px-1">1237861238721</td>
            <td className="py-6 px-1">11.13.2023</td>
            <td className="py-6 px-1">42.90</td>
            <td className="hidden md:block py-6 px-1">Chicken Biryani (1), Rasmalai (2), Gulab Jamun (2)</td>
            <td className="py-6 px-1">In Progress</td>
          </tr>
          <tr className="text-sm md:text-base odd:bg-gray-100">
            <td className="hidden md:block py-6 px-1">1237861238721</td>
            <td className="py-6 px-1">11.12.2023</td>
            <td className="py-6 px-1">44.90</td>
            <td className="hidden md:block py-6 px-1">Aloo Tikka (2), Samosa (2), Veg Biryani (1)</td>
            <td className="py-6 px-1">Completed</td>
          </tr>
          <tr className="text-sm md:text-base odd:bg-gray-100">
            <td className="hidden md:block py-6 px-1">1237861238721</td>
            <td className="py-6 px-1">11.11.2023</td>
            <td className="py-6 px-1">32.90</td>
            <td className="hidden md:block py-6 px-1">Chicken Biryani (1), Rasmalai (2)</td>
            <td className="py-6 px-1">Completed</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default OrdersPage;