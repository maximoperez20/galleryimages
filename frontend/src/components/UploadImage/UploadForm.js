import React, { useEffect, useState } from "react";

function UploadForm({ children, inputData, onSubmit }) {
  const [selectedFile, setSelectedFile] = useState();
  const [preview, setPreview] = useState();

  useEffect(() => {
    if (!selectedFile) {
      setPreview(undefined);
      return;
    }

    const objectUrl = URL.createObjectURL(selectedFile);
    setPreview(objectUrl);

    // free memory when ever this component is unmounted
    return () => URL.revokeObjectURL(objectUrl);
  }, [selectedFile]);

  const onSelectFile = (e) => {
    if (!e.target.files || e.target.files.length === 0) {
      setSelectedFile(undefined);
      return;
    }

    // I've kept this example simple by using the first image instead of multiple
    setSelectedFile(e.target.files[0]);
  };
  function handleSubmit(event) {
    event.preventDefault();

    const formData = new FormData(event.target);
    // const data = Object.fromEntries(formData);

    onSubmit(formData);
  }

  return (
    <div className="">
      <form className="upload-image-form" onSubmit={handleSubmit}>
        <label htmlFor="content">Image</label>
        <input
          type="file"
          accept="image/*"
          required
          name="image"
          defaultValue={inputData?.content}
          onChange={onSelectFile}
        />
        {selectedFile && <img className="image-preview" src={preview} />}
        <label htmlFor="description">Description</label>
        <input
          required
          maxLength={70}
          name="description"
          defaultValue={inputData?.description}
        />
        <div className="buttons-container">{children}</div>
      </form>
    </div>
  );
}

export default UploadForm;
