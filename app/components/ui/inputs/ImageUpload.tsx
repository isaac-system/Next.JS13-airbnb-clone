"use client";

import { useCallback, useMemo, useState } from "react";

import { useS3Upload, getImageData } from "next-s3-upload";
import Image from "next/image";
import { TbPhotoPlus } from "react-icons/tb";

interface ImageUploadProps {
  onChange: (value: string) => void;
  value: string;
  onChangeImageSize: (value: { width: number; height: number }) => void;
  imageSize: { width: number; height: number };
}

const ImageUpload: React.FC<ImageUploadProps> = ({
  onChange,
  value,
  imageSize,
  onChangeImageSize,
}) => {
  const { FileInput, openFileDialog, uploadToS3 } = useS3Upload();

  const handleFileChange = useCallback(
    async (file: any) => {
      const { url } = await uploadToS3(file);
      const { height, width } = await getImageData(file);
      //   console.log(files);
      if (width && height) {
        onChangeImageSize({ width: width, height: height });
      }
      onChange(url);
    },
    [uploadToS3, onChangeImageSize, onChange]
  );

  return (
    <div>
      <FileInput onChange={handleFileChange} />

      <div
        onClick={openFileDialog}
        className={`
            relative
            cursor-pointer
            hover:opacity-70
            transition
            border-dashed 
            border-2
            ${value ? "" : "p-20"}
            border-neutral-300
            flex
            flex-col
            justify-center
            items-center
            gap-4
            text-neutral-600
        `}
      >
        {value ? (
          <Image
            src={value}
            width={imageSize.width}
            height={imageSize.height}
            style={{ objectFit: "cover" }}
            alt="Upload Image"
          />
        ) : (
          <>
            <TbPhotoPlus size={50} />
            <div className="font-semibold text-lg">Click to upload</div>
          </>
        )}
      </div>
    </div>
  );
};

export default ImageUpload;
