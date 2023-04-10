export const transformImages = (images) => images.flatMap(image => [`1|${image}`, `2|${image}`]).sort(() => Math.random() - 0.5)
