const fileUpload = async (file) => {
    const cloudURL = 'https://api.cloudinary.com/v1_1/dbyrp5tgh/upload';

    const formData = new FormData();
    formData.append('upload_preset', 'journal-app');
    formData.append('file', file);

    try {
        const res = await fetch(cloudURL, { method: 'POST', body: formData });

        if (res.ok) {
            const resJson = await res.json();
            return resJson.secure_url;
        } else {
            throw await res.json();
        }
    } catch (error) {
        console.log(error);
    }
};
export default fileUpload;
