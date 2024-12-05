import React, { useState, useRef } from 'react';

const UploadLayout = () => {
    const fileInputRef = useRef(null);
    const [files, setFiles] = useState([]);

    const handleClick = () => {
        // Mở hộp thoại chọn file khi người dùng nhấp vào div
        fileInputRef.current.click();
    };

    const handleFileChange = (e) => {
        const selectedFiles = Array.from(e.target.files);
        setFiles(prevFiles => [...prevFiles, ...selectedFiles]);
    };

    return (
        <div className="flex flex-col flex-grow h-screen justify-center items-center bg-lightBg text-lightText dark:bg-darkBg dark:text-darkText">
            <div
                className="flex flex-col gap-4 justify-center items-center rounded-lg border-dashed border-4 w-1/5 cursor-pointer
                hover:bg-lightBgNav dark:hover:bg-[#3b3b3b] transition-all duration-200"
                style={{ maxHeight: '150px', height: '150px' }}
                onClick={handleClick}
            >
                <i className="fa-solid fa-cloud-arrow-up fa-2xl text-blue-400 dark:text-darkText"></i>
                <p className='font-semibold text-xl'>Tải tài liệu lên</p>
            </div>

            {files.length > 0 && (
                <div className="mt-4 w-full text-center">
                    <h4 className="mb-2">Danh sách tệp đã chọn:</h4>
                    <ul className='max-h-[400px] overflow-y-auto'>
                        {files.map((file, index) => (
                            <li key={index} className="text-sm">{file.name}</li>
                        ))}
                    </ul>
                </div>
            )}

            {/* Ẩn input file, chỉ hiển thị khi nhấn vào div */}
            <input
                type="file"
                ref={fileInputRef}
                className="hidden"
                multiple
                onChange={handleFileChange}
            />
        </div>
    );
};

export default UploadLayout;
