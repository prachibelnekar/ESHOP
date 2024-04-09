import React from 'react';
import { BsCartCheck, BsCartX } from 'react-icons/bs';
import { useCart } from 'react-use-cart';

const Cart = () => {
    const {
        isEmpty,
        items,
        cartTotal,
        updateItemQuantity,
        removeItem,
        emptyCart,
    } = useCart();

    return (
        <div className="py-4 mt-1 bg-white dark:bg-gray-900 dark:text-white h-[636px]">
            <h1 className="my-5 text-center">
                {isEmpty ? 'Your Cart is Empty' : 'The Cart'}
            </h1>
            <div className='flex justify-center '>
                <table className="table-auto border border-collapse border-gray-500 w-[900px]">
                    <thead>
                        <tr className="border border-gray-500">
                            <th className="border border-gray-500">Product</th>
                            <th className="border border-gray-500 ">Title</th>
                            <th className="border border-gray-500">Price</th>
                            <th className="border border-gray-500">Quantity</th>
                            <th className="border border-gray-500">Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {items.map((item, index) => {
                            return (
                                <tr key={index} className="border border-gray-500">
                                    <td className="border border-gray-500">
                                        <div className="bg-white h-32 overflow-hidden flex justify-center items-center">
                                            <div className=' p-2'>
                                                <img src={item.img} alt="image" className="w-32 h-32 object-cover" />
                                            </div>
                                        </div>
                                    </td>
                                    <td className="border border-gray-500">
                                        <h6 className="whitespace-no-wrap w-56 overflow-hidden overflow-ellipsis text-center ">
                                            {item.title}
                                        </h6>
                                    </td>
                                    <td className="border border-gray-500 text-center">Rs. {item.price}</td>
                                    <td className="border border-gray-500 text-center">Quantity ({item.quantity})</td>
                                    <td className="border border-gray-500 space-x-2 text-center">
                                        <button onClick={() => updateItemQuantity(item.id, item.quantity - 1)} className="px-3 py-1 bg-blue-500 text-white rounded-md">-</button>
                                        <button onClick={() => updateItemQuantity(item.id, item.quantity + 1)} className="px-3 py-1 bg-blue-500 text-white rounded-md">+</button>
                                        <button onClick={() => removeItem(item.id)} className="px-3 py-1 bg-red-500 text-white rounded-md">Remove Item</button>
                                    </td>
                                </tr>
                            )
                        })}
                    </tbody>
                </table>
                {
                    !isEmpty && <div>
                        <div className='fixed bottom-0 ml-10'>
                            <div className=' py-2'>
                                <h1>Total Price: Rs. {cartTotal}</h1>
                            </div>
                            <div className=' p-0 flex '>
                                <div>
                                    <button className='bg-red-500 text-white px-3 py-1 m-2 rounded-lg' onClick={() => emptyCart()}>Empty Cart</button>
                                </div>
                                <div>
                                    <button className=' bg-yellow-400 text-white px-3 py-1 m-2 rounded-lg' >Proceed to Buy</button>
                                </div>
                            </div>
                        </div>
                    </div>
                }
            </div>
        </div>
    )
}

export default Cart;
