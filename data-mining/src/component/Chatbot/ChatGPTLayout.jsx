import React from 'react';
import SideBar from './SideBar';
import ChatBox from './ChatBox';

const ChatGPTLayout = () => {
    return (
        <div className="flex"
            style={{ height: "calc(100vh - 50px)" }}
        >
            <SideBar />
            <div className="flex-grow flex flex-col w-3/4 h-screen">
                <div className="p-3 bg-lightBg dark:bg-darkBg h-[50px]">
                    <h5 className="text-lg font-semibold text-lightText dark:text-white">Elcom - GPT</h5>
                </div>
                <ChatBox />
            </div>
        </div>
    );
};

export default ChatGPTLayout;
