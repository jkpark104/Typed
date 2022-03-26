export const changeYoutubeUrl = (url: string) => {
  return url.replace('youtube.com/watch?v=', 'youtube.com/embed/');
};

export const getNameOfImage = (alt: string) => {
  return alt.replace(/.jpe?g|.png/i, '');
};
