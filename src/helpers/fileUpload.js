export const fileUpload = async(file) => {
    const cloudinaryURL = "https://api.cloudinary.com/v1_1/dfckbsbzm/upload";
    const formData = new FormData();
    formData.append('upload_preset', 'react-journal');
    formData.append('file', file);

    try {
        const resp = await fetch(cloudinaryURL, {
            method: 'POST',
            body: formData
        })

        console.log(resp);
        if(!resp.ok) throw new Error("No se pudo guardar la imagen");
    } catch (error) {
        console.log(error);
        throw new Error(error.message)
    }
}