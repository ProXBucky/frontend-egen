import React from 'react';

const SideBar = () => {
    // Tạo danh sách các dòng chữ ngẫu nhiên
    const items = [
        "This is a random sentence that might be too long to fit.",
        "Short text",
        "Another random text for testing overflow in Tailwind.",
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
        "Tailwind CSS is amazing!",
        "This text will demonstrate text truncation.",
        "React is powerful for building UI.",
        "Adding more items to the list for scrolling.",
        "Random content generation is helpful.",
        "Let's see how Tailwind handles this text.",
        "Always make your UI responsive and clean.",
        "Truncate text to prevent overflow issues.",
        "User experience is key in modern design.",
        "Tailwind makes CSS management simpler.",
        "Enhance your React app with good styles.",
        "Let's see how Tailwind handles this text.",
        "Always make your UI responsive and clean.",
        "Truncate text to prevent overflow issues.",
        "User experience is key in modern design.",
        "Tailwind makes CSS management simpler.",
        "Enhance your React app with good styles."
    ];

    return (
        <div className="bg-lightBgSideBar dark:bg-darkBgNav text-lightText dark:text-darkText h-screen w-64">
            <div className="h-[60px] text-end p-3">
                <i className="fa-regular fa-pen-to-square fa-lg cursor-pointer"></i>
            </div>
            <ul className="p-3 pl-2 overflow-y-auto max-h-[calc(100%-60px)]">
                {items.map((item, index) => (
                    <li key={index} className="truncate">
                        <a
                            className="block rounded-md p-2 text-lightText dark:text-darkText hover:bg-lightBg1 hover:text-lightText 
                            dark:hover:bg-darkBg1 dark:hover:text-darkText no-underline text-sm font-normal whitespace-nowrap overflow-hidden"
                            href="#"
                            title={item} // Hiển thị tooltip khi hover nếu bị cắt
                        >
                            {item}
                        </a>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default SideBar;
