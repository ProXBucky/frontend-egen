import React, { useState, useRef, useEffect } from 'react';

const SearchLayout = () => {
    const [messages, setMessages] = useState([]);
    const [input, setInput] = useState('');
    const textareaRef = useRef(null);
    const chatContainerRef = useRef(null);
    const [textareaHeight, setTextareaHeight] = useState('auto');
    const maxHeight = 130; // Ngưỡng tối đa cho chiều cao của textarea

    const handleSend = () => {
        if (input.trim()) {
            setMessages([...messages, { user: 'You', text: input }]);
            setInput('');
            setTextareaHeight('auto'); // Reset chiều cao sau khi gửi tin nhắn
        }
    };

    const handleInput = (e) => {
        setInput(e.target.value);
    };

    useEffect(() => {
        const textarea = textareaRef.current;
        console.log("reset")
        if (textarea) {
            // Reset chiều cao để đo lại
            // textarea.style.height = 'auto';
            // Tính chiều cao cần thiết và áp dụng giới hạn tối đa
            const newHeight = Math.min(textarea.scrollHeight, maxHeight);
            console.log(newHeight)
            setTextareaHeight(`${newHeight}px`);
        }
    }, [input]);

    const handleKeyDown = (e) => {
        if (e.key === 'Enter' && !e.shiftKey) {
            e.preventDefault();
            handleSend();
        }
    };

    useEffect(() => {
        if (chatContainerRef.current) {
            chatContainerRef.current.scrollTop = chatContainerRef.current.scrollHeight;
        }
    }, [messages]);


    return (
        <div className="flex flex-col flex-grow h-screen bg-lightBg dark:bg-darkBg">
            <div className="flex flex-col justify-center items-center mt-5" style={{ maxHeight: '200px', height: '200px' }}>
                <div className="relative w-[600px]">
                    <div
                        className="rounded-2xl bg-lightBg1 dark:bg-darkBg1 p-3 relative"
                        style={{
                            height: `calc(${textareaHeight} + 80px)`, // Điều chỉnh chiều cao của khung chứa textarea và các nút
                        }}
                    >
                        <div
                            className=""
                            style={{
                                height: `calc(${textareaHeight} + 10px)`,
                            }}
                        >
                            <textarea
                                ref={textareaRef}
                                style={{
                                    height: textareaHeight,
                                    resize: 'none',
                                    outline: 'none',
                                    border: 'none',
                                    overflowY: 'auto',
                                    boxShadow: 'none',
                                    transition: 'height 0.2s ease', // Thêm hiệu ứng chuyển đổi mượt
                                }}
                                className="w-full bg-lightBg1 dark:bg-darkBg1 text-lightText dark:text-darkText"
                                placeholder="Nhập thông tin bạn cần biết"
                                value={input}
                                onInput={handleInput}
                                onKeyDown={handleKeyDown}
                            />
                        </div>
                        <div className="flex justify-end absolute bottom-6 right-3">
                            <i
                                className="fa-regular fa-circle-up fa-2xl text-lightText dark:text-darkText cursor-pointer hover:opacity-50 dark:hover:opacity-70"
                                onClick={handleSend}
                            ></i>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SearchLayout;
