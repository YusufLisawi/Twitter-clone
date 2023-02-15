import React from "react";
import "./styles/UploadIcon.css";
function UploadIcon({ Icon, type }) {
	return (
		<div class="uploadIcon">
			<label for="fileInput">
				<Icon />
			</label>
			<input type="file" accept={type} id="fileInput" />
		</div>
	);
}

export default UploadIcon;
