

const DragAndDrop = () => {
  const handleDragEnter = (e) => {
    e.preventDefault();
    e.stopPropagation();
  };

  const handleDragLeave = (e) => {
    e.preventDefault();
    e.stopPropagation();
  };

  const handleDragOver = (e) => {
    e.preventDefault();
    e.stopPropagation();
  };

  const handleDrop = (e) => {
    e.preventDefault();
    e.stopPropagation();
    const files = e.dataTransfer.files;
    // Handle dropped files here, for example:
    console.log('Files dropped:', files);
    // You can perform upload or further processing of dropped files
  };

  return (
    <div
      className="drag-drop-zone border-dashed w-[410px] h-[150px] border-2 border-gray-300 rounded-lg p-4 text-center"
      onDrop={handleDrop}
      onDragOver={handleDragOver}
      onDragEnter={handleDragEnter}
      onDragLeave={handleDragLeave}
    >
      <p className="text-gray-500">Drag files here to upload or click to select files.</p>
    </div>
  );
};

export default DragAndDrop;
