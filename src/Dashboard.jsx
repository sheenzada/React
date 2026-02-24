import React from 'react';
import { 
  LayoutDashboard, Package, Briefcase, Calendar, 
  Hotel, Car, Users, Star, MessageSquare, Settings, Search, Bell, ChevronRight 
} from 'lucide-react';

// --- Sub-Components (Status Badges) ---
const StatusBadge = ({ type }) => {
  const styles = {
    Confirmed: "bg-green-100 text-green-700",
    Pending: "bg-orange-100 text-orange-600",
    Cancelled: "bg-red-100 text-red-600",
    Uncalled: "bg-orange-100 text-orange-600",
    Handled: "bg-green-100 text-green-700",
    Unrealized: "bg-red-100 text-red-600",
  };
  return (
    <span className={`px-2 py-1 rounded text-[10px] font-bold uppercase ${styles[type] || "bg-gray-100 text-gray-500"}`}>
      {type}
    </span>
  );
};

// --- Sidebar Item ---
const NavItem = ({ icon, label, active = false, hasSub = false }) => (
  <div className={`flex items-center justify-between px-6 py-3 cursor-pointer transition-colors ${active ? 'bg-[#3182CE] text-white' : 'hover:bg-gray-700 text-gray-300'}`}>
    <div className="flex items-center gap-3">
      {icon}
      <span className="text-sm font-medium">{label}</span>
    </div>
    {hasSub && <ChevronRight size={14} />}
  </div>
);

// --- Stats Card ---
const StatCard = ({ icon, label, value, sub, color, unit }) => (
  <div className="bg-white p-5 rounded-xl border border-gray-100 shadow-sm flex items-start gap-4">
    <div className={`p-3 rounded-lg ${color}`}>
      {icon}
    </div>
    <div>
      <p className="text-gray-500 text-xs font-bold uppercase tracking-wider">{label}</p>
      <h3 className="text-2xl font-bold text-slate-800 mt-1">
        {value} <span className="text-xs font-normal text-gray-400 uppercase ml-1">{unit}</span>
      </h3>
      <p className="text-xs text-gray-400 mt-1">{sub}</p>
    </div>
  </div>
);

