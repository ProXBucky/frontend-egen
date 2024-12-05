import { ModalBody } from "react-bootstrap";
import Modal from 'react-bootstrap/Modal';

const ModalViewInformation = ({ modalViewInformation, handleCloseModal }) => {
    return (
        <Modal
            size="lg"
            aria-labelledby="contained-modal-title-vcenter"
            centered
            show={modalViewInformation}
        >
            <ModalBody className="text-lightText bg-lightBg1 dark:text-darkText dark:bg-darkBg1 rounded-lg overflow-hidden">
                <div className='flex items-center justify-between px-6 py-2 text-lightText bg-lightBg1 dark:text-darkText dark:bg-darkBg1'>
                    <h2 className="text-xl font-bold">Thông tin tài khoản</h2>
                    <i className="fa-solid fa-xmark fa-xl cursor-pointer" onClick={handleCloseModal}></i>
                </div>
                <div className="bg-lightBg1 dark:bg-darkBg1 rounded-2xl py-2 px-4" >
                    <div className="flex sm:flex-col md:flex-col lg:flex-row xl:flex-row items-center">
                        <div className="sm:w-full md:w-full lg:w-1/3 xl:w-1/3 flex justify-center flex-col gap-2 items-center px-3">
                            <div className="rounded-full overflow-hidden">
                                <img loading="lazy" className="h-48" src='QH19.jpg' />
                            </div>
                            <h2 className="sm:text-xl md:text-xl lg:text-lg xl:text-lg font-semibold">Nguyễn Quang Hải</h2>
                        </div>
                        <div className="sm:w-full md:w-full lg:w-2/3 xl:w-2/3 text-lightText dark:text-darkText sm:mt-4 md:mt-5 lg:pl-5 xl:pl-5">
                            <div className="bg-lightBg1 dark:bg-darkBg1 rounded-lg p-3 flex flex-col gap-3">
                                <div className="flex flex-row justify-between">
                                    <p className="text-sm">Tên đăng nhập</p>
                                    <span className="text-lightText dark:text-darkText text-base font-semibold">qh19@gmail.com</span>
                                </div>
                                <div className="flex flex-row justify-between">
                                    <p className="text-sm">Ngày sinh</p>
                                    <span className="text-lightText dark:text-darkText text-base font-semibold">19/01/1997</span>
                                </div>
                                <div className="flex flex-row justify-between">
                                    <p className="text-sm">Số điện thoại</p>
                                    <span className="text-lightText dark:text-darkText text-base font-semibold">07878787878787</span>
                                </div>

                                <div className="flex flex-row justify-between">
                                    <p className="text-sm">Email</p>
                                    <span className="text-lightText dark:text-darkText text-base font-semibold">qh19@gmail.com</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div >
            </ModalBody>
        </Modal >
    )

}

export default ModalViewInformation