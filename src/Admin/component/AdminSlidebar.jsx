import React from 'react'
import { LuLayoutDashboard } from "react-icons/lu";
import { GiKnifeFork } from "react-icons/gi";
import { HiOutlineClipboardList } from "react-icons/hi";
import { FiUsers } from "react-icons/fi";
import { MdOutlineHistory } from "react-icons/md";
import { Link } from 'react-router-dom';
import { IoIosLogOut } from "react-icons/io";

function AdminSlidebar() {
    return (
        <>
            <div className='h-full shadow-md relative z-20 shadow-gray-500  md:flex flex-col hidden '>
                <div className='flex h-20 justify-center items-center border-b border-border'>
                    <span className='text-2xl font-bold'>Tasty</span>
                    <span className='text-2xl font-bold text-orange-500 gradient-text'>Bites</span>
                    <span className='text-xl font-bold ms-3' >Admin</span>
                </div >
                <div className='border-b border-border p-4'>
                    <div className='flex items-center gap-3 '>
                        <div className='flex h-15 items-center justify-center rounded-full bg-orange-500 w-15 text-3xl text-white-foreground '>
                            A
                        </div>
                        <div>
                            <p className='font-medium text-xl'>Admin User</p>
                            <p className='text-sm text-muted-foreground'>admin@tastybites.com</p>
                        </div>
                        <div>

                        </div>

                    </div>
                </div>
                <div className='flex-1 space-y-1 p-4'>
                    <Link to={'/admindashboard'}> <button className='flex w-full items-center gap-3 rounded-xl px-4 py-3 text-left text-lg font-meduim hover:bg-orange-600 hover:text-white '><LuLayoutDashboard className='text-2xl' />Overview</button></Link>
                    <Link to={'/adminfooditems'}><button className='flex w-full items-center gap-3 rounded-xl px-4 py-3 text-left text-lg font-meduim hover:bg-orange-600 hover:text-white '><GiKnifeFork className='text-2xl' />Food Items</button></Link>
                    <Link to={'/adminorders'}><button className='flex w-full items-center gap-3 rounded-xl px-4 py-3 text-left text-lg font-meduim hover:bg-orange-600 hover:text-white '><HiOutlineClipboardList className='text-2xl' />Orders</button></Link>
                    <Link to={'/adminusers'}> <button className='flex w-full items-center gap-3 rounded-xl px-4 py-3 text-left text-lg font-meduim hover:bg-orange-600 hover:text-white '><FiUsers className='text-2xl' />Users</button></Link>
                    <Link to={'/orderhistory'}><button className='flex w-full items-center gap-3 rounded-xl px-4 py-3 text-left text-lg font-meduim hover:bg-orange-600 hover:text-white '><MdOutlineHistory className='text-2xl' />Orders History</button></Link>

                </div>
                <div className='mt-10 border-t border-border p-4 '>
                    <Link to={''}><button className='flex justify-center w-full items-center gap-3 rounded-xl px-4 py-3 border border-orange-600 text-left text-lg font-meduim hover:bg-orange-600 hover:text-white '><IoIosLogOut className='text-2xl' />Log Out</button></Link>
                </div>
            </div>
        </>
    )
}

export default AdminSlidebar