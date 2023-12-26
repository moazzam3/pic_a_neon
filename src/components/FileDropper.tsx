import { useCallback, useState } from 'react';
import { useDropzone, FileRejection, Accept } from 'react-dropzone';

interface FileDropzoneProps {
	onFileUpload: (file: File) => void;
	acceptedFileTypes?: Accept;
}

const FileDropzone: React.FC<FileDropzoneProps> = (
	props: FileDropzoneProps
) => {
	const { onFileUpload, acceptedFileTypes } = props;
	const [filePreview, setFilePreview] = useState<string | null>(null);

	const onDrop = useCallback(
		(acceptedFiles: File[], fileRejections: FileRejection[]) => {
			if (acceptedFiles.length > 0) {
				const file = acceptedFiles[0];
				onFileUpload(file);

				// Read the file and set the preview
				const reader = new FileReader();
				reader.onload = (e) => {
					setFilePreview(e.target?.result as string);
				};
				reader.readAsDataURL(file);
			} else if (fileRejections.length > 0) {
				console.error('File rejected:', fileRejections[0].errors[0].message);
			}
		},
		[onFileUpload]
	);

	const dropzoneProps = useDropzone({
		onDrop,
		accept: acceptedFileTypes,
	});

	const { getRootProps, getInputProps, isDragActive } = dropzoneProps;

	return (
		<div
			{...getRootProps()}
			className={`dropzone cursor-pointer bg-slate-100 p-4 border-dashed border-2 border-gray-400 rounded-md text-center ${
				isDragActive ? 'active' : ''
			}`}
		>
			<input {...getInputProps()} />
			{filePreview && (
				<img
					src={filePreview}
					alt='File Preview'
					className='mx-auto max-w-full max-h-48 mb-4 rounded'
				/>
			)}
			<p className='text-gray-600'>
				{isDragActive
					? 'Drop the file here...'
					: `Drag 'n' drop an ${
							acceptedFileTypes ? acceptedFileTypes : 'any'
					} file here, or click to select one`}
			</p>
		</div>
	);
};

export default FileDropzone;
