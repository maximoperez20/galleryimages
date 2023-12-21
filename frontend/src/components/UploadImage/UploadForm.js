import React, { useEffect, useState } from "react";

function UploadForm({ children, inputData, onSubmit, setProperty }) {
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

    const file = e.target.files[0];
    if (file) {
      // Check file size
      if (file.size <= 6 * 1024 * 1024) {
        setSelectedFile(file);
        setProperty({ image: true });
      } else {
        setSelectedFile(undefined);
        setProperty({ image: false });
      }
    }
  };

  const onTextChange = (e) => {
    let textValid;
    if (e.target.value.length != 0) {
      textValid = true;
    } else {
      textValid = false;
    }
    setProperty({ text: textValid });
  };

  function handleSubmit(event) {
    event.preventDefault();

    const formData = new FormData(event.target);
    // const data = Object.fromEntries(formData);

    onSubmit(formData);
  }

  return (
    <form className="upload-image-form" onSubmit={handleSubmit}>
      <label htmlFor="content">Image</label>
      <input
        type="file"
        accept="image/*"
        required
        name="image"
        onChange={onSelectFile}
      />
      {selectedFile && <img className="image-preview" src={preview} />}
      <label htmlFor="description">Description</label>
      <input
        required
        maxLength={70}
        name="description"
        onChange={onTextChange}
      />
      <div className="buttons-container">{children}</div>
    </form>
  );
}

export default UploadForm;
