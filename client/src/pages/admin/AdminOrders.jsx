import { useEffect, useState } from 'react';
import { toast } from 'sonner';
import { orderAPI } from '../../services/api';
import { formatPrice, formatDate, getStatusColor } from '../../utils/helpers';
import LoadingSpinner from '../../components/LoadingSpinner';

const statuses = ['Pending', 'Processing', 'Shipped', 'Delivered', 'Cancelled'];

export default function AdminOrders() {
  const [orders, setOrders] = useState([]);
  const [loading, setLoading] = useState(true);

  const fetchOrders = () => {
    setLoading(true);
    orderAPI
      .getAll()
      .then((res) => setOrders(res.data))
      .catch(() => toast.error('Failed to load orders'))
      .finally(() => setLoading(false));
  };

  useEffect(() => {
    fetchOrders();
  }, []);

  const handleStatusChange = async (orderId, orderStatus) => {
    try {
      await orderAPI.updateStatus(orderId, { orderStatus });
      toast.success('Order status updated');
      fetchOrders();
    } catch (err) {
      toast.error(err.response?.data?.message || 'Failed to update status');
    }
  };

  if (loading) return <LoadingSpinner />;

  return (
    <div>
      <h1 className="text-2xl font-bold text-gray-900 mb-6">Manage Orders</h1>

      <div className="bg-white rounded-xl border border-gray-100 overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full text-sm">
            <thead>
              <tr className="bg-gray-50 border-b border-gray-100">
                <th className="text-left p-4 font-medium text-gray-500">Order</th>
                <th className="text-left p-4 font-medium text-gray-500">Customer</th>
                <th className="text-left p-4 font-medium text-gray-500">Date</th>
                <th className="text-left p-4 font-medium text-gray-500">Total</th>
                <th className="text-left p-4 font-medium text-gray-500">Payment</th>
                <th className="text-left p-4 font-medium text-gray-500">Status</th>
              </tr>
            </thead>
            <tbody>
              {orders.map((order) => (
                <tr key={order._id} className="border-b border-gray-50">
                  <td className="p-4 font-medium">{order.orderNumber}</td>
                  <td className="p-4">
                    <p>{order.userId?.fullName}</p>
                    <p className="text-xs text-gray-400">{order.userId?.email}</p>
                  </td>
                  <td className="p-4 text-gray-500">{formatDate(order.createdAt)}</td>
                  <td className="p-4 font-medium">{formatPrice(order.totalAmount)}</td>
                  <td className="p-4">
                    <span className={`px-2 py-1 rounded-full text-xs font-medium ${getStatusColor(order.paymentStatus)}`}>
                      {order.paymentStatus}
                    </span>
                  </td>
                  <td className="p-4">
                    <select
                      value={order.orderStatus}
                      onChange={(e) => handleStatusChange(order._id, e.target.value)}
                      className="px-3 py-1.5 border border-gray-300 rounded-lg text-sm focus:ring-2 focus:ring-primary-500 outline-none"
                    >
                      {statuses.map((s) => (
                        <option key={s} value={s}>{s}</option>
                      ))}
                    </select>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
          {!orders.length && (
            <p className="text-center text-gray-500 py-8">No orders found.</p>
          )}
        </div>
      </div>
    </div>
  );
}
