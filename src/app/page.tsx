import Image from "next/image";
import { useState } from "react";

export default function Home() {
  // const [file, setfile] = useState<File | undefined>(undefined);
  // const [fileUrl, setfileUrl] = useState<string | undefined>(undefined);

  // const onHandleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
  //   const file = e.target.files?.[0];
  //   setfile(file);

  //   if (fileUrl) {
  //     URL.revokeObjectURL(fileUrl);
  //   }

  //   if (file) {
  //     const url = URL.createObjectURL(file);
  //     setfileUrl(url);
  //   } else {
  //     setfileUrl(undefined);
  //   }
  // };
  // console.log(file);
  return (
    // <div className="flex flex-col">
    //   <h2>Upload the file you want to store</h2>
    //   <form
    //     className="flex flex-col"
    //     action="/api/upload"
    //     method="post"
    //     encType="multipart/form-data"
    //   >
    //     <input
    //       type="file"
    //       name="media"
    //       accept="image/jpeg"
    //       onChange={onHandleChange}
    //     />
    //     <button type="submit">Upload</button>
    //   </form>

    //   {fileUrl && (
    //     <div>
    //       <h2>Preview</h2>
    //       <Image src={fileUrl} alt="preview" width={200} height={200} />
    //     </div>
    //   )}
    // </div>
    <div>asdf</div>
  );
}
