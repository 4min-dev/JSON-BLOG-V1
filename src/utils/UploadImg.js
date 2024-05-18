
export const UploadImg = (file,imgAvatar,setAvatar) => {
      if (!file) {
        return;
      }
  
      if (!file.type.startsWith('image/')) {
        console.error('Entered file is not an image');
        setAvatar({...imgAvatar, imgStatus: 'Entered file is not an image'});
        return;
      }
  
      const reader = new FileReader();
      reader.onload = () => {
        return setAvatar(prev => ({...prev, imgUrl: reader.result, imgStatus: null}));
      };
      reader.onerror = (error) => {
        console.error('Error reading the file:', error);
        return setAvatar(prev => ({...prev, imgStatus: 'Error reading the file. Please try again.'}));
      };
      reader.readAsDataURL(file);
  };