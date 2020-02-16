function gridLecture(input) {
  let coordinates = input[0].split(" ");
  let length = +coordinates[0] + 1;
  let height = +coordinates[1] + 1;

  if (length > 50 || height > 50)
    throw new Error("Grid size cannot be greater than 50x50");
  else if (length <= 0 || height <= 0)
    throw new Error("Grid size cannot be smaller than 1x1");

  let myGrid = {
    length: length,
    height: height,
    map: new Array(height)
  };

  for (let i = 0; i < height; i++) {
    myGrid.map[i] = new Array(length).fill("O");
  }
  
  return myGrid;
}

module.exports = gridLecture;
