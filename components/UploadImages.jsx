import { Spinner, SpinnerDeleting} from "./Spinner";
import React, { useState } from "react";
import axios from "axios";
import { versionApi, api } from "@/lib/configApi";
import Image from "next/image";

const UploadImages = ({ images, setImages, className }) => {
    const [isUploading, setIsUploading] = useState(false)
    const [isDeleting, setIsDeleting] = useState('')

    async function uploadImages(ev) {
        const files = ev.target?.files

        if (files?.length > 0) {
            setIsUploading(true)
            const data = new FormData()
            for (const file of files) {
                data.append("file", file)
            }
            const res = await axios.post(`${api}/${versionApi}/upload-images`, data);

            setImages(oldImages => {
                return [...oldImages, ...res.data.links];
            });
            setIsUploading(false)
        }
    }

    async function deleteImage(file) {
        setIsDeleting(file)
        await axios.delete(`${api}/${versionApi}/upload-images?image=${file}`).then(response => {
            if (response?.data?.deleted) {
                let newImages = images.filter(item => item !== file)
                setImages(newImages);
            }
        });
        setIsDeleting('');
    }

    return (
        <div className={`${className}`}>
            {!!images?.length && images.map(link => (
                <div key={link} className="relative flex items-center justify-center h-[80px] w-[80px] rounded-lg border border-gray-500 overflow-hidden">
                    {link.includes(".pdf") ? (
                            <Image alt="pdf" width={70} height={70} className="object-contain" src={"/images/pdf-g.png"} />
                        ) :(
                            <Image alt="news images" width={128} height={128} className="object-contain" src={link} />
                        )}
                    <button onClick={() => deleteImage(link)} className="absolute font-normal text-sm top-0 right-0 w-6 h-6 bg-danger text-light">
                        X
                    </button>
                    {link === isDeleting && (
                        <div key={link} className="h-[80px] flex items-center absolute">
                            <SpinnerDeleting />
                        </div>
                    )}
                </div>
            ))}
            {isUploading && (
                <div className="h-[80px] flex items-center">
                    <Spinner />
                </div>
            )}
            <label className="w-[80px] h-[80px] border border-gray-500 gap-2 cursor-pointer flex flex-col items-center rounded-lg m-auto bg-mygray_less dark:bg-secondary text-sm text-placeholder justify-center">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M3 16.5v2.25A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75V16.5m-13.5-9L12 3m0 0l4.5 4.5M12 3v13.5" />
                </svg>
                <span>
                    Upload
                </span>
                <input onChange={uploadImages} type="file" className="hidden"></input>
            </label>
        </div>
    );
}

export default UploadImages;