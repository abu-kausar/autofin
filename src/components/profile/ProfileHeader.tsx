import React from 'react'

const ProfileHeader = () => {
    return (
        <div className='w-full'>
            <div className="bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 rounded-lg h-[240px]">
            </div>
            <div className="-mt-16">
                <div className="flex items-end w-full">
                    <input
                        type="file"
                        id="fileInput"
                        accept="image/*"
                        style={{ display: 'none' }}
                    // onChange={handleFileChange}
                    // disabled={isUploading}
                    />

                    <div className='relative'>
                        {/* {isUploading && (
                            <div className='absolute inset-0 h-32 w-32 rounded-full border-4 border-white ml-4 bg-black/60 flex items-center justify-center'>
                                <Spinner2 heightWidthClass='h-5 w-5 border-3 border-white' />
                            </div>
                        )} */}
                        <img src="/images/profile/img_avatar.png" alt="Profile" className="h-32 w-32 rounded-full border-4 border-white ml-4" />
                    </div>

                    <div className="ml-4 flex flex-col">
                        <h2 className="text-2xl font-semibold text-gray-900 whitespace-nowrap">Joni Ahmed</h2>
                        <p className='text-base font-normal text-[#475467]'>Update your photo and personal details.</p>
                    </div>

                    <div className="ml-auto pb-2">
                        <button className="bg-[#5235E8] text-white py-2 px-4 rounded-lg ml-2 hover:bg-blue-600 whitespace-nowrap">
                            Change Picture
                        </button>
                    </div>

                    {/* <div className="ml-auto pb-2">
                        <button className="bg-[#5235E8] text-white py-2 px-4 rounded-lg ml-2 hover:bg-blue-600 whitespace-nowrap" onClick={() => document.getElementById('fileInput').click()}>
                            Change Picture
                        </button>
                    </div> */}
                </div>
            </div>
        </div>
    )
}

export default ProfileHeader