// --- MAIN DASHBOARD COMPONENT ---
const AdminDashboard = () => {
  return (
    <div className="flex min-h-screen bg-[#F7FAFC]">
      {/* 1. Sidebar */}
      <aside className="w-64 bg-[#2D3748] hidden md:block flex-shrink-0">
        <div className="p-6 flex items-center gap-3 border-b border-gray-700/50">
          <img src="https://ui-avatars.com/api/?name=Muhammad+Ali+Anjum&background=random" className="w-10 h-10 rounded-full border-2 border-white/20" alt="Admin" />
          <div>
            <p className="text-white font-bold text-sm leading-tight">Muhammad Ali Anjum</p>
            <p className="text-[10px] text-gray-400 uppercase tracking-widest mt-1">Admin</p>
          </div>
        </div>

        <nav className="mt-4">
          <NavItem icon={<LayoutDashboard size={18} />} label="Dashboard" active />
          <NavItem icon={<Package size={18} />} label="Packages" />
          <NavItem icon={<Briefcase size={18} />} label="Custom Packages" />
          <NavItem icon={<Calendar size={18} />} label="Bookings" />
          <NavItem icon={<Hotel size={18} />} label="Hotels" />
          <NavItem icon={<Car size={18} />} label="Cars" />
          <div className="my-4 border-t border-gray-700/30 mx-4" />
          <NavItem icon={<Hotel size={18} />} label="Hotel Partners" hasSub />
          <NavItem icon={<Car size={18} />} label="Car Partners" />
          <NavItem icon={<Users size={18} />} label="Users" />
          <NavItem icon={<Star size={18} />} label="Reviews" />
          <NavItem icon={<MessageSquare size={18} />} label="Contact Messages" hasSub />
          <NavItem icon={<Settings size={18} />} label="Settings" />
        </nav>
      </aside>

      {/* 2. Main Body */}
      <div className="flex-1 flex flex-col">
        {/* Header */}
        <header className="bg-white h-16 border-b flex items-center justify-between px-8 shadow-sm">
          <div className="flex items-center">
            <button className="md:hidden mr-4">☰</button>
            <h2 className="text-lg font-bold text-slate-700">Admin Dashboard</h2>
          </div>
          <div className="flex items-center gap-6">
            <div className="relative">
              <Search className="absolute left-3 top-2.5 text-gray-400" size={16} />
              <input type="text" placeholder="Search..." className="pl-10 pr-4 py-2 bg-gray-50 border border-gray-200 rounded-lg text-sm w-72 focus:ring-2 focus:ring-blue-400 outline-none" />
            </div>
            <div className="relative cursor-pointer">
              <Bell className="text-slate-600" size={20} />
              <span className="absolute -top-1.5 -right-1.5 bg-red-500 text-white text-[9px] font-bold rounded-full w-4 h-4 flex items-center justify-center">3</span>
            </div>
          </div>
        </header>

        {/* 3. Content Area */}
        <div className="p-8 overflow-y-auto">
          {/* Row 1: Stats Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <StatCard icon={<Users className="text-blue-500" size={24} />} label="Total Users" value="5,420" unit="Users" sub="Active Users" color="bg-blue-50" />
            <StatCard icon={<Calendar className="text-orange-500" size={24} />} label="Total Bookings" value="1,250" unit="Bookings" sub="This Month" color="bg-orange-50" />
            <StatCard icon={<Hotel className="text-green-500" size={24} />} label="Total Hotels" value="120" unit="Hotels" sub="Active Hotels" color="bg-green-50" />
            <StatCard icon={<Car className="text-indigo-500" size={24} />} label="Total Cars" value="75" unit="Cars" sub="Available Cars" color="bg-indigo-50" />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mt-6">
            <StatCard icon={<LayoutDashboard className="text-yellow-600" size={24} />} label="Total Packages" value="60" unit="Packages" sub="Active Packages" color="bg-yellow-50" />
            <StatCard icon={<Star className="text-orange-500" size={24} />} label="Pending Reviews" value="18" unit="Reviews" sub="New Reviews" color="bg-orange-50" />
            <StatCard icon={<Star className="text-purple-600" size={24} />} label="New Hotels" value="60" unit="Hotels" sub="New Hotels" color="bg-purple-50" />
            <StatCard icon={<div className="font-bold text-blue-600 text-lg">$</div>} label="Revenue (This Month)" value="$52,300" unit="Revenue" sub="This Month" color="bg-blue-50" />
          </div>

          {/* Row 2: Tables Section */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mt-10">
            {/* Table 1: Recent Bookings */}
            <div className="bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden">
              <div className="p-5 flex justify-between items-center border-b">
                <h4 className="font-bold text-slate-800">Recent Bookings</h4>
                <button className="text-blue-600 text-xs font-bold hover:underline">View All &gt;</button>
              </div>
              <div className="overflow-x-auto">
                <table className="w-full text-left">
                  <thead className="bg-gray-50 text-[11px] text-gray-500 uppercase font-bold tracking-wider">
                    <tr>
                      <th className="px-5 py-3">User</th>
                      <th className="px-5 py-3">Type</th>
                      <th className="px-5 py-3">Item</th>
                      <th className="px-5 py-3">Date</th>
                      <th className="px-5 py-3 text-right">Status</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-gray-100 text-[13px] text-gray-600">
                    <tr>
                      <td className="px-5 py-4 font-bold text-blue-600">Ahmed Khan</td>
                      <td className="px-5 py-4">Luxury Skardu Tour</td>
                      <td className="px-5 py-4 text-gray-400">Deluxe Hotel</td>
                      <td className="px-5 py-4">2024-05-12</td>
                      <td className="px-5 py-4 text-right"><StatusBadge type="Confirmed" /></td>
                    </tr>
                    <tr>
                      <td className="px-5 py-4 font-bold text-blue-600">Sarah Ali</td>
                      <td className="px-5 py-4">Mike Hotel Room</td>
                      <td className="px-5 py-4 text-gray-400">Luxury Car</td>
                      <td className="px-5 py-4">2024-05-10</td>
                      <td className="px-5 py-4 text-right"><StatusBadge type="Pending" /></td>
                    </tr>
                    <tr>
                      <td className="px-5 py-4 font-bold text-blue-600">John Doe</td>
                      <td className="px-5 py-4">Swat, Narah</td>
                      <td className="px-5 py-4 text-gray-400">Hiking Camping</td>
                      <td className="px-5 py-4">2024-05-16</td>
                      <td className="px-5 py-4 text-right"><StatusBadge type="Cancelled" /></td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>

            {/* Table 2: New Hotels */}
            <div className="bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden">
              <div className="p-5 flex justify-between items-center border-b">
                <h4 className="font-bold text-slate-800">New Hotels</h4>
                <button className="text-blue-600 text-xs font-bold hover:underline">View All &gt;</button>
              </div>
              <table className="w-full text-left">
                <thead className="bg-gray-50 text-[11px] text-gray-500 uppercase font-bold tracking-wider">
                  <tr>
                    <th className="px-5 py-3">Hotel Name</th>
                    <th className="px-5 py-3">City</th>
                    <th className="px-5 py-3">Owner</th>
                    <th className="px-5 py-3 text-right">Total Rooms</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-100 text-[13px]">
                  <tr>
                    <td className="px-5 py-4">Mountain View Resort</td>
                    <td className="px-5 py-4">Skardu</td>
                    <td className="px-5 py-4">Bilal Zaman</td>
                    <td className="px-5 py-4 text-right">80</td>
                  </tr>
                  <tr>
                    <td className="px-5 py-4">Deluxe Hunza Hotel</td>
                    <td className="px-5 py-4">Hunza</td>
                    <td className="px-5 py-4">Noor Ahmed</td>
                    <td className="px-5 py-4 text-right">60</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdminDashboard;