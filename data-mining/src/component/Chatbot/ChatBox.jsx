import React, { useState, useRef, useEffect } from 'react';

const ChatBox = () => {
    const [messages, setMessages] = useState([]);
    const [input, setInput] = useState('');
    const textareaRef = useRef(null);
    const chatContainerRef = useRef(null);
    const [textareaHeight, setTextareaHeight] = useState('auto');
    const maxHeight = 120; // Ngưỡng tối đa cho chiều cao của textarea

    const handleSend = () => {
        if (input.trim()) {
            setMessages([...messages, { user: 'You', text: input }]);
            setInput('');
            setTextareaHeight('auto');
        }
    };

    const handleInput = (e) => {
        setInput(e.target.value);
        const textarea = textareaRef.current;
        const newHeight = Math.min(textarea.scrollHeight, maxHeight); // Giới hạn chiều cao tối đa
        setTextareaHeight(`${newHeight}px`);
    };

    const handleKeyDown = (e) => {
        if (e.key === 'Enter' && !e.shiftKey) {
            e.preventDefault(); // Ngăn thêm dòng mới khi nhấn Enter
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
            <div
                className="flex-grow overflow-auto py-3 px-48 text-lightText dark:text-darkText"
                style={{ maxHeight: '400px', height: '400px' }}
                ref={chatContainerRef}
            >
                {messages.map((msg, idx) => (
                    <div key={idx} className="mb-2">
                        <strong>{msg.user}:</strong> <span>{msg.text}</span>
                    </div>
                ))}
            </div>
            <div className="flex flex-col justify-center mt-3" style={{ maxHeight: '200px', height: '200px' }}>
                <div className="relative px-48">
                    <div
                        className="rounded-2xl bg-lightBg1 dark:bg-darkBg1 p-3 relative"
                        style={{
                            height: `calc(${textareaHeight} + 80px)`,
                        }}
                    >
                        <div
                            className=""
                            style={{
                                height: `calc(${textareaHeight} + 20px)`,
                                paddingLeft: '20px',
                                paddingRight: '20px',
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
                                }}
                                className="w-full bg-lightBg1 dark:bg-darkBg1 text-lightText dark:text-darkText"
                                placeholder="Nhập thông tin bạn cần biết"
                                value={input}
                                onInput={handleInput}
                                onKeyDown={handleKeyDown}
                            />
                        </div>
                        <div className="flex justify-end absolute bottom-6 right-3">
                            <i className="fa-regular fa-circle-up fa-2xl text-lightText dark:text-darkText cursor-pointer hover:opacity-50 dark:hover:opacity-70"
                                onClick={handleSend}
                            ></i>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ChatBox;
